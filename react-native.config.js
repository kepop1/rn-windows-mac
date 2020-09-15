const fs = require('fs')
const path = require('path')

module.exports = {
  project: {
    ios: {},
    android: {}
  },
  assets: ['./assets/fonts/']
}

const macSwitch = '--use-react-native-macos'
const windowsSwitch = '--use-react-native-windows'

if (process.argv.includes(macSwitch)) {
  process.argv = process.argv.filter(arg => arg !== macSwitch)
  process.argv.push('--config=metro.config.macos.js')
  module.exports = {
    reactNativePath: 'node_modules/react-native-macos'
  }
}

if (process.argv.includes(windowsSwitch)) {
  process.argv = process.argv.filter(arg => arg !== macSwitch)
  module.exports = {
    reactNativePath: fs.realpathSync(
      path.resolve(require.resolve('react-native-windows/package.json'), '..')
    )
  }
}
