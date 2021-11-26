/* 
This code works to load the website as a localhost server, simulating a real hosted website (I needed it for fetching files)
Also launches the link it in the default browser using child_process
Make sure to run `npm install express` before running this
*/

const { exec } = require('child_process');
const express = require('express');
const app = express();
const port = 3000;

// Load up all the files in this directory
app.use(express.static(__dirname));
// Upload the website to the desired port
app.listen(port, () => console.log('Loaded website in port ' + port));

// Launches the website in the default browser, through the OS specific command
let start;
switch (process.platform) {
    case 'darwin': { start = 'open'; break; }
    case 'win32': { start = 'start'; break; }
    default: { start = 'xdg-open'; break; }
}

exec(start + ' ' + `http://localhost:${port}`);