#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);
const targetDir = args[0] || '.';

const templateDir = path.join(__dirname, 'template');

// Ensure target directory exists
fs.ensureDirSync(targetDir);

// Copy template files
fs.copySync(templateDir, targetDir, {
  filter: (src, dest) => {
    const basename = path.basename(src);
    if (basename === '.gitignore') {
      // Only copy .gitignore if it doesn't exist in target
      return !fs.existsSync(path.join(targetDir, '.gitignore'));
    }
    // Skip node_modules if any, but since template doesn't have it
    return true;
  }
});

// Change to target directory and install dependencies
process.chdir(targetDir);
console.log('Installing dependencies...');
execSync('npm install', { stdio: 'inherit' });

console.log('Express server template created successfully!');