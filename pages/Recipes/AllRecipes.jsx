import { View, Text, FlatList } from 'react-native'
import React, { useContext, useEffect } from 'react'
import AllCardFormat from '../../components/Card/AllCardFormat';
import NotiContext from '../../Context/notifications/NotiContext';

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
  const { recipes, handleGetRecipes } = useContext(NotiContext);
  useEffect(()=>{handleGetRecipes(),[]})
  useEffect(() => {}, [recipes]);
  const _renderItem = (e) => {
    return(<AllCardFormat recipe={ e.item} />)
  }
  return (
    <View>
  
      <FlatList 
      data={recipes}
      renderItem={(e) => _renderItem(e)}
      keyExtractor={(item, index) => index.toString()}
      numColumns={numColumns}
      style={{height:'90%'}}
      />
    </View>
  )
}

export default AllRecipes