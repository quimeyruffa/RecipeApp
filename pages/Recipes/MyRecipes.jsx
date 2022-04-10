import React from "react";
import { Text, View, StyleSheet} from "react-native";
import { Feather } from "@expo/vector-icons";

const MyRecipes = () => {
  return (
    <View style={[styles.general]}>
      <Feather name="calendar" size={200} color="#C7C7C7" />
      <Text style={[styles.text]}>No publicaste ninguna receta</Text>
    </View>
  );
};

export default MyRecipes;

const styles = StyleSheet.create({
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