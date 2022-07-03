import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";
import { FontAwesome, Feather, AntDesign } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import NotiContext from "../../Context/notifications/NotiContext";
import { useNavigation } from "@react-navigation/native";
import CarouselCards from "../Carousel/Carousel";
import IngredientesModalEdit from "../Modal/ModalEdit";
import NumericInput from 'react-native-numeric-input'
import CantidadesModalEdit from "../Modal/ModalEditCantidades";
const DetailsCardRecipe = () => {
  const navigation = useNavigation();
  const { details_recipe } = useContext(NotiContext);
  const [openModal, setOpenModal] = useState(false);
  const [openModalIngredientes, setOpenModalIngredientes] = useState(false);
  const [select, setSelect] = useState(false);
  const [fav, setFav] = useState(false);
  const [dividir, setDividir] = useState(false);
  const [cantidades, setCantidades] = useState(details_recipe?.cantidadPersonas);
  const handleSelect = (value) => setSelect(value);
  const unidades = ["kg", "ml", "l", "g", "Taza"];
  let divNum = 0.5

  // if step == p (map dots) => orange
  useEffect(() => {
    console.log("console details", details_recipe);
  }, [details_recipe]);

  return (
    <KeyboardAwareScrollView behavior="height">
      {details_recipe && (
        <View style={[styles.container]}>
          <IngredientesModalEdit
            modalVisible={openModal}
            setModalVisible={setOpenModal}
            setCantidades={setCantidades}
            cantidades={cantidades}
            setDividir={setDividir}
            dividir={dividir}
          />

          <CantidadesModalEdit 
          modalVisible={openModalIngredientes}
          setModalVisible={setOpenModalIngredientes}
          />




          <AntDesign
            name="back"
            size={30}
            color="#FA4A0C"
            onPress={() => {
              navigation.navigate("AllRecipes");
            }}
            style={{ margin: 15 }}
          />
          <View
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Pressable onPress={() => setOpenModal(true)}>
              <Text
                style={{
                  color: "#FA4A0C",
                  fontSize: 18,
                  fontWeight: "bold",
                  padding: 5,
                }}
              >
                Editar Porciones
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              padding: 15,
              justifyContent: "space-between",
            }}
          >
            <View>
              <FontAwesome
                name={select ? "bookmark" : "bookmark-o"}
                size={40}
                color={select ? "#FA4A0C" : "black"}
                onPress={() => handleSelect(!select)}
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <AntDesign name="star" size={24} color="#F47B0A" />
              <AntDesign name="star" size={24} color="#F47B0A" />
              <AntDesign name="star" size={24} color="#F47B0A" />
              <AntDesign name="star" size={24} color="#C4C4C4" />
              <AntDesign name="star" size={24} color="#C4C4C4" />
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <AntDesign
                name="heart"
                size={30}
                color={fav ? "#FA4A0C" : "#948f8f"}
                onPress={() => setFav(!fav)}
              />
            </View>
          </View>

          <View style={[styles.general]}>
            {details_recipe?.imagen ? (
              <Image
                style={[styles.img]}
                source={{ uri: details_recipe?.imagen }}
              />
            ) : (
              <Text></Text>
            )}
          </View>

          <View style={[styles.general, styles.row]}>
            <Feather name="user" size={24} color="#FA4A0C" />
            <Text style={styles.cantPersonas}>
              {dividir ?
              <>
              {details_recipe?.cantidadPersonas}{" "}
              {details_recipe?.cantidadPersonas > 1 ? "personas" : "persona"}
              </>
            :
            <>
              {cantidades}{" "}
              {cantidades > 1 ? "personas" : "persona"}
            </>
            }
            </Text>
          </View>

          <View style={[styles.general]}>
            <Text style={styles.name}>{details_recipe?.nombre}</Text>
          </View>

          <View style={[styles.general, styles.row]}>
            <Text style={styles.tipoReceta}>
              {" "}
              Tipo de receta: {details_recipe?.tipo}
            </Text>
          </View>

          <View style={[styles.generalSubTitle]}>
            <Text style={styles.subTitle}> Descripcion </Text>
          </View>

          <View style={[styles.generalSubTitle]}>
            <Text style={styles.subTitleDes}>
              {details_recipe?.descripcion}
            </Text>
          </View>

          <View style={[styles.generalSubTitle]}>
          <View
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Pressable onPress={() => setOpenModalIngredientes(true)}>
              <Text
                style={{
                  color: "#FA4A0C",
                  fontSize: 18,
                  fontWeight: "bold",
                  padding: 5,
                }}
              >
                Editar Cantidades
              </Text>
            </Pressable>
          </View>
            <Text style={styles.subTitle}> Ingredientes </Text>
            {details_recipe?.utilizados?.map((ingrediente, index) => (
              <Text key={index} style={styles.subTitleDes}>
                {ingrediente?.ingrediente} {" "}
              
                {cantidades !== details_recipe?.cantidadPersonas ?
                <>
                {parseInt(ingrediente?.cantidad) * cantidades}
                </> 
                :
                (dividir ? 
                  <>
                {parseInt(ingrediente?.cantidad) * divNum}
                </>:
                <>
                {parseInt(ingrediente?.cantidad)}
                </>
                  )
                 }
                {" "}
                {unidades[ingrediente?.unidad - 1]}
              </Text>
            ))}
          </View>

          {details_recipe?.pasos.lenght !== 0 && (
            <View style={[styles.generalSubTitle]}>
              <Text style={styles.subTitle}> Pasos </Text>
              <SafeAreaView style={styles.containerImageCarrousel}>
                <CarouselCards data={details_recipe.pasos} />
              </SafeAreaView>
            </View>
          )}
        </View>
      )}
    </KeyboardAwareScrollView>
  );
};

export default DetailsCardRecipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 100,
  },

  shadow: {
    shadowColor: "gray",
    shadowOffset: {
      width: 20,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
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
  generalSubTitle: {
    display: "flex",
    marginTop: 10,
    width: "100%",
    marginBottom: 30,
  },

  row: {
    marginTop: 20,
    flexDirection: "row",
  },
  cantPersonas: {
    fontSize: 16,
    fontWeight: "bold",
  },
  tipoReceta: {
    fontSize: 16,
    fontWeight: "100",
    color: "#FA4A0C",
  },
  subTitle: {
    fontSize: 18,
    margin: 6,
    color: "black",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  subTitleDes: {
    fontSize: 18,
    marginLeft: 10,
    marginTop: 2,

    color: "black",
    fontStyle: "italic",
  },
  ingredientesPrincipales: {
    fontSize: 14,
    fontWeight: "bold",
  },
  ingredientes: {
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "#C4C4C4",
    margin: 3,
    borderRadius: 5,
    padding: 2,
  },
  buttonMore: {
    color: "#FA4A0C",
    fontSize: 16,
    fontWeight: "bold",
  },
  cardContainer: {
    margin: 10,
  },
  card: {
    backgroundColor: "white",
    height: 550,
    width: 185,
    borderRadius: 40,
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  imgStep: {
    width: 300,
    height: 200,
  },
  name: {
    fontWeight: "500",
    fontSize: 25,
    fontStyle: "italic",
  },
  containerImageCarrousel: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 500,
  },
});
