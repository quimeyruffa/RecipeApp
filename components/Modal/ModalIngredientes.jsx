import React, { useContext, useState, useEffect } from "react";
import { TextInput, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import NotiContext from "../../Context/notifications/NotiContext";
import homePage from "../../styles/style.menu";
import Item from "./Item";

const IngredientesModal = (props) => {
  const { modalVisible, setModalVisible, setNoIngrediente, setIngredienteSearch } = props;
  const { Ingredientes } = useContext(NotiContext);
  const [ingrediente, setIngrediente] = useState("Search");

  useEffect(() => {
    console.log(Ingredientes);
  }, []);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalText}>
              <Text>Ingredientes</Text>
              <TextInput
                style={homePage.inputSearch}
                onChangeText={setIngrediente}
                value={ingrediente}
              />
              {Ingredientes?.filter(item => {
                if(ingrediente === 'Search' || ingrediente ===''){
                  return ;
                }else{
                  return item.nombre.includes(ingrediente)
                }
              }).map((item, index) => (
                <Item item={item} index={index} key={index} setIngredienteSearch={setIngredienteSearch} setNoIngrediente={setNoIngrediente}/>
              ))}
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default IngredientesModal;
