const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const faviconSvg = fs.readFileSync(path.join(__dirname, '..', 'public', 'favicon.svg'), 'utf8');

// Extract all path d attributes
const pathRegex = /<path\s+d="([^"]+)"/g;
let match;
const pathStrings = [];
while ((match = pathRegex.exec(faviconSvg)) !== null) {
  pathStrings.push(match[1]);
}

console.log('Found', pathStrings.length, 'paths in favicon.svg');

// Parse each path string into an array of points [x, y]
const parsedPolygons = pathStrings.map((dStr) => {
  // Normalize tokens: M x y L x y ... Z
  const tokens = dStr.trim().split(/\s+/);
  const points = [];
  let i = 0;
  while (i < tokens.length) {
    const token = tokens[i];
    if (token === 'M' || token === 'L') {
      const x = parseFloat(tokens[i + 1]);
      const y = parseFloat(tokens[i + 2]);
      points.push([x, y]);
      i += 3;
    } else if (token === 'Z') {
      i += 1;
    } else {
      i += 1;
    }
  }
  return points;
});

// Create PowerShell script that uses System.Drawing to render icons at any resolution
const psScript = `
Add-Type -AssemblyName System.Drawing

$polygonsJson = '${JSON.stringify(parsedPolygons)}'
$polygons = ConvertFrom-Json $polygonsJson

function Generate-AppIcon($destPath, $size, $isMaskable) {
    $bmp = New-Object System.Drawing.Bitmap($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

    # Background: Midnight Navy #0B1120
    $bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 11, 17, 32))
    $g.FillRectangle($bgBrush, 0, 0, $size, $size)
    $bgBrush.Dispose()

    # Subtle inner glow / decorative border for non-maskable or app icon
    $borderPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(40, 56, 189, 248), [float]($size * 0.015))
    $g.DrawRectangle($borderPen, 0, 0, $size, $size)
    $borderPen.Dispose()

    # Scale and center the 100x100 viewBox
    # Safe zone: For maskable, logo occupies ~65% of size (centered)
    # For standard icons, logo occupies ~75% of size
    $scaleRatio = if ($isMaskable) { 0.65 } else { 0.75 }
    $logoSize = $size * $scaleRatio
    $offsetX = ($size - $logoSize) / 2
    $offsetY = ($size - $logoSize) / 2
    $scaleFactor = $logoSize / 100.0

    # Linear Gradient Brush: Electric Blue #2563EB to Ice Cyan #38BDF8
    $pt1 = New-Object System.Drawing.PointF($offsetX, $offsetY)
    $pt2 = New-Object System.Drawing.PointF(($offsetX + $logoSize), ($offsetY + $logoSize))
    $c1 = [System.Drawing.Color]::FromArgb(255, 37, 99, 235)
    $c2 = [System.Drawing.Color]::FromArgb(255, 56, 189, 248)
    $gradBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($pt1, $pt2, $c1, $c2)

    # Render each polygon
    foreach ($poly in $polygons) {
        $pts = New-Object "System.Drawing.PointF[]" $poly.Count
        for ($k = 0; $k -lt $poly.Count; $k++) {
            $px = $offsetX + ($poly[$k][0] * $scaleFactor)
            $py = $offsetY + ($poly[$k][1] * $scaleFactor)
            $pts[$k] = New-Object System.Drawing.PointF([float]$px, [float]$py)
        }
        $gp = New-Object System.Drawing.Drawing2D.GraphicsPath
        $gp.AddPolygon($pts)
        $g.FillPath($gradBrush, $gp)
        $gp.Dispose()
    }

    $gradBrush.Dispose()
    $bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
    Write-Output "Generated: $destPath ($size x $size)"
}

$iconsDir = 'C:\\Hannah Portfolio\\public\\icons'
if (-not (Test-Path $iconsDir)) {
    New-Item -ItemType Directory -Path $iconsDir | Out-Null
}

Generate-AppIcon "$iconsDir\\icon-192.png" 192 $false
Generate-AppIcon "$iconsDir\\icon-384.png" 384 $false
Generate-AppIcon "$iconsDir\\icon-512.png" 512 $false
Generate-AppIcon "$iconsDir\\icon-maskable-512.png" 512 $true
Generate-AppIcon "$iconsDir\\apple-touch-icon.png" 180 $false
Generate-AppIcon "C:\\Hannah Portfolio\\public\\images\\brand_logo.png" 512 $false
`;

const tempPsFile = path.join(__dirname, 'render_icons.ps1');
fs.writeFileSync(tempPsFile, psScript);
try {
  execSync(`powershell -ExecutionPolicy Bypass -File "${tempPsFile}"`, { stdio: 'inherit' });
  console.log('Portfolio mobile app icons generated successfully!');
} finally {
  if (fs.existsSync(tempPsFile)) fs.unlinkSync(tempPsFile);
}

