import React from "react";
import { StyleSheet, View, Button } from "react-native";

export default ListItem = (props) => {
  const handleChange = (value) => props.handleSelect(value);

  return (
    <View style={styles.item}>
      <Button
        id={props.item.key}
        style={styles.buttom}
        onPress={() => {
          handleChange(props.item.key);
        }}
        title="Learn More"
      />
    </View>
  );
};

const styles = StyleSheet.create({
 
  buttom:{
      backgroundColor:'transparent',
      color:'gray',
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
