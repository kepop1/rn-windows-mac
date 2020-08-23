import React from 'react'
import { View, Text, StatusBar, SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'
import store from './store'

//This disables any of the Text from scaling according to the OS settings for text.
//This is not a good idea long term and should be addressed!
Text.defaultProps = {
  ...(Text.defaultProps || {}),
  allowFontScaling: false
}

export default () => (
  <Provider store={store}>
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <View style={{ backgroundColor: 'white', height: '100%' }}>
        <Text>Testing...</Text>
      </View>
    </SafeAreaView>
  </Provider>
)
