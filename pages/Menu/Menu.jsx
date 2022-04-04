import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import homePage from "../../styles/style.menu";
import ScrollMenu from "../../components/ScrollMenu/ScrollMenu";

const HomePage = () => {
  const [search, setSearch] = useState("Search");
  return (
    <View style={homePage.container}>
      <Entypo name="menu" size={40} color="black" />
      <View>
        <View style={homePage.inputContainer}>
          <FontAwesome name="search" size={24} color="black" />
          <TextInput style={homePage.input} onChangeText={setSearch} value={search} />
        </View>
      </View>
      <View style={homePage.Containerselect}>
      <Pressable style={homePage.select}>
        <Text > Ingredientes </Text>
        </Pressable>
      </View>
      <View style={homePage.buttonContainer} >
        <Pressable style={homePage.button}>
        <Text> Ingredientes </Text>
        </Pressable>
        <Pressable style={homePage.button}>
        <Text>
          No Ingredientes 
        </Text>
        </Pressable>
      </View>
      <ScrollMenu status='list'/>
      <ScrollMenu status='card'/>

    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
