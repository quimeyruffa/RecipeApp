import IngredientesModal from "../../components/Modal/Modal";
import { Text, View, Image, TextInput, Pressable, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import homePage from "../../styles/style.menu";
import ScrollMenu from "../../components/ScrollMenu/ScrollMenu";
import PNG from "../../assets/img/IngredientesButton.png";
import NotiContext from "../../Context/notifications/NotiContext";
import NetInfo from "@react-native-community/netinfo";

const HomePage = (props) => {
  const { navigation } = props;
  const [search, setSearch] = useState("Search");

  const [modalVisible, setModalVisible] = useState(false);
  const { handleGetRecipes, handleConnectiontype } = useContext(NotiContext);

  useEffect(() => {
    handleGetRecipes();
  }, []);

  useEffect(() => {
    networkConnection();
  }, []);

  const networkConnection = async () => {
    await NetInfo.fetch().then((state) => {
      // Guardar Type dentro de un estado global
      handleConnectiontype(state.type);
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
    });
  };

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
      {modalVisible && (
        <IngredientesModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
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
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          display: "flex",
          alignItems: "flex-end",
          
        }}
      >
        <Pressable onPress={() => navigation.navigate("AllRecipes")}>
          <Text style={{ color: "#FA4A0C", fontSize: 18, fontWeight: "bold", padding:5 }}>
            Ver mas
          </Text>
        </Pressable>
      </View>
      <ScrollMenu status="list" state={2} />
    </View>

  );
};




export default HomePage;
