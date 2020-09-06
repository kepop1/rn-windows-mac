import React, { useState } from 'react'
import { Text, SafeAreaView, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import store from './store'
import { Welcome } from './welcome/Welcome'
import { ROUTE_WELCOME, ROUTE_BEER_DETAILS } from './navigation/constants'
import { BeerDetails } from './BeerDetails/BeerDetails'

//This disables any of the Text from scaling according to the OS settings for text.
//This is not a good idea long term and should be addressed!
Text.defaultProps = {
  ...(Text.defaultProps || {}),
  allowFontScaling: false
}

const MakeshiftRouter = ({ route, setRoute }) => {
  const [params, setParams] = useState(null)

  const navigate = (selectedRoute, routeParams) => {
    setRoute(selectedRoute)
    setParams(routeParams)
  }

  switch (route) {
    case ROUTE_WELCOME:
      return <Welcome navigate={navigate} params={params} />
    case ROUTE_BEER_DETAILS:
      return <BeerDetails navigate={navigate} params={params} />
    default:
      return <Welcome navigate={navigate} params={params} />
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
