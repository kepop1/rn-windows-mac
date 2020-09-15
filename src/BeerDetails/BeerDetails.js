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
            <Text style={styles.beerInfoBold}>First Brewed: </Text>
            <Text style={styles.beerInfoText}>{beerDetails.first_brewed}</Text>

            <View style={styles.spacer} />

            <Text style={styles.beerInfoText}>
              <Text style={styles.beerInfoBold}>ABV: </Text>
              {beerDetails.abv}
            </Text>
            <Text style={styles.beerInfoText}>
              <Text style={styles.beerInfoBold}>IBU: </Text> {beerDetails.ibu}
            </Text>

            <View style={styles.spacer} />

            <Text style={styles.beerInfoBold}>Food Pairings: </Text>
            <Text style={styles.beerInfoText}>
              {beerDetails.food_pairing.join(', ')}
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
    alignItems: 'center',
    padding: Core.unit * 4
  },
  beerDetails: {
    width: '100%',
    height: '100%',
    backgroundColor: 'darkgrey',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Core.unit * 2,
    paddingHorizontal: Core.unit * 2,
    borderRadius: 5
  },
  beerInfo: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: Core.unit
  },
  beerInfoHalf: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Core.unit,
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
    fontSize: 18,
    textAlign: 'center'
  },
  beerInfoBold: {
    ...Font.family.openSansBold,
    marginBottom: Core.unit / 3,
    color: 'white',
    fontSize: 22
  },
  image: { height: 350, width: 350 },
  verticalSeparator: {
    width: StyleSheet.hairlineWidth
  },
  spacer: {
    height: 2,
    width: '60%',
    backgroundColor: 'white',
    marginVertical: Core.unit
  }
})
