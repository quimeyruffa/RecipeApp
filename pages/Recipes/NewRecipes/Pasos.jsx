import * as ImagePicker from "expo-image-picker";
import { Text, View, Image, Pressable } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import styles from "../../../styles/style.recipe";
import NotiContext from "../../../Context/notifications/NotiContext";
import TextCard from "../../../components/Input/TextCard";
import PNG from "../../../assets/img/addIcon.png";
import AddImg from "../../../assets/img/addImage.png";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import { URL } from "../../../Context/type";

const Pasos = (props) => {
  const { token, create_recipe, handleMyRecipes, handleAsyncStorage, handleUpload } =
    useContext(NotiContext);
  const { saveData, setRecipeCellular, recipeCellular, item1, item2, item3 } =
    props;
  const { setStep, navigation } = props;
  const [paso, setPaso] = useState("");
  const [pasos, setPasos] = useState([]);
  const [img, setPic] = useState(null);

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaType: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
  
      
      let newFile = {uri:result.uri, type:`test/${result.uri.split(".")[1]}`, name:`test.${result.uri.split(".")[1]}`}
      handleUpload(newFile, setPic);
    }
  };

  const handlePushPaso = async () => {
    if (paso !== "") {
      let bodyPaso = {
        nroPaso: pasos.length + 1,
        texto: paso,
        imagen: img,
        receta: create_recipe.id,
      };

      setPasos([...pasos, bodyPaso]);
      if (saveData) {
         
          setRecipeCellular([...recipeCellular, bodyPaso]);
      }else{
          await axios
            .post(`${URL}api/recetas/paso/`, bodyPaso, {
              headers: { Authorization: `Bearer ${token}` },
            })
            .then(async (resp) => {
              setPaso("");
            })
            .catch((error) => {
              console.log(error);
            });
      }
    } else {
      console.log("array vacio");
    }
  };

  const handleCancel = async () => {
    await axios
      .delete(`${URL}api/recetas/${create_recipe.id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((resp) => {
        setStep(1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeletePaso = (nombre) => {
    setPasos(
      pasos.filter((item) => {
        item.texto === nombre;
      })
    );
  };

  const handleFinishedCreateRecipe = async () => {
    if (saveData) {
        let obj ={receta:item1, ingredientes:item2, pasos:item3}
        await handleAsyncStorage(obj);

    }else{
        await handleMyRecipes();
        setStep(1);
        navigation.navigate("Recipes");
    }
  };

  return (
    <>
      <View style={styles.card__Recipe}>
        <View>{/* Imagen */}</View>

        <View>
          <View>
            <View
              style={{ display: "flex", alignItems: "center", width: "100%" }}
            >
              {img ? (
                <Image
                  style={{ height: 200, width: 200, borderRadius: 200 }}
                  source={{ uri: img }}
                />
              ) : null}
            </View>

            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Pressable onPress={() => handlePushPaso()}>
                  <Image source={PNG} style={{ height: 35, width: 35 }} />
                </Pressable>
              </View>
              <Pressable onPress={() => PickImage()}>
                <Image source={AddImg} style={{ height: 35, width: 35 }} />
              </Pressable>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Paso {pasos.length + 1}</Text>
            <TextCard
              multiline
              numberOfLines={4}
              style={[styles.bottom_dots, styles.inputsSize]}
              onChangeText={setPaso}
              value={paso}
              maxLength={40}
            />
          </View>
        </View>
      </View>

      <View style={[{ marginBottom: 5 }, styles.rowIngredientes]}>
        <Pressable onPress={handleCancel} style={styles.nextButton}>
          <Text style={{ color: "white", fontSize: 20 }}>Cancelar</Text>
        </Pressable>

        <Pressable
          onPress={handleFinishedCreateRecipe}
          style={styles.nextButton}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Finalizar</Text>
        </Pressable>
      </View>
      {pasos &&
        pasos.map((item, index) => {
          return (
            <View
              style={[styles.card__Recipe, styles.rowIngredientes]}
              key={index}
            >
              <Text>{item.texto}</Text>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <MaterialIcons name="edit" size={30} color="#FA4A0C" />
                <MaterialIcons
                  name="delete"
                  size={30}
                  color="black"
                  onPress={() => handleDeletePaso(item.texto)}
                />
              </View>
            </View>
          );
        })}
    </>
  );
};

export default Pasos;
