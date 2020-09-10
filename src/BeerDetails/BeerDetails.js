import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import { Core, Font, TextButton } from '../lib'
import { ROUTE_WELCOME } from '../navigation/constants'
import { MissingBeerImage } from '../welcome/BeerItem'

export const BeerDetails = ({ navigate, params }) => {
  const beerDetails = params.beer

  return (
    <View style={styles.container}>
      <View style={styles.beerDetails}>
        {beerDetails.image_url ? (
          <Image
            source={{ uri: beerDetails.image_url }}
            style={styles.image}
            resizeMode="contain"
          />
        ) : (
          <MissingBeerImage />
        )}

        <View style={styles.beerInfo}>
          <View style={styles.beerInfoHalf}>
            <Text style={styles.beerInfoHeader}>
              {beerDetails.id} {beerDetails.name}
            </Text>
            <Text style={styles.beerInfoTagline}>{beerDetails.tagline}</Text>

            <Text style={styles.beerInfoText}>{beerDetails.description}</Text>
          </View>

          <View style={styles.verticalSeparator} />

          <View style={styles.beerInfoHalf}>
            <Text style={styles.beerInfoText}>{beerDetails.first_brewed}</Text>
            <Text style={styles.beerInfoText}>ABV {beerDetails.abv}</Text>
            <Text style={styles.beerInfoText}>IBU {beerDetails.ibu}</Text>
            <Text style={styles.beerInfoText}>
              Food pairing: {beerDetails.food_pairing.join(', ')}
            </Text>
          </View>
        </View>

        <TextButton
          onPress={() => navigate(ROUTE_WELCOME)}
          label="Back to beer list"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  beerDetails: {
    backgroundColor: 'darkgrey',
    alignItems: 'center',
    paddingVertical: Core.unit * 2,
    paddingHorizontal: Core.unit * 2,
    margin: Core.unit
  },
  beerInfo: {
    flexDirection: 'row',
    marginTop: Core.unit
  },
  beerInfoHalf: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: Core.unit,
    backgroundColor: '#38393b',
    borderRadius: 3
  },
  beerInfoHeader: {
    ...Font.family.openSansBold,
    marginBottom: Core.unit / 3,
    color: 'white',
    fontSize: 26
  },
  beerInfoTagline: {
    ...Font.family.openSansItalic,
    marginBottom: Core.unit / 3,
    color: 'white',
    fontSize: 22
  },
  beerInfoText: {
    ...Font.family.openSansRegular,
    marginBottom: Core.unit / 3,
    color: 'white',
    fontSize: 18
  },
  image: { height: 350, width: 350 },
  verticalSeparator: {
    width: StyleSheet.hairlineWidth
  }
})
