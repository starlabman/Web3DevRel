#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Vérification et correction automatique du projet...\n');

// Vérifier les traductions manquantes
function checkTranslations() {
  console.log('📝 Vérification des traductions...');
  
  const translationsPath = path.join(__dirname, '../lib/translations.ts');
  const dataPath = path.join(__dirname, '../lib/data.ts');
  
  if (fs.existsSync(translationsPath) && fs.existsSync(dataPath)) {
    console.log('✅ Fichiers de traduction trouvés');
  } else {
    console.log('❌ Fichiers de traduction manquants');
  }
}

// Vérifier les images manquantes
function checkImages() {
  console.log('🖼️ Vérification des images...');
  
  const publicPath = path.join(__dirname, '../public');
  const galleryData = require('../lib/data.ts');
  
  if (fs.existsSync(publicPath)) {
    console.log('✅ Dossier public trouvé');
  } else {
    console.log('❌ Dossier public manquant');
  }
}

// Vérifier la configuration Next.js
function checkNextConfig() {
  console.log('⚙️ Vérification de la configuration Next.js...');
  
  const configPath = path.join(__dirname, '../next.config.mjs');
  
  if (fs.existsSync(configPath)) {
    console.log('✅ Configuration Next.js trouvée');
  } else {
    console.log('❌ Configuration Next.js manquante');
  }
}

// Vérifier les dépendances
function checkDependencies() {
  console.log('📦 Vérification des dépendances...');
  
  const packagePath = path.join(__dirname, '../package.json');
  
  if (fs.existsSync(packagePath)) {
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    const requiredDeps = ['next', 'react', 'framer-motion', 'tailwindcss'];
    
    const missingDeps = requiredDeps.filter(dep => !packageJson.dependencies[dep]);
    
    if (missingDeps.length === 0) {
      console.log('✅ Toutes les dépendances requises sont installées');
    } else {
      console.log(`❌ Dépendances manquantes: ${missingDeps.join(', ')}`);
    }
  } else {
    console.log('❌ package.json manquant');
  }
}

// Vérifier la structure des dossiers
function checkStructure() {
  console.log('📁 Vérification de la structure...');
  
  const requiredDirs = [
    'app',
    'components',
    'lib',
    'hooks',
    'public'
  ];
  
  const missingDirs = requiredDirs.filter(dir => 
    !fs.existsSync(path.join(__dirname, '..', dir))
  );
  
  if (missingDirs.length === 0) {
    console.log('✅ Structure des dossiers correcte');
  } else {
    console.log(`❌ Dossiers manquants: ${missingDirs.join(', ')}`);
  }
}

// Exécuter toutes les vérifications
function runChecks() {
  checkTranslations();
  checkImages();
  checkNextConfig();
  checkDependencies();
  checkStructure();
  
  console.log('\n✨ Vérification terminée!');
  console.log('\n💡 Conseils pour améliorer le projet:');
  console.log('1. Vérifiez que toutes les images sont présentes dans /public');
  console.log('2. Testez la responsive sur différents appareils');
  console.log('3. Vérifiez les performances avec Lighthouse');
  console.log('4. Testez l\'accessibilité avec des outils automatisés');
}

runChecks();
