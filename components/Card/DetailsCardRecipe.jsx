import React, { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import {
  FontAwesome,
  Feather,
  AntDesign,
  Ionicons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const DetailsCardRecipe = () => {
  const [select, setSelect] = useState(false);
  const [fav, setFav] = useState(false);
  const handleSelect = (value) => setSelect(value);
  const data = [
    { key: "300 gr tomates cherry" },
    { key: "1 unidad de lechuga" },
    { key: "1 unidad de filet de salmón" },
  ];

  // if step == p (map dots) => orange

  return (
    <KeyboardAwareScrollView behavior="height">
      <View style={[styles.container]}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            padding: 15,
            justifyContent: "space-between",
          }}
        >
          <View>
            <FontAwesome
              name={select ? "bookmark" : "bookmark-o"}
              size={40}
              color={select ? "#FA4A0C" : "black"}
              onPress={() => handleSelect(!select)}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <AntDesign name="star" size={24} color="#F47B0A" />
            <AntDesign name="star" size={24} color="#F47B0A" />
            <AntDesign name="star" size={24} color="#F47B0A" />
            <AntDesign name="star" size={24} color="#C4C4C4" />
            <AntDesign name="star" size={24} color="#C4C4C4" />
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <AntDesign
              name="heart"
              size={30}
              color={fav ? "#FA4A0C" : "#948f8f"}
              onPress={() => setFav(!fav)}
            />
          </View>
        </View>

        <View style={[styles.general]}>
          <Image
            style={[styles.img]}
            source={require("../../assets/img/comida.png")}
          />
        </View>

        <View style={[styles.general, styles.row]}>
          <Feather name="user" size={24} color="#FA4A0C" />
          <Text style={styles.cantPersonas}> 3 personas</Text>
        </View>

        <View style={[styles.general]}>
          <Text style={styles.name}>Ensalada con salmón </Text>
        </View>

        <View style={[styles.general, styles.row]}>
          <Text style={styles.tipoReceta}> Tipo de receta: Ensalada</Text>
        </View>

        <View style={[styles.generalSubTitle]}>
          <Text style={styles.subTitle}> Descripcion </Text>
        </View>

        <View style={[styles.generalSubTitle]}>
          <Text style={styles.subTitleDes}>
            {" "}
            Ensalda de tomate con otros vegetales, perfecto para un almuerzo de
            verano!{" "}
          </Text>
        </View>

        <View style={[styles.generalSubTitle]}>
          <Text style={styles.subTitle}> Ingredientes </Text>
          {data.map((item) => (
            <Text key={item.key} style={styles.subTitleDes}>
              {item.key}
            </Text>
          ))}
        </View>

        <View style={[styles.generalSubTitle]}>
          <Text style={styles.subTitle}> Pasos </Text>
          <View>
            {/* Pasos */}
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#c4c4c48f",
                padding: 5,
              }}
            >
              <Text style={styles.subTitleDes}>1. Cortar los vegetales</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Ionicons name="chevron-back" size={35} color="#747272" />
                <Image
                  style={[styles.imgStep]}
                  source={require("../../assets/img/plato.png")}
                />
                <MaterialIcons name="navigate-next" size={35} color="#747272" />
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Entypo name="dot-single" size={40} color="#FA4A0C" />
                <Entypo name="dot-single" size={40} color="#747272" />
                <Entypo name="dot-single" size={40} color="#747272" />
                <Entypo name="dot-single" size={40} color="#747272" />
                <Entypo name="dot-single" size={40} color="#747272" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default DetailsCardRecipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 100,
  },
  shadow: {
    shadowColor: "gray",
    shadowOffset: {
      width: 20,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
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
  generalSubTitle: {
    display: "flex",
    marginTop: 10,
    width: "100%",
    marginBottom: 30,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
  },
  cantPersonas: {
    fontSize: 16,
    fontWeight: "bold",
  },
  tipoReceta: {
    fontSize: 16,
    fontWeight: "100",
    color: "#FA4A0C",
  },
  subTitle: {
    fontSize: 18,
    margin: 6,
    color: "black",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  subTitleDes: {
    fontSize: 18,
    marginLeft: 10,
    marginTop: 2,

    color: "black",
    fontStyle: "italic",
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
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  imgStep: {
    width: 300,
    height: 200,
  },
  name: {
    fontWeight: "500",
    fontSize: 25,
    fontStyle: "italic",
  },
});
