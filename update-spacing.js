// ===== AUTO-UPDATE SCRIPT FOR SPACING CHANGES =====
// Save this as: update-spacing.js
// Run with: node update-spacing.js

const fs = require('fs');
const path = require('path');

// Define all the replacements
const replacements = [
  // Section padding replacements
  { 
    pattern: /py-20(?!\d)/g, 
    replacement: 'py-section-y',
    description: 'Section vertical padding'
  },
  { 
    pattern: /py-16(?!\d)/g, 
    replacement: 'py-section-y',
    description: 'Section vertical padding'
  },
  
  // Remove container horizontal padding (container class handles it)
  { 
    pattern: /\s+px-6(?!\d)/g, 
    replacement: '',
    description: 'Remove container horizontal padding'
  },
  { 
    pattern: /\s+px-4\s+sm:px-6/g, 
    replacement: '',
    description: 'Remove responsive container padding'
  },
  
  // Grid gaps
  { 
    pattern: /gap-8(?!\d)/g, 
    replacement: 'gap-md',
    description: 'Grid gaps'
  },
  { 
    pattern: /gap-6(?!\d)/g, 
    replacement: 'gap-md',
    description: 'Grid gaps'
  },
  { 
    pattern: /gap-4(?!\d)/g, 
    replacement: 'gap-sm',
    description: 'Small gaps'
  },
  { 
    pattern: /gap-3(?!\d)/g, 
    replacement: 'gap-sm',
    description: 'Small gaps'
  },
  
  // Margin bottom replacements
  { 
    pattern: /mb-16(?!\d)/g, 
    replacement: 'mb-xl',
    description: 'Extra large margin bottom'
  },
  { 
    pattern: /mb-12(?!\d)/g, 
    replacement: 'mb-lg',
    description: 'Large margin bottom'
  },
  { 
    pattern: /mb-8(?!\d)/g, 
    replacement: 'mb-lg',
    description: 'Large margin bottom'
  },
  { 
    pattern: /mb-6(?!\d)/g, 
    replacement: 'mb-md',
    description: 'Medium margin bottom'
  },
  { 
    pattern: /mb-4(?!\d)/g, 
    replacement: 'mb-md',
    description: 'Medium margin bottom'
  },
  { 
    pattern: /mb-3(?!\d)/g, 
    replacement: 'mb-sm',
    description: 'Small margin bottom'
  },
  { 
    pattern: /mb-2(?!\d)/g, 
    replacement: 'mb-sm',
    description: 'Small margin bottom'
  },
  
  // Padding replacements
  { 
    pattern: /p-8(?!\d)/g, 
    replacement: 'p-card',
    description: 'Card padding'
  },
  { 
    pattern: /p-6(?!\d)/g, 
    replacement: 'p-md',
    description: 'Medium padding'
  },
  { 
    pattern: /p-4(?!\d)/g, 
    replacement: 'p-sm',
    description: 'Small padding'
  },
  
  // Button padding
  { 
    pattern: /px-12\s+py-6/g, 
    replacement: 'px-button-x py-button-y',
    description: 'Large button padding'
  },
  { 
    pattern: /px-10\s+py-5/g, 
    replacement: 'px-button-x py-button-y',
    description: 'Button padding'
  },
  { 
    pattern: /px-8\s+py-4/g, 
    replacement: 'px-button-x py-button-y',
    description: 'Button padding'
  },
  { 
    pattern: /px-6\s+py-3/g, 
    replacement: 'px-md py-sm',
    description: 'Small button padding'
  },
  { 
    pattern: /px-4\s+py-2/g, 
    replacement: 'px-sm py-xs',
    description: 'Extra small button padding'
  },
  
  // Remove responsive text sizes (use fluid typography)
  { 
    pattern: /text-5xl\s+md:text-6xl\s+lg:text-7xl/g, 
    replacement: 'text-6xl',
    description: 'Hero title size'
  },
  { 
    pattern: /text-5xl\s+md:text-6xl/g, 
    replacement: 'text-5xl',
    description: 'Section title size'
  },
  { 
    pattern: /text-4xl\s+md:text-5xl/g, 
    replacement: 'text-4xl',
    description: 'Subtitle size'
  },
  { 
    pattern: /text-3xl\s+md:text-4xl/g, 
    replacement: 'text-3xl',
    description: 'Heading size'
  },
  { 
    pattern: /text-2xl\s+md:text-3xl/g, 
    replacement: 'text-2xl',
    description: 'Subheading size'
  },
  
  // Fix specific hero padding issues
  { 
    pattern: /pt-32\s+sm:pt-36\s+md:pt-40\s+lg:pt-44\s+pb-16\s+sm:pb-20/g, 
    replacement: 'py-section-y pt-32',
    description: 'Hero section padding'
  },
  { 
    pattern: /pt-32\s+sm:pt-36\s+md:pt-40\s+lg:pt-44\s+pb-20/g, 
    replacement: 'py-section-y pt-32',
    description: 'Hero section padding'
  },
  { 
    pattern: /pt-32\s+pb-20/g, 
    replacement: 'py-section-y pt-32',
    description: 'Hero section padding'
  },
  { 
    pattern: /pt-32\s+pb-16/g, 
    replacement: 'py-section-y pt-32',
    description: 'Hero section padding'
  },
  
  // Space utilities
  { 
    pattern: /space-y-4(?!\d)/g, 
    replacement: 'space-y-md',
    description: 'Vertical spacing'
  },
  { 
    pattern: /space-y-3(?!\d)/g, 
    replacement: 'space-y-sm',
    description: 'Small vertical spacing'
  },
  { 
    pattern: /space-y-2(?!\d)/g, 
    replacement: 'space-y-xs',
    description: 'Extra small vertical spacing'
  },
  
  // Margin top replacements
  { 
    pattern: /mt-16(?!\d)/g, 
    replacement: 'mt-xl',
    description: 'Extra large margin top'
  },
  { 
    pattern: /mt-12(?!\d)/g, 
    replacement: 'mt-lg',
    description: 'Large margin top'
  },
  { 
    pattern: /mt-8(?!\d)/g, 
    replacement: 'mt-lg',
    description: 'Large margin top'
  },
  { 
    pattern: /mt-6(?!\d)/g, 
    replacement: 'mt-md',
    description: 'Medium margin top'
  },
  { 
    pattern: /mt-4(?!\d)/g, 
    replacement: 'mt-md',
    description: 'Medium margin top'
  },
];

// Component files to update
const componentFiles = [
  'src/components/sections/HeroSection.tsx',
  'src/components/sections/ServicesGrid.tsx',
  'src/components/sections/ProcessSteps.tsx',
  'src/components/sections/CTASection.tsx',
  'src/components/sections/TestimonialsSection.tsx',
  'src/components/sections/FAQSection.tsx',
  'src/components/sections/StatsSection.tsx',
  'src/components/sections/WhyUs.tsx',
  'src/components/layout/Header.tsx',
  'src/components/layout/Footer.tsx',
  'src/components/layout/FloatingButtons.tsx',
  'src/components/ui/CallButton.tsx',
  'src/components/ui/WhatsAppButton.tsx',
  'src/components/ui/ContactForm.tsx',
  'src/app/page.tsx',
  'src/app/[service]/page.tsx',
  'src/app/sehirler/[city]/page.tsx',
  'src/app/sehirler/page.tsx',
  'src/app/blog/page.tsx',
  'src/app/blog/[slug]/page.tsx',
  'src/app/hakkimizda/page.tsx',
  'src/app/iletisim/page.tsx',
];

// Create backup directory
const backupDir = 'spacing-backup';
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

// Function to process a file
function processFile(filePath) {
  try {
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return;
    }
    
    // Read the file
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Create backup
    const backupPath = path.join(backupDir, path.basename(filePath));
    fs.writeFileSync(backupPath, originalContent);
    
    // Track changes
    let changeCount = 0;
    const appliedChanges = [];
    
    // Apply replacements
    replacements.forEach(({ pattern, replacement, description }) => {
      const matches = content.match(pattern);
      if (matches) {
        content = content.replace(pattern, replacement);
        changeCount += matches.length;
        appliedChanges.push(`  - ${description}: ${matches.length} replacements`);
      }
    });
    
    // Write updated content if changes were made
    if (changeCount > 0) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Updated ${path.basename(filePath)} (${changeCount} changes)`);
      appliedChanges.forEach(change => console.log(change));
    } else {
      console.log(`⏭️  No changes needed in ${path.basename(filePath)}`);
    }
    
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

// Process all files
console.log('🚀 Starting spacing updates...\n');
console.log(`📁 Creating backups in ./${backupDir}/\n`);

componentFiles.forEach(file => {
  processFile(file);
  console.log(''); // Add blank line between files
});

console.log('✨ Spacing updates complete!');
console.log('\n📋 Next steps:');
console.log('1. Review the changes in your code editor');
console.log('2. Test the application locally');
console.log('3. If issues occur, restore from backups in ./spacing-backup/');

// Create a summary report
const report = `
SPACING UPDATE REPORT
=====================
Date: ${new Date().toISOString()}

Files Updated: ${componentFiles.length}

Replacements Applied:
${replacements.map(r => `- ${r.description}`).join('\n')}

Backup Location: ./${backupDir}/

To restore a file:
cp ${backupDir}/[filename] src/[original-path]/[filename]

To restore all files:
cp ${backupDir}/* src/
`;

fs.writeFileSync('spacing-update-report.txt', report);
console.log('\n📄 Report saved to spacing-update-report.txt');