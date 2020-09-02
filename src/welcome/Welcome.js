import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import { ROUTE_MAIN } from '../navigation/constants'
import { Button, Core, Font } from '../lib'

export const Welcome = ({ setRoute }) => (
  <View style={styles.container}>
    <Text style={styles.header}>RN-Windows-Mac</Text>
    <Text style={styles.text}>
      React Native for Windows and Mac - strange world!
    </Text>

    <Button onPress={() => setRoute(ROUTE_MAIN)} label="Go to main page" />
  </View>
)

const styles = StyleSheet.create({
  container: {
    padding: Core.unit,
    backgroundColor: 'white'
  },
  header: {
    ...Font.sizes.heading,
    ...Font.family.openSansBold,
    textAlign: 'center',
    letterSpacing: 1,
    marginBottom: Core.unit * 2
  },
  text: {
    paddingVertical: Core.unit * 3,
    textAlign: 'center',
    ...Font.sizes.body,
    ...Font.family.openSansRegular,
    lineHeight: 22
  }
})
