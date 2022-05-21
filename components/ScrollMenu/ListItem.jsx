import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

 const ListItem = (props) => {
  const { text, key } = props.item;
 


  return (
    <Pressable
      key={key}
      id={text}
      onPress={()=>props.handlePress(text)}
      style={styles.item}
    >
      <Text style={props.press === text ? styles.buttomPressed : styles.buttom}>
        {" "}
        {text}
      </Text>
    </Pressable>
  );
};
export default ListItem;


const styles = StyleSheet.create({
  buttom: {
    backgroundColor: "transparent",
    color: "gray",
    fontSize: 19,
  },
  buttomPressed: {
    backgroundColor: "transparent",
    color: "#FA4A0C",
    fontSize: 19,
    fontWeight: "bold",
    borderBottomColor:"#FA4A0C",
    borderBottomWidth:3
  },
  sectionHeader: {
    fontWeight: "800",
    fontSize: 18,
    color: "#f4f4f4",
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 10,
    marginRight: 15,
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: "black",
    marginTop: 5,
  },
});
