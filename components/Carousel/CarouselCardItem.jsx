import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>

      {item.imagen ?
        <Image
          source={{ uri: item.imagen }}
          style={styles.image}
        />

        :
        <Image
          source={{ uri: 'https://res.cloudinary.com/dv8hvjcim/image/upload/v1656693881/dev_setups/test_eddylq.jpg' }}
          style={styles.image}
        />
      }
      <Text style={styles.body}>{item.texto}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default CarouselCardItem