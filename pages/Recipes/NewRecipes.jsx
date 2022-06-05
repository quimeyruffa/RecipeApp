import { View } from "react-native";
import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import IngredientesModal from "../../components/Modal/Modal";
import styles from "../../styles/style.recipe";
import Ingredientes from "./NewRecipes/Ingredientes";
import Pasos from "./NewRecipes/Pasos";
import Receta from "./NewRecipes/Receta";
const NewRecipes = (props) => {
  const [step, setStep] = useState(1);
  const {navigation} = props;
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

  

  return (
    <KeyboardAwareScrollView behavior="height">
      <IngredientesModal
        modalVisible={showMessage}
        setModalVisible={setShowMessage}
        message="La receta ya existe, por favor elija otro nombre"
      />
      
      <View style={styles.container}>
        {step === 1 ? <Receta setShowMessage={setShowMessage} setStep={setStep} step={step}/> : step === 2 ? <Ingredientes setStep={setStep} step={step}/> : <Pasos setStep={setStep} step={step} navigation={navigation}/>}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default NewRecipes;
