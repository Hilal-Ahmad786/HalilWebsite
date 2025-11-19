// ===== VERIFICATION SCRIPT FOR SPACING CHANGES =====
// Save as: verify-spacing.js
// Run with: node verify-spacing.js

const fs = require('fs');
const path = require('path');

// Define what to check for
const oldPatterns = [
  { pattern: /py-20(?!\d)/g, name: 'py-20 (should be py-section-y)' },
  { pattern: /py-16(?!\d)/g, name: 'py-16 (should be py-section-y)' },
  { pattern: /\bpx-6(?!\d)/g, name: 'px-6 on containers' },
  { pattern: /px-4\s+sm:px-6/g, name: 'px-4 sm:px-6' },
  { pattern: /gap-8(?!\d)/g, name: 'gap-8 (should be gap-md)' },
  { pattern: /gap-6(?!\d)/g, name: 'gap-6 (should be gap-md)' },
  { pattern: /mb-16(?!\d)/g, name: 'mb-16 (should be mb-xl)' },
  { pattern: /mb-12(?!\d)/g, name: 'mb-12 (should be mb-lg)' },
  { pattern: /mb-8(?!\d)/g, name: 'mb-8 (should be mb-lg)' },
  { pattern: /mb-6(?!\d)/g, name: 'mb-6 (should be mb-md)' },
  { pattern: /p-8(?!\d)/g, name: 'p-8 (should be p-card)' },
  { pattern: /px-12\s+py-6/g, name: 'px-12 py-6 (should be px-button-x py-button-y)' },
  { pattern: /px-10\s+py-5/g, name: 'px-10 py-5 (should be px-button-x py-button-y)' },
  { pattern: /px-8\s+py-4(?!4)/g, name: 'px-8 py-4 (should be px-button-x py-button-y)' },
  { pattern: /text-5xl\s+md:text-6xl\s+lg:text-7xl/g, name: 'responsive text sizes' },
  { pattern: /text-5xl\s+md:text-6xl/g, name: 'responsive text sizes' },
  { pattern: /pt-32\s+sm:pt-36\s+md:pt-40/g, name: 'responsive hero padding' },
  { pattern: /space-y-4(?!\d)/g, name: 'space-y-4 (should be space-y-md)' },
  { pattern: /space-y-3(?!\d)/g, name: 'space-y-3 (should be space-y-sm)' },
];

// New patterns that should exist
const newPatterns = [
  { pattern: /py-section-y/g, name: 'py-section-y' },
  { pattern: /gap-md/g, name: 'gap-md' },
  { pattern: /gap-sm/g, name: 'gap-sm' },
  { pattern: /mb-xl/g, name: 'mb-xl' },
  { pattern: /mb-lg/g, name: 'mb-lg' },
  { pattern: /mb-md/g, name: 'mb-md' },
  { pattern: /p-card/g, name: 'p-card' },
  { pattern: /px-button-x/g, name: 'px-button-x' },
  { pattern: /py-button-y/g, name: 'py-button-y' },
  { pattern: /space-y-md/g, name: 'space-y-md' },
];

// Files to check
const filesToCheck = [
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
  'src/app/page.tsx',
  'src/app/[service]/page.tsx',
  'src/app/sehirler/[city]/page.tsx',
  'src/app/hakkimizda/page.tsx',
  'src/app/iletisim/page.tsx',
  'src/app/blog/page.tsx',
];

console.log('🔍 Verifying Spacing Changes...\n');
console.log('=' .repeat(50));

let totalIssues = 0;
let totalFiles = 0;
let filesWithIssues = [];
let filesOk = [];

// Check each file
filesToCheck.forEach(filePath => {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${filePath}\n`);
    return;
  }
  
  totalFiles++;
  const content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath);
  let fileIssues = [];
  
  // Check for old patterns that shouldn't exist
  oldPatterns.forEach(({ pattern, name }) => {
    const matches = content.match(pattern);
    if (matches) {
      fileIssues.push({
        type: 'old',
        name,
        count: matches.length
      });
    }
  });
  
  // Check for new patterns that should exist
  const hasNewPatterns = [];
  newPatterns.forEach(({ pattern, name }) => {
    const matches = content.match(pattern);
    if (matches) {
      hasNewPatterns.push(name);
    }
  });
  
  // Report for this file
  if (fileIssues.length > 0) {
    console.log(`\n❌ ${fileName}`);
    console.log('   Issues found:');
    fileIssues.forEach(issue => {
      console.log(`   - ${issue.count}x ${issue.name}`);
      totalIssues += issue.count;
    });
    filesWithIssues.push(fileName);
  } else {
    filesOk.push(fileName);
  }
  
  // Show which new patterns are being used
  if (hasNewPatterns.length > 0 && fileIssues.length === 0) {
    console.log(`\n✅ ${fileName}`);
    console.log(`   Using new patterns: ${hasNewPatterns.join(', ')}`);
  }
});

// Summary Report
console.log('\n' + '=' .repeat(50));
console.log('\n📊 VERIFICATION SUMMARY\n');

console.log(`Files Checked: ${totalFiles}`);
console.log(`Files OK: ${filesOk.length} ✅`);
console.log(`Files with Issues: ${filesWithIssues.length} ❌`);
console.log(`Total Issues Found: ${totalIssues}`);

if (filesOk.length > 0) {
  console.log('\n✅ Files Successfully Updated:');
  filesOk.forEach(file => console.log(`   - ${file}`));
}

if (filesWithIssues.length > 0) {
  console.log('\n❌ Files Needing Updates:');
  filesWithIssues.forEach(file => console.log(`   - ${file}`));
  
  console.log('\n💡 To fix these issues:');
  console.log('1. Run the update-spacing.js script');
  console.log('2. Or manually update the files listed above');
  console.log('3. Use the find & replace patterns from the manual guide');
} else {
  console.log('\n🎉 All files have been successfully updated!');
  console.log('✨ Your spacing system is now consistent and responsive!');
}

// Check if CSS files exist and have been updated
console.log('\n' + '=' .repeat(50));
console.log('\n📁 CSS FILES CHECK\n');

const cssFiles = [
  { path: 'src/app/globals.css', check: '--font-xs: clamp' },
  { path: 'tailwind.config.ts', check: 'section-y' }
];

cssFiles.forEach(({ path, check }) => {
  if (fs.existsSync(path)) {
    const content = fs.readFileSync(path, 'utf8');
    if (content.includes(check)) {
      console.log(`✅ ${path} - Updated with new system`);
    } else {
      console.log(`❌ ${path} - Not updated (missing: ${check})`);
    }
  } else {
    console.log(`⚠️  ${path} - File not found`);
  }
});

// Generate fix commands
if (totalIssues > 0) {
  const fixCommands = `
QUICK FIX COMMANDS
==================
Run these in your editor's find & replace (with regex enabled):

${oldPatterns.map(p => {
  const find = p.pattern.toString().replace(/\/g?/g, '');
  const replace = find.includes('py-20') || find.includes('py-16') ? 'py-section-y' :
                  find.includes('gap-8') || find.includes('gap-6') ? 'gap-md' :
                  find.includes('mb-16') ? 'mb-xl' :
                  find.includes('mb-12') || find.includes('mb-8') ? 'mb-lg' :
                  find.includes('mb-6') || find.includes('mb-4') ? 'mb-md' :
                  find.includes('p-8') ? 'p-card' :
                  find.includes('px-12') || find.includes('px-10') || find.includes('px-8') ? 'px-button-x py-button-y' :
                  find.includes('text-5xl') ? 'text-5xl' :
                  find.includes('space-y-4') ? 'space-y-md' :
                  find.includes('space-y-3') ? 'space-y-sm' : '';
  
  return replace ? `Find: ${find.replace(/\\/g, '')}
Replace: ${replace}` : '';
}).filter(Boolean).join('\n\n')}
`;
  
  fs.writeFileSync('fix-commands.txt', fixCommands);
  console.log('\n📄 Fix commands saved to fix-commands.txt');
}

console.log('\n✨ Verification Complete!');