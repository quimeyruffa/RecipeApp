import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, Image,Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import NotiContext from "../../Context/notifications/NotiContext";

const AllCardFormat = (props) => {
  const {recipe} = props;
  const {handleDetailsRecipe} = useContext(NotiContext)
  const navigation = useNavigation(); 
  const [select, setSelect] = useState(false);

  const handleSelect = (value) => setSelect(value);

  const handleShowDetails = async (index) => {
    await handleDetailsRecipe(index)
    navigation.navigate("DetailRecipe")
  }

  return (
    <View style={styles.cardContainer}>
      <View style={[styles.card, styles.shadow]}>
        <View style={styles.icon}>
          <FontAwesome
            name={select ? "bookmark" : "bookmark-o"}
            size={35}
            color={select ? "#FA4A0C" : "black"}
            onPress={() => handleSelect(!select)}
          />
        </View>
        <View style={styles.general}>
          <Image
            style={styles.img}
            source={require("../../assets/img/comida.png")}
          />
        </View>
        <View style={styles.general}>
          <Text style={styles.name}>{recipe.nombre} </Text>
        </View>
        <View style={[styles.general, styles.row]}>
          <Feather name="user" size={24} color="#FA4A0C" />
          <Text style={styles.cantPersonas}> {recipe.cantidadPersonas} {recipe.cantidadPersonas > 1 ? 'personas':'persona'}</Text>
        </View>

        <View style={[styles.general, styles.row]}>
          <AntDesign name="star" size={24} color="#F47B0A" />
          <AntDesign name="star" size={24} color="#F47B0A" />
          <AntDesign name="star" size={24} color="#F47B0A" />
          <AntDesign name="star" size={24} color="#C4C4C4" />
          <AntDesign name="star" size={24} color="#C4C4C4" />
        </View>

        <View style={[styles.general, styles.row]}>
          <Text style={styles.ingredientesPrincipales}>
            {" "}
            Ingredientes principales
          </Text>
        </View>

        <View style={[styles.general, styles.row]}>
          {recipe.utilizados.map((item, index) => (
          <Text key={index} style={styles.ingredientes}> {item.ingrediente}</Text>
          ))}

          
        </View>

        <View style={[styles.general, styles.row]}>
          <Pressable onPress={() => handleShowDetails(recipe.id)}>
            <Text style={styles.buttonMore}> see more</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default AllCardFormat;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "gray",
    shadowOffset: {
      width: 20,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    elevation: 5,
  },
  icon: {
    padding: 13,
  },
  general: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 10,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
  },
  cantPersonas: {
    fontSize: 16,
    fontWeight: "bold",
  },
  ingredientesPrincipales: {
    fontSize: 14,
    fontWeight: "bold",
  },
  ingredientes: {
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "#C4C4C4",
    margin: 3,
    borderRadius: 5,
    padding: 2,
  },
  buttonMore: {
    color: "#FA4A0C",
    fontSize: 16,
    fontWeight: "bold",
  },
  cardContainer: {
    margin: 10,
  },
  card: {
    backgroundColor: "white",
    height: 550,
    width: 185,
    borderRadius: 40,
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 70,
  },
  name: {
    fontWeight: "100",
    fontSize: 20,
    fontStyle: "italic",
  },
});
