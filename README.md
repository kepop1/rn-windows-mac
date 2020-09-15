See [FORKED_README]('./FORKED_README.md') for information about the project's setup and structure.

Mac:
`npx react-native init <projectName> --version 0.61.5`

`npx react-native-macos-init`

`npx react-native run-macos`

Windows:
`npx react-native-windows-init --overwrite`

`npx react-native run-windows`

- Got to be careful with this one as it will overwrite the metro config if you're not careful - always have it

FluentUI

`npm i @fluentui/react-native`

Fluent UI Components Available: `https://developer.microsoft.com/en-us/fluentui#/controls/crossplatform`

> Ended up not going with fluent-ui in the end due to time, but this would be a cross platform component library that works with windows and mac as well!

React-Navigation does not work with React-Native-Windows/Mac. That's a real kicker. Will try React-Router-DOM

Backing out the changes for React Navigation caused a mess, if the react-native-macos cli bombs out it'll leave everything half setup - multiple git backouts during removal of react-navigation.

Thankfully we should be good to go.

I wonder what happens with fonts and assets?

iOS Keybindings don't really work, you right click in the emulator and select reload. that was strange.

console.warn(Dimensions.get('window').height)
console.warn(Dimensions.get('window').width)

Returns my actual screen height and width - This was with 'SafeAreaView' ... interesting View returns the height of the box

Nevermind - it's just weird between re-renders

> I guess this means you have to think about styling much more like you do with the web (could be any size screen so always have adaptable styles, no shortcuts)

We'll use the brewdog PunkAPI, which is serving all the information from a punk ipa book

https://api.punkapi.com/v2/beers?page=5&per_page=80

That's 325 beers.

It's much less red screeny that iOS and Android - the 'helper' window seems to avoid that dissapointing "Oh yeah it failed and broke a lot"

Gotta treat the styles much like you do on a website and figure out how to handle them dynamically

`yarn packager` doesn't run the same on Windows as Windows doesn't have watchman so that needs to be accounted for. Run `yarn start` - this doesn't do any of the cache clearing and watchman resetting on the packager.

You're going to need to enable `developer mode` on in the Windows settings

You also need to ensure you have the following: Universal Windows Platform Development, Desktop Development with C++ - this step is time consuming and definitely the biggest pain so far.

Ok even installing Visual Studio 2019 and adding UWP in etc doesn't necessarily work

> × Failed to restore the NuGet packages: Error: MSBuild tools not found. Make sure all required components
> have been installed (e.g. v141 support)
> You gotta tweak it to: Gotta install C++ v(141) in the sidebar when you select the UWP packages inside of the Visual Studio Installer.

> × Failed to deploy: Fail to check the installed app, maybe developer mode is off on Windows
> When you get this it means that you didn't run VSCode as an administrator so you need to re open VSCode or Bash or Terminal or whichever as an administrator. Even if you're on an admin account.

Ctrl Shift D to bring up the developer menu

Windows is definitely more unstable, had it crash because I missed a comma in the styling

God knows what a react-native upgrade looks like when you're managing the 2 different platforms for windows and mac.

Modified the react-native.config.js which is what Window's uses, this is different to Mac which will just work from the normal packager? Either way `yarn packager:windows`

Mac uses the metro.config.macos.js file, however react-native-windows is going to modify the standard metro.config.js file, rather than create a separate one which is ... interesting, how are both platforms so distinct?

Fonts linked in the assets/ section in the react-native.config.js are straight up ignored, so chances are they need to be linked at a Visual Studio solution level that controls the actual APP emulator/simulator.

All things considered though it runs pretty quick!
