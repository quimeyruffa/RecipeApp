import axios from "axios";
import { Text, View, Image, Pressable } from "react-native";
import * as ImagePicker from "expo-image-picker";
import React, { useState, useContext } from "react";
import AddImg from "../../../assets/img/addImage.png";
import TextCard from "../../../components/Input/TextCard";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DropDownSelect from "../../../components/DropDown/DropDownSelect";
import NotiContext from "../../../Context/notifications/NotiContext";
import styles from "../../../styles/style.recipe";
import { URL } from "../../../Context/type";
const Receta = (props) => {
  const [showCard, setShowCard] = useState(false);
  const [cantPorciones, setCantPorciones] = useState(1);
  const [text, onChangeText] = useState("");
  const [des, setDes] = useState("");
  const [img, setPic] = useState(null);
  const [save, setSave] = useState(false);
  const [tipo, setTipo] = useState("");
  const [continuar, setContinuar] = useState(false);
  const { token, handleCreateRecipe, handleGetRecipes } = useContext(NotiContext);

  const unidades = [
    "Ensalada",
    "Carne",
    "Salsa",
    "Postre",
    "Sopa",
    "Bebida",
    "Pizza",
    "Pollo",
  ];
  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaType: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setPic(result.uri);
    }
  };
  const restCantPorciones = () => {
    if (cantPorciones == 1) {
      return null;
    } else {
      setCantPorciones(cantPorciones - 1);
    }
  };

  const handleControlNameRecipe = async () => {
    await axios
      .get(`${URL}api/recetas/verify/?nombre=${text}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((resp) => {
        props.setShowMessage(resp.data.message);
        setSave(!resp.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmitRecipe = async () => {
    console.log(img)
    let array = {
      nombre: text,
      descripcion: des,
      imagen: img,
      porciones: cantPorciones,
      cantidadPersonas: cantPorciones,
      tipo: null,
    };
    console.log(array);
    await axios
      .post(`${URL}api/recetas/`, array, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(async (resp) => {
        console.log(resp.data);

        setContinuar(true);
        await handleCreateRecipe(resp.data);
        await handleGetRecipes()
      })
      .catch((error) => {
        console.log(error);
      });
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
                  style={{ height: 100, width: 100, borderRadius: 200 }}
                  source={{ uri: img }}
                />
              ) : null}
            </View>

            <View
              style={{
                width: "100%",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <Pressable onPress={() => PickImage()}>
                <Image source={AddImg} style={{ height: 35, width: 35 }} />
              </Pressable>
            </View>
          </View>
          <View style={{ marginBottom: 10, marginTop: 10 }}>
            <Text style={styles.title}>Nombre</Text>
          </View>
          {showCard ? (
            <View style={{ display: "flex", flexDirection: "row" }}>
              <TextCard
                multiline
                numberOfLines={4}
                style={[styles.bottom_dots, styles.width]}
                onChangeText={onChangeText}
                value={text}
                maxLength={30}
              />
              {save ? (
                <MaterialCommunityIcons
                  name="sticker-check"
                  size={30}
                  color="#FA4A0C"
                />
              ) : (
                <MaterialCommunityIcons
                  name="content-save-alert"
                  size={30}
                  color="#FA4A0C"
                  onPress={handleControlNameRecipe}
                />
              )}
            </View>
          ) : (
            <AntDesign
              name="edit"
              size={24}
              color="#FA4A0C"
              onPress={() => setShowCard(true)}
            />
          )}
        </View>

        <View>
          <View style={{ marginBottom: 10, marginTop: 20 }}>
            <Text style={styles.title}>Descripcion</Text>
          </View>

          <TextCard
            multiline
            numberOfLines={6}
            style={styles.bottom_dots}
            onChangeText={setDes}
            value={des}
            maxLength={140}
          />
        </View>
      </View>

      {/* Cantidad */}

      <View style={styles.card__Recipe}>
        <View style={styles.row}>
          <Text style={styles.title}>Porciones</Text>
          <View>
            <View
              style={{
                display: "flex",
                width: 180,
                justifyContent: "flex-end",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  backgroundColor: "#FA4A0C",
                  borderRadius: 10,
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 30,
                  width: 105,
                }}
              >
                <Pressable
                  onPress={() => restCantPorciones()}
                  style={{
                    width: 35,
                  }}
                >
                  <AntDesign name="minus" size={24} color="white" />
                </Pressable>

                <Text
                  style={{
                    backgroundColor: "transparent",
                    width: 35,
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  {cantPorciones}{" "}
                </Text>

                <Pressable
                  onPress={() => setCantPorciones(cantPorciones + 1)}
                  style={{
                    width: 35,
                  }}
                >
                  <AntDesign name="plus" size={24} color="white" />
                </Pressable>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.title}>Tipo</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              height: 30,
              width: 330,
            }}
          >
            <DropDownSelect
              setTipo={setTipo}
              data={unidades}
              defaultText={unidades[0]}
            />
          </View>
        </View>
      </View>
      {continuar ? (
        <View style={styles.rowIngredientes}>
         

          <Pressable
            onPress={() => props.setStep(props.step + 1)}
            style={styles.nextButton}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Siguiente</Text>
          </Pressable>
        </View>
      ) : (
        <Pressable
          onPress={() => handleSubmitRecipe()}
          style={styles.nextButton}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Guardar</Text>
        </Pressable>
      )}
    </>
  );
};

export default Receta;
