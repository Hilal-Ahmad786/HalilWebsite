const fs = require('fs');
const path = require('path');

// Configuration
const SEARCH_DIR = './src';
const PATTERNS = {
    gtm_import: /import.*GoogleTagManager/g,
    ga_import: /import.*GoogleAnalytics/g,
    gtag_call: /window\.gtag\s*\(\s*'event'/g,
    datalayer_push: /window\.dataLayer\.push/g,
    fbq_call: /window\.fbq/g,
};

function searchFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            searchFiles(filePath, fileList);
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                fileList.push(filePath);
            }
        }
    });
    return fileList;
}

console.log('🔍 STARTING TRACKING AUDIT...');
console.log('================================');

const files = searchFiles(SEARCH_DIR);
let errorCount = 0;

// 1. Check Layout for Double Installation
const layoutFile = files.find(f => f.includes('layout.tsx'));
if (layoutFile) {
    const content = fs.readFileSync(layoutFile, 'utf8');
    const hasGTM = PATTERNS.gtm_import.test(content);
    const hasGA = PATTERNS.ga_import.test(content);

    if (hasGTM && hasGA) {
        console.log(`❌ DOUBLE INSTALLATION FOUND in: ${layoutFile}`);
        console.log('   Reason: You are loading both GTM and Google Analytics scripts.');
        console.log('   Fix: Remove <GoogleAnalytics /> and let GTM handle GA4 tags.');
        errorCount++;
    }
}

// 2. Check Analytics Logic for Double Firing
const libFile = files.find(f => f.includes('lib/analytics.ts'));
if (libFile) {
    const content = fs.readFileSync(libFile, 'utf8');
    const hasDataLayer = PATTERNS.datalayer_push.test(content);
    const hasGtag = PATTERNS.gtag_call.test(content);

    if (hasDataLayer && hasGtag) {
        console.log(`\n❌ DOUBLE REPORTING LOGIC in: ${libFile}`);
        console.log('   Reason: Your code sends data to DataLayer (for GTM) AND directly to GA4 (window.gtag).');
        console.log('   Result: Every click is counted TWICE (once by code, once by GTM).');
        console.log('   Fix: Remove the "window.gtag" blocks and keep only "window.dataLayer.push".');
        errorCount++;
    }
}

console.log('\n================================');
if (errorCount === 0) {
    console.log('✅ No obvious double-tracking issues found in code.');
} else {
    console.log(`⚠️ FOUND ${errorCount} CRITICAL ISSUES causing double conversions.`);
}