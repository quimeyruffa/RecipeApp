import React, { useContext } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import NotiContext from "../../Context/notifications/NotiContext";
import { useEffect } from "react";
import styles from "../../styles/style.recipe";
import ItemDownload from "../../components/Card/ItemDownload";
import { useNavigation } from '@react-navigation/native';

const SaveRecipes = () => {
  const { descargas, handleDetailsDownload } = useContext(NotiContext);
  const navigation = useNavigation(); 

  const handleShowDetails = async (recipe) => {
    await handleDetailsDownload(recipe)
    navigation.navigate("DetailRecipeDownload")
  }

  useEffect(() => { }, [descargas])
  return (


    <View style={{ flex: 1 }}>
      {descargas ?


        <>
          <View style={styles.container}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>Mis Descargas</Text>
            <FlatList
              data={descargas}
              renderItem={({ item }) => {

                return <ItemDownload data={item} key={item.objeto[1].id} handleShowDetails={handleShowDetails}/>
              }}
              ItemSeparatorComponent={() => {
                return <View style={{ marginBottom: 5 }}>

                </View>
              }}
            />
          </View>
        </>

        :
        <View style={[style.general]}>
          <AntDesign name="arrowdown" size={200} color="#C7C7C7" />
          <Text style={[style.text]}>No guardaste ninguna receta</Text>
        </View>

      }
    </View>
  );
};

export default SaveRecipes;

const style = StyleSheet.create({
  general: {
    display: "flex",
    alignItems: "center",
    top: 150,
    flex: 1,
  },
  text: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: "bold",
    color: "gray",
  },
});
