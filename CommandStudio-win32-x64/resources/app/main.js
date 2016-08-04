const electron = require('electron')
const app = electron.app
const BrowserWindow = require('electron').BrowserWindow;
let mainWindow
app.on('ready', function() {
    var Screen = require('screen');
    var size = Screen.getPrimaryDisplay().size;
    var width = size.width;
    var height = size.height;
    mainWindow = new BrowserWindow({
      'width': width,
      'height': height,
      'max-width': width,
      'max-height': height,
      'fullscreenable': true,
      "title": "CommandStudio",
      'frame': true,
      'kiosk': false,
      'transparent': false,
      'show': true,
      'resizable': true
    });
    var webContents = mainWindow.webContents;
     mainWindow.loadURL('file://' + __dirname + '/wrapper.html')
});
app.on('will-quit', function() {
});
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
