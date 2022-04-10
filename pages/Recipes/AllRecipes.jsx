import { View, Text, FlatList } from 'react-native'
import React from 'react'
import CardItem from '../../components/Card/CardItem';

const SECTIONS = [
        {
          key: "1",
          text: "Ensalada",
        },
        {
          key: "2",
          text: "Carne",
        },
  
        {
          key: "3",
          text: "Salsa",
        },
        {
          key: "4",
          text: "Postre",
        },
        {
          key: "5",
          text: "Sopa",
        },
        {
          key: "6",
          text: "Bebida",
        },
  ];

const numColumns = 2;
// const width = Dimensions.get('window').width
const AllRecipes = () => {
  const _renderItem = () => {
    return(<CardItem />)
  }
  return (
    <View>
      <Text>AllRecipes</Text>
      <FlatList 
      data={SECTIONS}
      renderItem={_renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={numColumns}
      />
    </View>
  )
}

export default AllRecipes