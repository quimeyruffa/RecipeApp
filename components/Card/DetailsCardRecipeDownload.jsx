import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,

} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import NotiContext from "../../Context/notifications/NotiContext";
import { useNavigation } from "@react-navigation/native";
import CarouselCards from "../Carousel/Carousel";


const DetailsCardRecipeDownload = () => {
  const navigation = useNavigation();
  const { detailsDownload } = useContext(NotiContext);
  const recipe = detailsDownload.objeto[1]
  const cant = detailsDownload.objeto[0]
  //INGREDIENTES
  const [cantidades, setCantidades] = useState(false);
  const [cantIngrediente, setCantidadIngrediente] = useState(1);
  const unidades = ["kg", "ml", "l", "g", "Taza"];


  const handleCalculo = () => {

    if (cant.dividir) {
      setCantidadIngrediente(0.5)
    } else if (cant.cantidades >= cant.cantIngrediente) {
      setCantidades(true)
    } else {
      setCantidadIngrediente(cant.cantIngrediente)
    }

  }

  useEffect(() => {
    handleCalculo()
  }, [detailsDownload]);




  return (
    <KeyboardAwareScrollView behavior="height">
      {detailsDownload && (
        <View style={[styles.container]}>





          <AntDesign
            name="back"
            size={30}
            color="#FA4A0C"
            onPress={() => {
              navigation.navigate("AllRecipes");
            }}
            style={{ margin: 15 }}
          />



          <View style={[styles.general]}>
            {recipe?.imagen ? (
              <Image
                style={[styles.img]}
                source={{ uri: recipe?.imagen }}
              />
            ) : (
              <Text></Text>
            )}
          </View>

          <View style={[styles.general, styles.row]}>
            <Feather name="user" size={24} color="#FA4A0C" />
            <Text style={styles.cantPersonas}>
              {cantidades ?
                <>
                  {recipe?.cantidadPersonas * cant.cantidades}{" "}
                  {recipe?.cantidadPersonas * cant.cantidades > 1 ? "personas" : "persona"}
                </>
                :
                <>
                  {cantIngrediente === 0.5 && recipe?.cantidadPersonas > 1 ?

                    <>
                      {recipe?.cantidadPersonas * cantIngrediente}{" "}
                      {recipe?.cantidadPersonas * cantIngrediente > 1 ? "personas" : "persona"}
                    </>
                    :
                    <>
                      {cantIngrediente === 0.5 ?
                        <>
                          {recipe?.cantidadPersonas}{" "}
                          {recipe?.cantidadPersonas > 1 ? "personas" : "persona"}
                        </>
                        :
                        <>
                          {recipe?.cantidadPersonas * cantIngrediente}{" "}
                          {recipe?.cantidadPersonas * cantIngrediente > 1 ? "personas" : "persona"}
                        </>
                      }
                    </>
                  }
                </>
              }


            </Text>
          </View>

          <View style={[styles.general]}>
            <Text style={styles.name}>{recipe?.nombre}</Text>
          </View>

          <View style={[styles.general, styles.row]}>
            <Text style={styles.tipoReceta}>
              {" "}
              Tipo de receta: {recipe?.tipo}
            </Text>
          </View>

          <View style={[styles.generalSubTitle]}>
            <Text style={styles.subTitle}> Descripcion </Text>
          </View>

          <View style={[styles.generalSubTitle]}>
            <Text style={styles.subTitleDes}>
              {recipe?.descripcion}
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


            </View>
            <Text style={styles.subTitle}> Ingredientes </Text>
            {recipe?.utilizados?.map((ingrediente, index) => (
              <Text key={index} style={styles.subTitleDes}>
                {ingrediente?.ingrediente} {" "}

                {cantidades ?
                  <>
                    {parseInt(ingrediente?.cantidad) * cant.cantidades}
                  </>
                  :
                  <>
                    {parseInt(ingrediente?.cantidad) * cantIngrediente}
                  </>
                }




                {" "}
                {unidades[ingrediente?.unidad - 1]}
              </Text>
            ))}
          </View>

          {recipe?.pasos.lenght !== 0 && (
            <View style={[styles.generalSubTitle]}>
              <Text style={styles.subTitle}> Pasos </Text>
              <SafeAreaView style={styles.containerImageCarrousel}>
                <CarouselCards data={recipe.pasos} />
              </SafeAreaView>
            </View>
          )}
        </View>
      )}
    </KeyboardAwareScrollView>
  );
};

export default DetailsCardRecipeDownload;

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
