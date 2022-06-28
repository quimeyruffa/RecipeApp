import { Text, View, Image, Pressable } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import styles from "../../../styles/style.recipe";
import TextCard from "../../../components/Input/TextCard";
import PNG from "../../../assets/img/addIcon.png";
import DropDownSelect from "../../../components/DropDown/DropDownSelect";
import { MaterialIcons } from "@expo/vector-icons";
import NotiContext from "../../../Context/notifications/NotiContext";
import axios from "axios";
import { URL } from "../../../Context/type";

const Ingredientes = (props) => {
  const { create_recipe, token, Ingredientes, handleGetIngredientes } =
    useContext(NotiContext);
  const [cant, setCant] = useState(1);
  const [ingredientes, setIngredientes] = useState([]);
  const [ingrediente, setIngrediente] = useState("");
  const [unidad, setUnidad] = useState(1);
  const { saveData, setRecipeCellular, recipeCellular } = props;
  const unidades = ["kg", "ml", "l", "g", "Taza"];
  const restCant = () => {
    if (cant == 1) {
      return null;
    } else {
      setCant(cant - 1);
    }
  };

  useEffect(() => {
    handleGetIngredientes();
  }, [ingredientes]);

  function handleFindIngrediente(item) {
    return item.nombre === ingrediente;
  }
  const handleAddIngredient = async () => {
    // Control ingredinetes
    if (ingrediente === "") {
      console.log("array");
    } else if (Ingredientes.find(handleFindIngrediente)) {
      handleCreateRecipe();
    } else {
      await axios
        .post(
          `${URL}api/recetas/ingredientes/`,
          { nombre: ingrediente },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then(() => {
          handleCreateRecipe();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleCreateRecipe = async () => {
    let array = {
      cantidad: cant,
      observaciones: "",
      receta: create_recipe.id,
      ingrediente: ingrediente,
      unidad: unidad,
    };
   
    setIngredientes([...ingredientes, array]);

    if (saveData) {
        console.log('save', saveData)
        console.log(recipeCellular);
        setRecipeCellular([...recipeCellular, array]);
    }else{
        await axios
          .post(`${URL}api/recetas/utilizados/`, array, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then(async (resp) => {
            console.log('Dta',resp.data);
          })
          .catch((error) => {
            console.log(error);
          });
    }
  };

  const handleDeleteRecipe = (nombre) => {
    setIngredientes(
      ingredientes.filter((item) => {
        item.ingrediente === nombre;
      })
    );
  };

  return (
    <>
      <View style={styles.card__Recipe}>
        <View>
          <Pressable onPress={handleAddIngredient}>
            <Image source={PNG} style={{ height: 35, width: 35 }} />
          </Pressable>
        </View>

        <View style={styles.row}>
          <Text style={styles.title}>Ingrediente</Text>
          <TextCard
            multiline
            numberOfLines={4}
            style={[styles.bottom_dots, styles.inputsSize]}
            onChangeText={setIngrediente}
            value={ingrediente}
            maxLength={40}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.title}>Cantidad</Text>
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
                  onPress={() => restCant()}
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
                  {cant}{" "}
                </Text>

                <Pressable
                  onPress={() => setCant(cant + 1)}
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
          <Text style={styles.title}>Unidad</Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              height: 30,
              width: 280,
            }}
          >
            <DropDownSelect
              setUnidad={setUnidad}
              data={unidades}
              defaultText={unidades[0]}
            />
          </View>
        </View>
      </View>

      <View style={[{ marginBottom: 5 }, styles.rowIngredientes]}>
        <Pressable
          onPress={() => props.setStep(props.step - 1)}
          style={styles.nextButton}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Atras</Text>
        </Pressable>

        <Pressable
          onPress={() => props.setStep(props.step + 1)}
          style={styles.nextButton}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Siguiente</Text>
        </Pressable>
      </View>

      {ingredientes &&
        ingredientes.map((item, index) => {
          return (
            <View
              style={[styles.card__Recipe, styles.rowIngredientes]}
              key={index}
            >
              <Text>{item.ingrediente}</Text>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <MaterialIcons name="edit" size={30} color="#FA4A0C" />
                <MaterialIcons
                  name="delete"
                  size={30}
                  color="black"
                  onPress={() => handleDeleteRecipe(item.ingrediente)}
                />
              </View>
            </View>
          );
        })}
    </>
  );
};

export default Ingredientes;
