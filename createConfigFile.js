/*
Path: createConfigFile.js
*/

const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, 'src/config/config.json');
const exampleConfigPath = path.join(__dirname, 'src/config/config-example.json');

if (!fs.existsSync(configPath)) {
    fs.copyFileSync(exampleConfigPath, configPath);
    console.log('config.json file created from config-example.json');
} else {
    console.log('config.json already exists');
}