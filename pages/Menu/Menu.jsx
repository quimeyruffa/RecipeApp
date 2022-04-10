import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import homePage from "../../styles/style.menu";
import ScrollMenu from "../../components/ScrollMenu/ScrollMenu";

const HomePage = (props) => {
  const [search, setSearch] = useState("Search");
  const [change, setChange] = useState(1);
  return (
    <View style={homePage.container}>
      <Entypo
        name="menu"
        size={40}
        color="black"
        style={{ paddingTop: 5, paddingLeft: 15 }}
      />
      <View>
        <View style={homePage.inputContainer}>
          <FontAwesome name="search" size={24} color="black" />
          <TextInput
            style={homePage.input}
            onChangeText={setSearch}
            value={search}
          />
        </View>
      </View>

      <View style={homePage.buttonContainer}>
        <Pressable style={homePage.button}>
          <Text style={{ color: "#FA4A0C" }}> Ingredientes </Text>
        </Pressable>
        <Pressable style={homePage.button}>
          <Text style={{ color: "#FA4A0C" }}> No Ingredientes </Text>
        </Pressable>
      </View>
      <ScrollMenu status="list" state={1} />
      <ScrollMenu status="list" state={2} />
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          display: "flex",
          alignItems: "flex-end",
          padding: 15,
          marginTop: 5,
        }}
      >
        <Pressable onPress={() => props.navigation.navigate("MoreRecipes")}>
          <Text style={{ color: "#FA4A0C", fontSize: 18, fontWeight: "bold" }}>
            Ver mas
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomePage;


