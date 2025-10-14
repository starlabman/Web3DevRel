#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🖼️ Optimisation des images...\n');

const publicDir = path.join(__dirname, '../public');

function optimizeImages() {
  if (!fs.existsSync(publicDir)) {
    console.log('❌ Dossier public non trouvé');
    return;
  }

  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
  const images = [];

  // Récupérer toutes les images
  function findImages(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        findImages(filePath);
      } else if (imageExtensions.some(ext => file.toLowerCase().endsWith(ext))) {
        images.push(filePath);
      }
    });
  }

  findImages(publicDir);

  if (images.length === 0) {
    console.log('ℹ️ Aucune image trouvée à optimiser');
    return;
  }

  console.log(`📁 ${images.length} images trouvées`);

  // Vérifier si sharp est installé
  try {
    require('sharp');
  } catch (error) {
    console.log('⚠️ Sharp non installé. Installation...');
    try {
      execSync('npm install sharp', { stdio: 'inherit' });
    } catch (installError) {
      console.log('❌ Impossible d\'installer sharp');
      return;
    }
  }

  const sharp = require('sharp');

  images.forEach((imagePath, index) => {
    try {
      const ext = path.extname(imagePath).toLowerCase();
      const name = path.basename(imagePath, ext);
      const dir = path.dirname(imagePath);
      
      // Créer des versions optimisées
      const sizes = [
        { width: 192, height: 192, suffix: '-192' },
        { width: 512, height: 512, suffix: '-512' },
        { width: 1024, height: 1024, suffix: '-1024' }
      ];

      sizes.forEach(size => {
        const outputPath = path.join(dir, `${name}${size.suffix}.webp`);
        
        if (!fs.existsSync(outputPath)) {
          sharp(imagePath)
            .resize(size.width, size.height, { fit: 'cover' })
            .webp({ quality: 80 })
            .toFile(outputPath)
            .then(() => {
              console.log(`✅ ${path.basename(outputPath)} créé`);
            })
            .catch(err => {
              console.log(`❌ Erreur lors de la création de ${outputPath}:`, err.message);
            });
        }
      });

      console.log(`📊 Progression: ${Math.round(((index + 1) / images.length) * 100)}%`);
    } catch (error) {
      console.log(`❌ Erreur avec ${imagePath}:`, error.message);
    }
  });

  console.log('\n✨ Optimisation terminée!');
  console.log('\n💡 Conseils:');
  console.log('- Utilisez les images WebP pour de meilleures performances');
  console.log('- Ajoutez des attributs loading="lazy" pour les images');
  console.log('- Utilisez des tailles appropriées pour chaque contexte');
}

optimizeImages();
