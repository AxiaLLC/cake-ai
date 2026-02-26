#!/usr/bin/env node

import { existsSync, mkdirSync, cpSync, writeFileSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const packageRoot = join(__dirname, '..');
const targetDir = process.cwd();

const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';
const DIM = '\x1b[2m';
const PINK = '\x1b[38;5;205m';
const YELLOW = '\x1b[38;5;220m';
const GREEN = '\x1b[38;5;114m';
const CYAN = '\x1b[38;5;117m';

function log(msg) { console.log(msg); }
function heading(msg) { log(`\n${BOLD}${PINK}${msg}${RESET}`); }
function step(msg) { log(`  ${GREEN}✓${RESET} ${msg}`); }
function info(msg) { log(`  ${DIM}${msg}${RESET}`); }

heading('🎂 Cake — AI Learning Framework');
log(`${DIM}  Setting up your workspace...${RESET}\n`);

const dirs = ['skills', 'projects', 'prompts', 'profile', '_archive', 'rules'];

for (const dir of dirs) {
  const dirPath = join(targetDir, dir);
  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
    writeFileSync(join(dirPath, '.gitkeep'), '');
    step(`Created ${CYAN}${dir}/${RESET}`);
  } else {
    info(`${dir}/ already exists — skipping`);
  }
}

const filesToCopy = [
  { src: 'rules/archive-dont-delete.md', dest: 'rules/archive-dont-delete.md' },
  { src: 'rules/hostile-input-scanner.md', dest: 'rules/hostile-input-scanner.md' },
  { src: 'templates/my-journey.md', dest: 'profile/my-journey.md' },
  { src: 'templates/clinerules', dest: '.clinerules' },
];

for (const file of filesToCopy) {
  const destPath = join(targetDir, file.dest);
  if (!existsSync(destPath)) {
    const srcPath = join(packageRoot, file.src);
    if (existsSync(srcPath)) {
      cpSync(srcPath, destPath);
      step(`Copied ${CYAN}${file.dest}${RESET}`);
    }
  } else {
    info(`${file.dest} already exists — skipping`);
  }
}

const docsDir = join(targetDir, '.cake');
if (!existsSync(docsDir)) {
  mkdirSync(docsDir, { recursive: true });
  cpSync(join(packageRoot, 'docs'), join(docsDir, 'docs'), { recursive: true });
  cpSync(join(packageRoot, 'skills'), join(docsDir, 'skills'), { recursive: true });
  cpSync(join(packageRoot, 'templates'), join(docsDir, 'templates'), { recursive: true });
  cpSync(join(packageRoot, 'src'), join(docsDir, 'src'), { recursive: true });

  step(`Installed Cake reference docs to ${CYAN}.cake/${RESET}`);
} else {
  info('.cake/ already exists — skipping reference docs');
}

heading('✨ Workspace ready!\n');
log(`  ${BOLD}What just happened:${RESET}`);
log(`  Your workspace now has folders for projects, skills, and your`);
log(`  personal journey log. Two safety rules are active: never delete`);
log(`  files (archive instead) and scan external content for hidden instructions.\n`);
log(`  ${BOLD}What to do next:${RESET}`);
log(`  In the Cline chat panel, type ${YELLOW}"hi"${RESET} and press Enter.`);
log(`  Cake will introduce itself and take it from there.\n`);
log(`${DIM}  Built with imperfect metaphors and a lot of heart.${RESET}\n`);
