import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

// Read HTML template
let html = fs.readFileSync('index.template.html', 'utf8');

// Replace placeholder with env variable
html = html.replace('%API_URL%', process.env.API_URL);

// Write final HTML
fs.writeFileSync('index.html', html);
console.log('index.html generated with API_URL');
