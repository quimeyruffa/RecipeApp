import { View } from "react-native";
import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import IngredientesModal from "../../components/Modal/Modal";
import styles from "../../styles/style.recipe";
import Ingredientes from "./NewRecipes/Ingredientes";
import Pasos from "./NewRecipes/Pasos";
import Receta from "./NewRecipes/Receta";
import NotiContext from "../../Context/notifications/NotiContext";
import { useContext } from "react";

const NewRecipes = (props) => {
  const { connection_type } = useContext(NotiContext);
  const [step, setStep] = useState(1);
  const [continuar, setContinue] = useState(false);
  const [aceptar, setAceptar] = useState(connection_type === "wifi");
  const [recipeCellular, setRecipeCellular] = useState([]);
  const [ingredienteCellular, setIngredienteCellular] = useState([]);
  const [pasosCellular, setPasosCellular] = useState([]);
  const { navigation } = props;
  // Control cartas

  const [showMessage, setShowMessage] = useState(false);

  useEffect(async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Permission denied.");
      }
    }
  }, []);

 

  useEffect(() => {console.log(connection_type)}, [connection_type]);

  const hangleAceptar = () => setAceptar(!aceptar) ;
  
  
  return (
    <KeyboardAwareScrollView behavior="height">
      <IngredientesModal
        modalVisible={!aceptar}
        setModalVisible={hangleAceptar}
        message={`La red que esta utilizando no es gratuita. ¿Desea continuar con cargos?`}
        button_function={setContinue}
        
      />

      <IngredientesModal
        modalVisible={showMessage}
        setModalVisible={setShowMessage}
        message="La receta ya existe, por favor elija otro nombre"
      />

      <View style={styles.container}>
        {step === 1 ? (
          <Receta
            setShowMessage={setShowMessage}
            setStep={setStep}
            step={step}
            saveData={continuar}
            setRecipeCellular={setRecipeCellular}
            recipeCellular={recipeCellular}
          />
        ) : step === 2 ? (
          <Ingredientes
            setStep={setStep}
            step={step}
            saveData={continuar}
            setRecipeCellular={setIngredienteCellular}
            recipeCellular={ingredienteCellular}
          />
        ) : (
          <Pasos
            setStep={setStep}
            step={step}
            navigation={navigation}
            saveData={continuar}
            setRecipeCellular={setPasosCellular}
            recipeCellular={pasosCellular}
            item1={recipeCellular}
            item2={ingredienteCellular}
            item3={pasosCellular}
          />
        )}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default NewRecipes;
