import React, { useState } from 'react'
import { Text, SafeAreaView, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import store from './store'
import { Welcome } from './welcome/Welcome'
import { Main } from './main/Main'
import { ROUTE_WELCOME, ROUTE_MAIN } from './navigation/constants'

//This disables any of the Text from scaling according to the OS settings for text.
//This is not a good idea long term and should be addressed!
Text.defaultProps = {
  ...(Text.defaultProps || {}),
  allowFontScaling: false
}

const MakeshiftRouter = ({ route, setRoute }) => {
  switch (route) {
    case ROUTE_WELCOME:
      return <Welcome setRoute={setRoute} />
    case ROUTE_MAIN:
      return <Main setRoute={setRoute} />
    default:
      return <Welcome setRoute={setRoute} />
  }
}

export default () => {
  const [route, setRoute] = useState(ROUTE_WELCOME)

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <MakeshiftRouter route={route} setRoute={setRoute} />
      </SafeAreaView>
    </Provider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
