import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

// Read HTML template
let html = fs.readFileSync('index.template.html', 'utf8');

// Replace placeholder with env variable
html = html.replace('%EMAILJS_PUBLIC_KEY%', process.env.EMAILJS_PUBLIC_KEY);

// Write final HTML
fs.writeFileSync('index.html', html);