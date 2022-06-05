import React, { useEffect } from 'react'
import {
    SafeAreaView,
    ScrollView
  } from "react-native";
import CardItem from './CardItem';

const Card = (props) => {
  const {recipes} = props;

  useEffect(() =>{},[recipes])
    
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {recipes && 
         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
           {recipes.map(item => {
             return <CardItem key={item.id} item={item} />
           })}
         </ScrollView>
      }
        </SafeAreaView>
  )
}

export default Card;
