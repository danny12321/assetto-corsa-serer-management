const { app, BrowserWindow, shell, ipcMain, Menu, TouchBar } = require('electron');

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

const electron = require('electron');
const dialog = electron.dialog

var spawn = require('child_process').spawn;



const Store = require('electron-store');
const store = new Store();

let ac_server = null;

createWindow = () => {
	mainWindow = new BrowserWindow({
		backgroundColor: '#F7F7F7',
		minWidth: 880,
		show: false,
		titleBarStyle: 'hidden',
		webPreferences: {
			nodeIntegration: true,
			// preload: __dirname + '/preload.js',
		},
		height: 860,
		width: 1280,
	});

	// Custom settings
	mainWindow.settings = {};


	mainWindow.loadURL(
		isDev
			? 'http://localhost:3000'
			: `file://${path.join(__dirname, '../build/index.html')}`,
	);

	if (isDev) {
		const {
			default: installExtension,
			REACT_DEVELOPER_TOOLS,
			REDUX_DEVTOOLS,
		} = require('electron-devtools-installer');

		installExtension(REACT_DEVELOPER_TOOLS)
			.then(name => {
				console.log(`Added Extension: ${name}`);
			})
			.catch(err => {
				console.log('An error occurred: ', err);
			});

		installExtension(REDUX_DEVTOOLS)
			.then(name => {
				console.log(`Added Extension: ${name}`);
			})
			.catch(err => {
				console.log('An error occurred: ', err);
			});
	}

	mainWindow.once('ready-to-show', () => {
		mainWindow.show();

		ipcMain.on('open-external-window', (event, arg) => {
			shell.openExternal(arg);
		});
	});
};

generateMenu = () => {
	// const template = [
	// 	{
	// 		label: 'File',
	// 		submenu: [{ role: 'about' }, { role: 'quit' }],
	// 	},
	// 	{
	// 		label: 'Edit',
	// 		submenu: [
	// 			{ role: 'undoee' },
	// 			{ role: 'redo' },
	// 			{ type: 'separator' },
	// 			{ role: 'cut' },
	// 			{ role: 'copy' },
	// 			{ role: 'paste' },
	// 			{ role: 'pasteandmatchstyle' },
	// 			{ role: 'delete' },
	// 			{ role: 'selectall' },
	// 		],
	// 	},
	// 	{
	// 		label: 'View',
	// 		submenu: [
	// 			{ role: 'reload' },
	// 			{ role: 'forcereload' },
	// 			{ role: 'toggledevtools' },
	// 			{ type: 'separator' },
	// 			{ role: 'resetzoom' },
	// 			{ role: 'zoomin' },
	// 			{ role: 'zoomout' },
	// 			{ type: 'separator' },
	// 			{ role: 'togglefullscreen' },
	// 		],
	// 	},
	// 	{
	// 		role: 'window',
	// 		submenu: [{ role: 'minimize' }, { role: 'close' }],
	// 	},
	// 	{
	// 		role: 'help',
	// 		submenu: [
	// 			{
	// 				click() {
	// 					require('electron').shell.openExternal(
	// 						'https://getstream.io/winds',
	// 					);
	// 				},
	// 				label: 'Learn More',
	// 			},
	// 			{
	// 				click() {
	// 					require('electron').shell.openExternal(
	// 						'https://github.com/GetStream/Winds/issues',
	// 					);
	// 				},
	// 				label: 'File Issue on GitHub',
	// 			},
	// 		],
	// 	},
	// ];

	// Menu.setApplicationMenu(Menu.buildFromTemplate(template));
};

app.on('ready', () => {
	createWindow();

	if (!isDev) {
		Menu.setApplicationMenu(null);
	}
	// generateMenu();
});

app.on('window-all-closed', () => {
	app.quit();
});

app.on('activate', () => {
	if (mainWindow === null) {
		createWindow();
	}
});

ipcMain.on('load-page', (event, arg) => {
	mainWindow.loadURL(arg);
});

exports.selectDirectory = function (data) {
	// dialog.showOpenDialog as before

	return dialog.showOpenDialog(mainWindow, {
		...data,
		properties: ['openDirectory']
	})[0]
}

exports.startServer = () => {
	console.log('start dat ding ')
	// mainWindow.webContents.send('ping', 'whoooooooh!')
	
	ac_server = spawn(`cd ${store.get('ac_path')}/server/ && acServer.exe`, {
		shell: true
	});

	ac_server.stderr.on('data', function (data) {
		console.error("STDERR:", data.toString());
		mainWindow.webContents.send('serverUpdate', {type: 'STDERR', data: data.toString()})
	});

	ac_server.stdout.on('data', function (data) {
		console.log("STDOUT:", data.toString());
		mainWindow.webContents.send('serverUpdate', {type: 'STDOUT', data: data.toString()})
	});

	ac_server.on('exit', function (exitCode) {
		console.log("Child exited with code: " + exitCode);
		mainWindow.webContents.send('serverUpdate', {type: 'exit', data: exitCode})
	});
}

exports.stopServer = () => {
	console.log(ac_server)
	ac_server.kill('SIGHUP');
}