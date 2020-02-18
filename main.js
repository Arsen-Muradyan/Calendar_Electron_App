const electron = require("electron");
const path = require("path");
const url = require("url");

const { app, BrowserWindow } = electron;
let mainWindow;
app.on("ready", () => {
  app.allowRendererProcessReuse = true;
  mainWindow = new BrowserWindow({
    icon: path.join(__dirname, "src/assets/icon.png")
  });
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "src/views/index.html"),
      protocol: "file",
      slashes: true
    })
  );
  mainWindow.setMenu(null);
});
