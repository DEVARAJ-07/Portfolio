import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logFile = path.resolve(__dirname, '../.github/activity.log');

// 30 realistic push messages for the 02:30 PM slot (pure messages, no prefixes)
const AFTERNOON_MESSAGES = [
  'refined frontend and backend code logic',
  'updated projects showcase and portfolio details',
  'optimized frontend bundle and asset caching',
  'refined responsive ui and layout scaling',
  'edited info and updated project documentation',
  'refined backend API error handling and responses',
  'streamlined UI state management and interactions',
  'enhanced glassmorphic window borders and shadows',
  'reduced unnecessary re-renders in card carousel',
  'updated tech stack proficiencies and icons',
  'polished dynamic island and spring animations',
  'cleaned up unused variables and modularized imports',
  'updated professional bio and technical summary',
  'refined color contrast and typography hierarchy',
  'smoothed out wheel scroll thresholds and route transitions',
  'added architecture highlights and tags to projects',
  'optimized WebP asset compression and fetch priority',
  'fine-tuned ambient lighting and particle physics',
  'improved contact form feedback and submission toast',
  'decoupled shared styles and motion variants',
  'improved aria accessibility attributes and focus indicators',
  'updated repository documentation and setup guide',
  'organized project directory and helper utilities',
  'improved framerate stability across devices',
  'updated tech stack badges and brand colors',
  'updated coursework and certifications data',
  'optimized resize and viewport event listeners',
  'fixed padding quirks on ultra-wide screens',
  'refined spring stiffness and damping curves',
  'integrated performance updates and refined code'
];

// Parse command line arguments (--slot=morning, --slot=afternoon, --slot=evening)
const args = process.argv.slice(2);
let slotArg = null;
for (const arg of args) {
  if (arg.startsWith('--slot=')) {
    slotArg = arg.split('=')[1].toLowerCase();
  }
}

// Current date and time in IST (Indian Standard Time, UTC+5:30)
const now = new Date();
const istDate = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
const istHour = istDate.getHours();

let commitMessage = '';

if (slotArg === 'morning') {
  commitMessage = 'verification and daily check';
} else if (slotArg === 'evening') {
  commitMessage = 'verification and daily check';
} else if (slotArg === 'afternoon') {
  const dayOfYear = Math.floor((istDate - new Date(istDate.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  const selectedIndex = (dayOfYear + istDate.getDate()) % AFTERNOON_MESSAGES.length;
  commitMessage = AFTERNOON_MESSAGES[selectedIndex];
} else {
  // Auto-detect based on current IST hour
  if (istHour < 12) {
    commitMessage = 'verification and daily check';
  } else if (istHour >= 16) {
    commitMessage = 'verification and daily check';
  } else {
    const dayOfYear = Math.floor((istDate - new Date(istDate.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const selectedIndex = (dayOfYear + istDate.getDate()) % AFTERNOON_MESSAGES.length;
    commitMessage = AFTERNOON_MESSAGES[selectedIndex];
  }
}

// Ensure .github folder exists
const githubDir = path.dirname(logFile);
if (!fs.existsSync(githubDir)) {
  fs.mkdirSync(githubDir, { recursive: true });
}

// Formatted IST timestamp
const formattedTime = istDate.toLocaleString('en-IN', {
  timeZone: 'Asia/Kolkata',
  dateStyle: 'medium',
  timeStyle: 'medium'
});
const logEntry = `[${formattedTime}] [Slot: ${slotArg || 'auto'}] ${commitMessage}\n`;
fs.appendFileSync(logFile, logEntry, 'utf8');

// Retain last 200 lines to keep file small
try {
  const content = fs.readFileSync(logFile, 'utf8');
  const lines = content.trim().split('\n');
  if (lines.length > 200) {
    fs.writeFileSync(logFile, lines.slice(-200).join('\n') + '\n', 'utf8');
  }
} catch (e) {}

// Output pure commit message
console.log(commitMessage);
