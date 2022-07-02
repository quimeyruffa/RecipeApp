import { View, Text } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
const Item = (props) => {
  const { item, index } = props;
  const [check, setCheck] = useState(false);
  const [noCheck, setNoCheck] = useState(false);
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
            onPress={() => setCheck(!check)}
          />
        ) : (
          <AntDesign
            name="checksquareo"
            size={24}
            color="black"
            onPress={() => setCheck(!check)}
          />
        )}
        {noCheck ? (
          <AntDesign
            name="closesquare"
            size={24}
            color="black"
            onPress={() => setNoCheck(!noCheck)}
          />
        ) : (
          <AntDesign
            name="closesquareo"
            size={24}
            color="black"
            onPress={() => setNoCheck(!noCheck)}
          />
        )}
      </View>
    </View>
  );
};

export default Item;
