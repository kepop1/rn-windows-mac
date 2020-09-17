import React from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform
} from 'react-native'
import { Core, Font } from '../lib'

export const MissingBeerImage = () => (
  <View style={styles.missingBeerContainer}>
    <Text style={styles.missingBeerText}>404 {'\n'}Missing Image</Text>
  </View>
)

export const BeerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <>
        {item.image_url ? (
          <Image
            source={{ uri: item.image_url }}
            style={styles.image}
            resizeMode="contain"
          />
        ) : (
          <MissingBeerImage />
        )}

        <View style={styles.beerInfoContainer}>
          <Text style={styles.beerInfoHeader}>
            {item.id}. {item.name} - {item.first_brewed}
          </Text>
          <Text style={styles.beerInfoTagline}>{item.tagline}</Text>
          <Text style={styles.beerInfoText}>ABV: {item.abv}%</Text>
        </View>
      </>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  missingBeerContainer: {
    height: 200,
    width: 200,
    padding: Core.unit,
    justifyContent: 'center',
    alignItems: 'center'
  },
  missingBeerText: {},
  container: {
    flex: 0.5,
    backgroundColor: '#38393b',
    padding: Core.unit,
    margin: Core.unit,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:
      Platform.OS === 'ios' || Platform.OS === 'android' ? null : 'row',
    borderRadius: 3
  },
  image: { height: 200, width: 200 },
  beerInfoContainer: { flex: 1 },
  beerInfoHeader: {
    ...Font.family.openSansBold,
    marginBottom: Core.unit / 3,
    color: 'white',
    fontSize: 26,
    textAlign: 'center'
  },
  beerInfoTagline: {
    ...Font.family.openSansItalic,
    marginBottom: Core.unit / 3,
    color: 'white',
    fontSize: 22,
    textAlign: 'center'
  },
  beerInfoText: {
    ...Font.family.openSansRegular,
    marginBottom: Core.unit / 3,
    color: 'white',
    fontSize: 18,
    textAlign: 'center'
  }
})
