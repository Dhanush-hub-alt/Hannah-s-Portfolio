const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, '..', 'public', 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

const sourceLogo = path.join(__dirname, '..', 'public', 'images', 'brand_logo.png');

const psScript = `
Add-Type -AssemblyName System.Drawing

function Resize-Image($srcPath, $dstPath, $w, $h) {
    $src = [System.Drawing.Image]::FromFile($srcPath)
    $dest = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($dest)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)
    $g.DrawImage($src, 0, 0, $w, $h)
    $dest.Save($dstPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $dest.Dispose()
    $src.Dispose()
}

function Create-Maskable($srcPath, $dstPath, $size) {
    $src = [System.Drawing.Image]::FromFile($srcPath)
    $dest = New-Object System.Drawing.Bitmap($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($dest)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    # Background for maskable icon
    $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 10, 10, 10))
    $g.FillRectangle($brush, 0, 0, $size, $size)
    # 80% safe zone padding for maskable icon
    $padding = [int]($size * 0.1)
    $targetSize = $size - (2 * $padding)
    $g.DrawImage($src, $padding, $padding, $targetSize, $targetSize)
    $dest.Save($dstPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $brush.Dispose()
    $g.Dispose()
    $dest.Dispose()
    $src.Dispose()
}

Resize-Image '${sourceLogo.replace(/\\/g, '\\\\')}' '${path.join(iconsDir, 'icon-192.png').replace(/\\/g, '\\\\')}' 192 192
Resize-Image '${sourceLogo.replace(/\\/g, '\\\\')}' '${path.join(iconsDir, 'icon-384.png').replace(/\\/g, '\\\\')}' 384 384
Resize-Image '${sourceLogo.replace(/\\/g, '\\\\')}' '${path.join(iconsDir, 'icon-512.png').replace(/\\/g, '\\\\')}' 512 512
Resize-Image '${sourceLogo.replace(/\\/g, '\\\\')}' '${path.join(iconsDir, 'apple-touch-icon.png').replace(/\\/g, '\\\\')}' 180 180
Create-Maskable '${sourceLogo.replace(/\\/g, '\\\\')}' '${path.join(iconsDir, 'icon-maskable-512.png').replace(/\\/g, '\\\\')}' 512
`;

const tempPsFile = path.join(__dirname, 'temp_resize.ps1');
fs.writeFileSync(tempPsFile, psScript);
try {
  execSync(`powershell -ExecutionPolicy Bypass -File "${tempPsFile}"`, { stdio: 'inherit' });
  console.log('Successfully generated PWA icons in public/icons/');
} finally {
  if (fs.existsSync(tempPsFile)) fs.unlinkSync(tempPsFile);
}

