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
import CantidadesModalEdit from '../Modal/ModalEditCantidades'
import IngredientesModal from "../Modal/Modal";

const DetailsCardRecipe = () => {
  const navigation = useNavigation();
  const { details_recipe, handleAsyncStorageRecipeEdit, handleSetFavorito,handleDeleteFavorito} = useContext(NotiContext);
  const [openModal, setOpenModal] = useState(false);
  const [openModalUpload, setOpenModalUpload] = useState(false);
  const [openModalIngredientes, setOpenModalIngredientes] = useState(false);
  const [fav, setFav] = useState(false);
  const [dividir, setDividir] = useState(false);
  const [download, setDownload] = useState(false);

  //INGREDIENTES
  const [cantidades, setCantidades] = useState(details_recipe?.cantidadPersonas);
  const [cantIngrediente, setCantidadIngrediente] = useState(1);
  const [ingredienteSelect, setIngrediente] = useState('');


  //SAVE RECIPE EDIT
  const handleSaveEditRecipe = async () => {
    let array = { 'objeto': [{ 'dividir': dividir, 'cantidades': cantidades, 'cantIngrediente': cantIngrediente }, (details_recipe)] }
    let res = await handleAsyncStorageRecipeEdit(array)
    setDownload(!res)
      setOpenModalUpload(res)
  }


  const unidades = ["kg", "ml", "l", "g", "Taza"];
  let divNum = 0.5


  const handleSetIngredienteEdit = (ingrediente) => {
    setIngrediente(ingrediente)
    setOpenModalIngredientes(true)
  }

  const handleCantIngrediente = (value) => {
    if (value >= 1) {
      setCantidadIngrediente(value)
    }
  }


  useEffect(() => { 
    setCantidades(details_recipe?.cantidadPersonas)
    setCantidadIngrediente(1)
    setDividir(false)
    setFav(false)
    setDownload(false)
  }, [details_recipe]);


  const handleFav = () => {
    if(!fav){
      handleSetFavorito(details_recipe.id)
      setFav(!fav)
    }else{
      handleDeleteFavorito(details_recipe.id)
      setFav(!fav)
    }
  }

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

          <IngredientesModal
          setModalVisible={setOpenModalUpload}
          modalVisible={openModalUpload}
          message='Ya tenes 5 recetas descargadas'
          />

          <CantidadesModalEdit
            modalVisible={openModalIngredientes}
            setModalVisible={setOpenModalIngredientes}
            ingrediente={ingredienteSelect}
            setCantidadIngrediente={handleCantIngrediente}
            cantIngrediente={cantIngrediente}

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
              <AntDesign name="arrowdown" size={40}  color={download ? "#FA4A0C" : "#948f8f"} onPress={() => {
                handleSaveEditRecipe()
              }} />

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
                onPress={handleFav}
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
                  {cantIngrediente === 1 ?
                    (<>
                      {cantidades}{" "}
                      {cantidades > 1 ? "personas" : "persona"}
                    </>
                    )
                    :
                    (
                      <>
                        {cantidades * cantIngrediente}{" "}
                        {cantidades * cantIngrediente > 1 ? "personas" : "persona"}
                      </>
                    )
                  }
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
            
            <Text style={styles.subTitle}> Ingredientes </Text>
            {details_recipe?.utilizados?.map((ingrediente, index) => (
              <Text key={index} style={styles.subTitleDes}>
                {ingrediente?.ingrediente} {" "}

                {!openModalIngredientes && cantidades !== details_recipe?.cantidadPersonas ?
                  <>
                    {parseInt(ingrediente?.cantidad) * cantidades}
                  </>
                  :
                  (dividir ?
                    <>
                      {parseInt(ingrediente?.cantidad) * divNum}
                    </> :
                    <>
                      {cantIngrediente === 1 ?
                        (parseInt(ingrediente?.cantidad))
                        :
                        (parseInt(ingrediente?.cantidad) * cantIngrediente)
                      }

                      <AntDesign name="edit" size={24} color="black" onPress={() => handleSetIngredienteEdit(ingrediente)} />
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
