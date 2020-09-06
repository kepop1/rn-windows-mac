import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Core, Font, TextButton } from '../lib'
import { ROUTE_WELCOME } from '../navigation/constants'

export const BeerDetails = ({ navigate, params }) => {
  console.warn(params)
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <TextButton
        onPress={() => navigate(ROUTE_WELCOME)}
        label="Take me Back"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue'
  }
})
