See [FORKED_README]('./FORKED_README.md') for information about the project's setup and structure.

Mac:
`npx react-native init <projectName> --version 0.61.5`

`npx react-native-macos-init`

`npx react-native run-macos`

Windows:
`npx react-native-windows-init --overwrite`

`npx react-native run-windows`

FluentUI

`npm i @fluentui/react-native`

Fluent UI Components Available: `https://developer.microsoft.com/en-us/fluentui#/controls/crossplatform`

React-Navigation does not work with React-Native-Windows/Mac. That's a real kicker. Will try React-Router-DOM

Backing out the changes for React Navigation caused a mess, if the react-native-macos cli bombs out it'll leave everything half setup - multiple git backouts during removal of react-navigation.

Thankfully we should be good to go.

I wonder what happens with fonts and assets?

iOS Keybindings don't really work, you right click in the emulator and select reload. that was strange.

console.warn(Dimensions.get('window').height)
console.warn(Dimensions.get('window').width)

Returns my actual screen height and width - This was with 'SafeAreaView' ... interesting View returns the height of the box

> I guess this means you have to think about styling much more like you do with the web (could be any size screen so always have adaptable styles, no shortcuts)
