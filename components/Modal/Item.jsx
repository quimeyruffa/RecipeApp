import { View, Text } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
const Item = (props) => {
  const { item, index, setNoIngrediente, setIngredienteSearch} = props;
  const [check, setCheck] = useState(false);
  const [noCheck, setNoCheck] = useState(false);

  const handlesPressAddIngrediente = (nombre) =>{
    if(!check && !noCheck){
      setIngredienteSearch(nombre)
      setCheck(true)
    }else{
      setIngredienteSearch('')
      setCheck(false)
    }
  }

  const handlePressNoAddIngrediente = (nombre) =>{
    if(!noCheck && !check ){
      setNoIngrediente(nombre)
      setNoCheck(true)
    }else{
      setNoIngrediente('')
      setNoCheck(false)
    }
  }
  return (
    <View
      key={index}
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <Text>{item.nombre}</Text>

      <View style={{ display: "flex", flexDirection: "row" }}>
        {check ? (
          <AntDesign
            name="checksquare"
            size={24}
            color="black"
            onPress={() => handlesPressAddIngrediente(item.nombre)}
          />
        ) : (
          <AntDesign
            name="checksquareo"
            size={24}
            color="black"
            onPress={() => handlesPressAddIngrediente(item.nombre)}
          />
        )}
        {noCheck ? (
          <AntDesign
            name="closesquare"
            size={24}
            color="black"
            onPress={() => handlePressNoAddIngrediente(item.nombre)}
          />
        ) : (
          <AntDesign
            name="closesquareo"
            size={24}
            color="black"
            onPress={() => handlePressNoAddIngrediente(item.nombre)}
          />
        )}
      </View>
    </View>
  );
};

export default Item;
