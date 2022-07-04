import React, { useEffect, useState } from "react";
import {  Text, View, StyleSheet, FlatList} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useContext } from "react";
import NotiContext from "../../Context/notifications/NotiContext";
import styles from "../../styles/style.recipe";
import ItemFav from "../../components/Card/ItemFav";
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from "@expo/vector-icons";

const MyFavRecipes = () => {
  const {handleSetFavoritosReload, favoritos, handleDeleteFavorito, handleDetailsDownload} = useContext(NotiContext);
  const navigation = useNavigation(); 

  useEffect(()=>{handleSetFavoritosReload()},[])

  useEffect(()=>{},[favoritos])

 const handleShowDetails = async (recipe) => {
    await handleDetailsDownload(recipe)
    navigation.navigate("Favoritos")
  }

  return (
    <View style={{flex:1}}>
    
    {!(favoritos === []) ?
      <View style={styles.container}>
        <Text style={{fontSize:20, marginBottom:10}}>Mis Favoritos</Text>
        <FlatList 
          data={favoritos}
          renderItem={({item}) =>{
            
            return <ItemFav data={item} handleDeleteFavorito={handleDeleteFavorito} handleShowDetails={handleShowDetails}/>
          }}
          ItemSeparatorComponent={()=>{
            return <View style={{marginBottom:5}}></View>
          }}
        />

          

      </View>
    :
      <View style={[style.general]}>
        <Feather name="calendar" size={200} color="#C7C7C7" />
        <Text style={[style.text]}>No tienes favoritos</Text>
      </View>
    
    }
    </View>
  );
};

export default MyFavRecipes;

const style = StyleSheet.create({
  general:{
    display:'flex',
    alignItems:'center',
    top:150,
    flex:1
  },
  text:{
    fontSize:20,
    marginTop:20,
    fontWeight: "bold",
    color:"gray"
  }
})