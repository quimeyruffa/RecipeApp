import { View, Text, Image } from "react-native";
import React, { useContext } from "react";
import styles from "../../styles/style.recipe";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialIcons } from "@expo/vector-icons";

const ItemFav = (props) => {
  const { data, handleDeleteFavorito , handleShowDetails} = props;
  
  const leftSwipe = () => {
    return (
      <View style={{ backgroundColor: "red", width: 100 }}>
        <Text>Delete</Text>
      </View>
    );
  };


  

  return (
    <Swipeable renderLeftActions={leftSwipe}>
      <View
        style={[{ display: "flex", flexDirection: "row" }, styles.card__Recipe]}
      >
        {data.imagen &&
        <Image
        style={{ height: 65, width: 65, borderRadius: 60 }}
        source={{uri: data.imagen}}
        />
      }
       
        
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 15,
            width: 150,
          }}
        >
          <Text style={{ fontSize: 17, marginBottom: 5 }}>{data.nombre}</Text>
          <Text style={{ color: "#FA4A0C" }}>
            {" "}
            {data.cantidadPersonas}{" "}
            {data.cantidadPersonas > 1 ? "personas" : "persona"}{" "}
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: 100,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
<MaterialIcons name="more" size={40} color="black" onPress={()=>handleShowDetails(data)}/>
          <MaterialIcons
            name="delete"
            size={40}
            color="red"
            onPress={() => handleDeleteFavorito(data.id)}
          />
        </View>
      </View>
    </Swipeable>
  );
};

export default ItemFav;
