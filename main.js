const {app, BrowserWindow} = require('electron');
const {ipcMain} = require('electron');

function createWindow() {
  let win = new BrowserWindow({
    width: 1000,
    height: 480,
    'minWidth': 480,
    'minHeight': 480,
    'maxHeight':400,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.webContents.openDevTools();
  win.setMenu(null);
  win.loadFile('./src/views/index.html');
}

ipcMain.on('create-new-instance',()=>{
  createWindow();
})

app.whenReady().then(createWindow);
