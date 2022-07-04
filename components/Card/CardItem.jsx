import React, { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Img from '../../assets/img/comida.png'

const CardItem = (props) => {
  const {item} = props;
  
  return (
    <View style={styles.cardContainer}>
      <View style={[styles.card, styles.shadow]}>
        <View style={styles.icon}>
          
        </View>
        <View style={styles.general}>
          {item?.imagen ?
          <Image
            style={styles.img}
            source={{uri: item?.imagen}}
          /> 
             :
             <Text></Text> 
        }
        </View>
        <View style={styles.general}>
          <Text style={styles.name}>{item?.nombre} </Text>
        </View>
        <View style={[styles.general, styles.row]}>
          <Feather name="user" size={24} color="#FA4A0C" />
          <Text style={styles.cantPersonas}> {item?.cantidadPersonas} personas</Text>
        </View>
      </View>
    </View>
  );
};

export default CardItem;

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
  cardContainer: {
    margin: 10,
    marginRight: 15,
  },
  card: {
    backgroundColor: "white",
    height: 300,
    width: 200,
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
