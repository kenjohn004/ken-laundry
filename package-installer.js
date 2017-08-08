const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
     .then(createWindowsInstaller)
     .catch((error) => {
     console.error(error.message || error)
     process.exit(1)
 })

function getInstallerConfig () {
    console.log('creating windows installer')
    const rootPath = path.join('./')
    const outPath = path.join(rootPath, 'app-builds')

    return Promise.resolve({
        appDirectory: path.join(outPath, 'win32-ia32'),
        authors: 'Son Nguyen',
        exe: 'ken-laundry.exe',
        iconUrl: 'https://raw.githubusercontent.com/electron/electron-api-demos/master/assets/app-icon/win/app.ico',
        loadingGif: path.join(rootPath, 'src', 'loading.gif'),
        noMsi: true,
        outputDirectory: path.join(outPath, 'windows-installer'),
        setupExe: 'Ken Laundry.exe',
        setupIcon: path.join(rootPath, 'src', 'app.ico'),
        skipUpdateIcon: true
   })
}