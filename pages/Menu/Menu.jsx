import IngredientesModal from "../../components/Modal/ModalIngredientes";
import {
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import homePage from "../../styles/style.menu";
import ScrollMenu from "../../components/ScrollMenu/ScrollMenu";
import PNG from "../../assets/img/IngredientesButton.png";
import NotiContext from "../../Context/notifications/NotiContext";
import NetInfo from "@react-native-community/netinfo";

const HomePage = (props) => {
  const { navigation } = props;
  const [search, setSearch] = useState("");
  const [user, setUser] = useState("");
  const [ingrediente, setIngrediente] = useState("");
  const [noIngredient, setNoIngrediente] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [press, setPress]= useState("");
  const {
    handleGetRecipes,
    handleGetIngredientes,
    handleConnectiontype,
    handleGetAsyncStorage,
    handleFilterRecipe,
  } = useContext(NotiContext);

  useEffect(() => {
    handleGetRecipes();
    handleGetIngredientes();
  }, []);

  useEffect(() => {
    networkConnection();
  }, []);

  const networkConnection = async () => {
    await NetInfo.fetch().then((state) => {
      // Guardar Type dentro de un estado global
      handleConnectiontype(state.type);
      if (state.type === "wifi") {
        handleGetAsyncStorage();
      }
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
    });
  };

  const handleSearch = async () => {
    await handleFilterRecipe(search, user, ingrediente, noIngredient, press);
    navigation.navigate("AllRecipes");
  };
  return (
    <View style={homePage.container}>
      <View style={homePage.buttonContainer}>
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
          setNoIngrediente={setNoIngrediente}
          setIngredienteSearch={setIngrediente}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
      <View style={{ display: "flex", flexDirection: "row", width: "75%" }}>
        <View style={homePage.inputContainer}>
     
          <Text>Recipe</Text>
          <TextInput
            style={homePage.input}
            onChangeText={setSearch}
            value={search}
          />
        </View>
        <View style={homePage.inputContainer}>
        <Text>User</Text>
          <TextInput
            style={homePage.input}
            onChangeText={setUser}
            value={user}
          />
        </View>
        <FontAwesome
          name="search"
          size={30}
          color="black"
          onPress={handleSearch}
        />
      </View>

      <ScrollMenu status="list" state={1} press={press} setPress={setPress}/>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <Pressable onPress={async() => {
          await handleGetRecipes()
          navigation.navigate("AllRecipes")}}>
          <Text
            style={{
              color: "#FA4A0C",
              fontSize: 18,
              fontWeight: "bold",
              padding: 5,
            }}
          >
            Ver mas
          </Text>
        </Pressable>
      </View>
      <ScrollMenu status="list" state={2} press={press} setPress={setPress}/>
    </View>
  );
};

export default HomePage;
