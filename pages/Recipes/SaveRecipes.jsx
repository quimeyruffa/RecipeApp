import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
const SaveRecipes = () => {
  return (
    <View style={[styles.general]}>
      <FontAwesome name="bookmark" size={200} color="#C7C7C7" />
      <Text style={[styles.text]}>No guardaste ninguna receta</Text>
    </View>
  );
};

export default SaveRecipes;

const styles = StyleSheet.create({
  general: {
    display: "flex",
    alignItems: "center",
    top: 150,
    flex: 1,
  },
  text: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: "bold",
    color: "gray",
  },
});
