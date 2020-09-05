import axios from 'axios'
import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  ActivityIndicator,
  Image
} from 'react-native'

// import { ROUTE_MAIN } from '../navigation/constants'
import { Button, Core, Font } from '../lib'

export const Welcome = ({ setRoute }) => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `https://api.punkapi.com/v2/beers?page=${page}&per_page=80`
        )
        // console.warn(data)
        setData(data)
      } catch (err) {
        console.warn(err.message)
      }
    }

    getData()
  }, [page])

  const renderItem = ({ item }) => (
    <View
      style={{
        flex: 0.5,
        flexDirection: 'row',
        backgroundColor: '#38393b',
        padding: Core.unit,
        margin: Core.unit,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {item.image_url ? (
        <Image
          source={{ uri: item.image_url }}
          style={{ height: 200, width: 200 }}
          resizeMode="contain"
        />
      ) : (
        <View
          style={{
            height: 200,
            width: 200,
            padding: Core.unit,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              ...Font.family.openSansBold,
              marginBottom: Core.unit / 3,
              color: 'white',
              textAlign: 'center',
              fontSize: 22
            }}
          >
            404 {'\n'}Missing Image
          </Text>
        </View>
      )}
      <View style={{ flex: 1 }}>
        <Text
          style={{
            ...Font.family.openSansBold,
            marginBottom: Core.unit / 3,
            color: 'white',
            fontSize: 26
          }}
        >
          {item.id}. {item.name} - {item.first_brewed}
        </Text>
        <Text
          style={{
            ...Font.family.openSansItalic,
            marginBottom: Core.unit / 3,
            color: 'white',
            fontSize: 22
          }}
        >
          {item.tagline}
        </Text>
        <Text
          style={{
            ...Font.family.openSansRegular,
            marginBottom: Core.unit / 3,
            color: 'white',
            fontSize: 18
          }}
        >
          ABV: {item.abv} - IBU: {item.ibu}
        </Text>
        <Text
          style={{
            ...Font.family.openSansRegular,
            marginBottom: Core.unit / 3,
            color: 'white',
            fontSize: 18
          }}
        >
          Food pairing: {item.food_pairing.map(food => `${food}, `)}
        </Text>
      </View>
    </View>
  )

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.header}>BrewDog Punk API</Text>
      <Text style={styles.header}>
        A showcase of React Native for Windows and Mac through BrewDogs beer
        catalogue
      </Text>

      <View style={styles.pageButtonContainer}>
        <Button
          onPress={() => setPage(1)}
          label="1"
          styleOverride={{ backgroundColor: 'aqua' }}
        />
        <Button
          onPress={() => setPage(2)}
          label="2"
          styleOverride={{ backgroundColor: 'aqua' }}
        />
        <Button
          onPress={() => setPage(3)}
          label="3"
          styleOverride={{ backgroundColor: 'aqua' }}
        />
        <Button
          onPress={() => setPage(4)}
          label="4"
          styleOverride={{ backgroundColor: 'aqua' }}
        />
        <Button
          onPress={() => setPage(5)}
          label="5"
          styleOverride={{ backgroundColor: 'aqua' }}
        />
      </View>

      {data.length !== 0 ? (
        <FlatList
          data={data}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          // contentContainerStyle={{ flex: 1, backgroundColor: 'black' }}
        />
      ) : (
        <ActivityIndicator size="large" />
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'black',
    paddingVertical: Core.unit
  },
  header: {
    ...Font.sizes.heading,
    ...Font.family.openSansBold,
    textAlign: 'center',
    letterSpacing: 1,
    marginBottom: Core.unit * 2,
    color: 'white'
  },
  pageButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  }
})
