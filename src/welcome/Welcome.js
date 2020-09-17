import axios from 'axios'
import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  ActivityIndicator,
  Platform
} from 'react-native'

import { Button, Core, Font } from '../lib'
import { BeerItem } from './BeerItem'
import { ROUTE_BEER_DETAILS } from '../navigation/constants'

export const Welcome = ({ navigate }) => {
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

  const pages = [1, 2, 3, 4, 5]

  const renderItem = ({ item }) => (
    <BeerItem
      item={item}
      onPress={() => navigate(ROUTE_BEER_DETAILS, { beer: item })}
    />
  )

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.header}>A Brewdog Beer List App</Text>
      <Text style={styles.text}>
        {"Drink responsibly. Don't drink and code!"}
      </Text>

      <View style={styles.pageButtonContainer}>
        {pages.map(pageNumber => (
          <Button
            key={pageNumber}
            onPress={() => setPage(pageNumber)}
            label={pageNumber}
          />
        ))}
      </View>

      {data.length !== 0 ? (
        <FlatList
          data={data}
          numColumns={
            Platform.OS === 'ios' || Platform.OS === 'android' ? 1 : 2
          }
          renderItem={renderItem}
          keyExtractor={item => item.id}
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
    //Safe Area View pushes iOS up from the bottom so it's not as jarring
    paddingVertical:
      Platform.OS === 'ios' || Platform.OS === 'android'
        ? Core.unit / 2
        : Core.unit * 2
  },
  header: {
    ...Font.sizes.heading,
    ...Font.family.openSansBold,
    textAlign: 'center',
    letterSpacing: 1,
    marginBottom: Core.unit,
    color: 'white'
  },
  text: {
    ...Font.family.openSansRegular,
    marginBottom: Core.unit / 3,
    color: 'white',
    fontSize: 18,
    textAlign: 'center'
  },
  pageButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  }
})
