import React, { useEffect, useState } from "react";
import {  Text, View, StyleSheet, FlatList} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useContext } from "react";
import NotiContext from "../../Context/notifications/NotiContext";
import styles from "../../styles/style.recipe";
import Item from "../../components/Card/Item";
import axios from "axios";
import { URL } from "../../Context/type";

const MyRecipes = () => {
  const {handleMyRecipes, my_recipes, token} = useContext(NotiContext);
  const [openModalEdit, setOpenModalEdit] = useState(false);

  useEffect(()=>{handleMyRecipes()},[])

  useEffect(()=>{},[my_recipes])

  const handleDeleteRecipe = async (index) => {
    console.log(index)
  await axios
    .delete(`${URL}api/recetas/${index}/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(async() => {
      await handleMyRecipes()
    })
    .catch((error) => {
      console.log(error);
    });
};

const handleEditRecipe = (item) =>{
  console.log('Item', item)
  setOpenModalEdit(true)
}
  return (
    <View style={{flex:1}}>
    
    {!(my_recipes === []) ?
      <View style={styles.container}>
        <Text style={{fontSize:20, marginBottom:10}}>Mis Recetas</Text>
        <FlatList 
          data={my_recipes}
          renderItem={({item}) =>{
            
            return <Item data={item} handleDeleteRecipe={handleDeleteRecipe} handleEditRecipe={handleEditRecipe}/>
          }}
          ItemSeparatorComponent={()=>{
            return <View style={{marginBottom:5}}></View>
          }}
        />

          
      </View>
    :
      <View style={[style.general]}>
        <Feather name="calendar" size={200} color="#C7C7C7" />
        <Text style={[style.text]}>No publicaste ninguna receta</Text>
      </View>
    
    }
    
    </View>
  );
};

export default MyRecipes;

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