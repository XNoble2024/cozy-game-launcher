const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  launchGame: (gameKey) => ipcRenderer.invoke('launch-game', gameKey)
});