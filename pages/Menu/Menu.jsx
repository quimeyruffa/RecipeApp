import {
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import homePage from "../../styles/style.menu";
import ScrollMenu from "../../components/ScrollMenu/ScrollMenu";
import PNG from "../../assets/img/IngredientesButton.png";
import IngredientesModal from "../../components/Modal/Modal";
const HomePage = ({ navigation }) => {
  const [search, setSearch] = useState("Search");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={homePage.container}>
      <View style={homePage.buttonContainer}>
        <Entypo
          name="menu"
          size={40}
          color="black"
          style={{ paddingTop: 5, paddingLeft: 15 }}
        />
        <Pressable
          onPress={() => setModalVisible(!modalVisible)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image style={homePage.button} source={PNG} />
        </Pressable>
      </View>
      {modalVisible && <IngredientesModal  modalVisible={modalVisible} setModalVisible={setModalVisible}/>}
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
        <Pressable onPress={() => navigation.navigate("AllRecipes")}>
          <Text style={{ color: "#FA4A0C", fontSize: 18, fontWeight: "bold" }}>
            Ver mas
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
