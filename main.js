const { app, BrowserWindow, ipcMain } = require('electron');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

let games = JSON.parse(fs.readFileSync(path.join(__dirname, 'games.json')));

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    fullscreen: false, // change to true if you want arcade mode
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true
    }
  });

  win.loadFile('index.html');
}

ipcMain.handle('launch-game', async (_event, gameKey) => {
  const game = games[gameKey];
  if (game && game.exec) {
    exec(`"${game.exec}"`);
  }
});

app.whenReady().then(createWindow);