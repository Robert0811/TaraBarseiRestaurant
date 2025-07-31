const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Create icons directory if it doesn't exist
const iconsDir = path.join(__dirname, '..', 'public', 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Icon sizes for PWA
const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

// Create a simple restaurant icon with SVG
const createBaseSVG = () => `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FFB366;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FF8C42;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background circle -->
  <circle cx="256" cy="256" r="240" fill="url(#grad1)" stroke="#9CAF88" stroke-width="8"/>
  
  <!-- Plate -->
  <circle cx="256" cy="280" r="120" fill="white" stroke="#ddd" stroke-width="4"/>
  <circle cx="256" cy="280" r="100" fill="#f9f9f9" stroke="#eee" stroke-width="2"/>
  
  <!-- Fork -->
  <rect x="180" y="150" width="8" height="120" fill="#666" rx="4"/>
  <rect x="175" y="150" width="6" height="30" fill="#666" rx="3"/>
  <rect x="185" y="150" width="6" height="30" fill="#666" rx="3"/>
  <rect x="195" y="150" width="6" height="25" fill="#666" rx="3"/>
  
  <!-- Knife -->
  <rect x="320" y="150" width="8" height="120" fill="#666" rx="4"/>
  <rect x="318" y="140" width="12" height="40" fill="#888" rx="6"/>
  
  <!-- Spoon -->
  <rect x="250" y="100" width="8" height="80" fill="#666" rx="4"/>
  <ellipse cx="254" cy="95" rx="12" ry="18" fill="#888"/>
  
  <!-- Text "TB" -->
  <text x="256" y="300" text-anchor="middle" font-family="Arial, sans-serif" font-size="60" font-weight="bold" fill="#9CAF88">TB</text>
</svg>
`;

// Generate icons
async function generateIcons() {
  try {
    const svgBuffer = Buffer.from(createBaseSVG());
    
    console.log('Generating PWA icons...');
    
    for (const size of sizes) {
      const outputPath = path.join(iconsDir, `icon-${size}x${size}.png`);
      
      await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toFile(outputPath);
      
      console.log(`Created: icon-${size}x${size}.png`);
    }
    
    console.log('All PWA icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons();
