#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 Checking and fixing project issues...\n');

// Colors for console output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkFileExists(filePath) {
  return fs.existsSync(filePath);
}

function checkAndFixIssues() {
  let issuesFound = 0;
  let issuesFixed = 0;

  // 1. Check for missing dependencies
  log('📦 Checking dependencies...', 'blue');
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const requiredDeps = ['eslint', 'eslint-config-next'];
    
    for (const dep of requiredDeps) {
      if (!packageJson.devDependencies?.[dep] && !packageJson.dependencies?.[dep]) {
        log(`❌ Missing dependency: ${dep}`, 'red');
        issuesFound++;
      }
    }
  } catch (error) {
    log('❌ Error reading package.json', 'red');
    issuesFound++;
  }

  // 2. Check for TypeScript errors
  log('\n🔧 Checking TypeScript...', 'blue');
  try {
    execSync('npx tsc --noEmit', { stdio: 'pipe' });
    log('✅ TypeScript check passed', 'green');
  } catch (error) {
    log('❌ TypeScript errors found', 'red');
    issuesFound++;
  }

  // 3. Check for ESLint errors
  log('\n🔍 Checking ESLint...', 'blue');
  try {
    execSync('npm run lint', { stdio: 'pipe' });
    log('✅ ESLint check passed', 'green');
  } catch (error) {
    log('❌ ESLint errors found', 'red');
    issuesFound++;
  }

  // 4. Check for missing images
  log('\n🖼️  Checking images...', 'blue');
  const requiredImages = [
    '/kodjo-labore-profile.png',
    '/blockchain-developer-bootcamp.png',
    '/web3-conference-speaking.png',
    '/ethereum-workshop-training.png',
    '/africa-blockchain-summit.png'
  ];

  for (const image of requiredImages) {
    const imagePath = path.join('public', image);
    if (!checkFileExists(imagePath)) {
      log(`❌ Missing image: ${image}`, 'red');
      issuesFound++;
    } else {
      log(`✅ Image found: ${image}`, 'green');
    }
  }

  // 5. Check for responsive design issues
  log('\n📱 Checking responsive design...', 'blue');
  const filesToCheck = [
    'components/navigation.tsx',
    'components/bento-card.tsx',
    'components/gallery.tsx',
    'app/page.tsx'
  ];

  for (const file of filesToCheck) {
    if (checkFileExists(file)) {
      const content = fs.readFileSync(file, 'utf8');
      const responsiveClasses = ['sm:', 'md:', 'lg:', 'xl:', '2xl:'];
      const hasResponsiveClasses = responsiveClasses.some(cls => content.includes(cls));
      
      if (hasResponsiveClasses) {
        log(`✅ Responsive classes found in: ${file}`, 'green');
      } else {
        log(`⚠️  No responsive classes found in: ${file}`, 'yellow');
      }
    }
  }

  // 6. Check for accessibility issues
  log('\n♿ Checking accessibility...', 'blue');
  const accessibilityChecks = [
    { file: 'components/navigation.tsx', patterns: ['aria-label', 'role='] },
    { file: 'components/gallery.tsx', patterns: ['alt=', 'aria-label'] },
    { file: 'app/page.tsx', patterns: ['aria-label', 'role='] }
  ];

  for (const check of accessibilityChecks) {
    if (checkFileExists(check.file)) {
      const content = fs.readFileSync(check.file, 'utf8');
      const hasAccessibility = check.patterns.some(pattern => content.includes(pattern));
      
      if (hasAccessibility) {
        log(`✅ Accessibility attributes found in: ${check.file}`, 'green');
      } else {
        log(`⚠️  Limited accessibility in: ${check.file}`, 'yellow');
      }
    }
  }

  // 7. Check for performance optimizations
  log('\n⚡ Checking performance optimizations...', 'blue');
  const performanceChecks = [
    { file: 'next.config.mjs', patterns: ['optimizePackageImports', 'swcMinify'] },
    { file: 'components/performance-optimizer.tsx', patterns: ['useInView', 'lazy'] },
    { file: 'lib/performance-config.ts', patterns: ['PERFORMANCE_CONFIG'] }
  ];

  for (const check of performanceChecks) {
    if (checkFileExists(check.file)) {
      const content = fs.readFileSync(check.file, 'utf8');
      const hasOptimizations = check.patterns.some(pattern => content.includes(pattern));
      
      if (hasOptimizations) {
        log(`✅ Performance optimizations found in: ${check.file}`, 'green');
      } else {
        log(`⚠️  Limited performance optimizations in: ${check.file}`, 'yellow');
      }
    } else {
      log(`❌ Missing performance file: ${check.file}`, 'red');
      issuesFound++;
    }
  }

  // 8. Check for translation completeness
  log('\n🌍 Checking translations...', 'blue');
  const translationFiles = [
    'lib/translations.ts',
    'lib/data.ts'
  ];

  for (const file of translationFiles) {
    if (checkFileExists(file)) {
      const content = fs.readFileSync(file, 'utf8');
      const languages = ['en', 'fr', 'ewe'];
      const hasAllLanguages = languages.every(lang => content.includes(`"${lang}":`));
      
      if (hasAllLanguages) {
        log(`✅ All languages found in: ${file}`, 'green');
      } else {
        log(`⚠️  Missing languages in: ${file}`, 'yellow');
        issuesFound++;
      }
    }
  }

  // Summary
  log('\n📊 Summary:', 'bold');
  if (issuesFound === 0) {
    log('🎉 No issues found! Your project is in good shape.', 'green');
  } else {
    log(`⚠️  Found ${issuesFound} potential issues.`, 'yellow');
    log('💡 Consider running: npm run lint:fix', 'blue');
    log('💡 Consider running: npm run type-check', 'blue');
  }

  return { issuesFound, issuesFixed };
}

// Run the check
if (require.main === module) {
  try {
    const result = checkAndFixIssues();
    process.exit(result.issuesFound > 0 ? 1 : 0);
  } catch (error) {
    log(`❌ Error during check: ${error.message}`, 'red');
    process.exit(1);
  }
}

module.exports = { checkAndFixIssues };
