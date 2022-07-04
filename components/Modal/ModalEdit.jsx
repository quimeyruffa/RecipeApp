import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import NumericInput from 'react-native-numeric-input'

const IngredientesModalEdit = (props) => {
  const { modalVisible, setModalVisible, setDividir, dividir, setCantidades, cantidades } = props;
 

  const handleOnChangeValue = (value) =>{
    setDividir(false);
    if(value >= 1){

      setCantidades(value);
    }
  }

  
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
              <Text>Editar Porciones</Text>
            </View>

            <View style={styles.modalText}>
              <View style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                
              <Text>Dividir a la mitad las Porciones</Text>
              <Pressable
            
              onPress={() => setDividir(true)}
            >
              {dividir ? 
            <AntDesign name="checksquare" size={24} color="black" />
            :
            <AntDesign name="checksquareo" size={24} color="black" />
            }
            </Pressable>
                 </View>
           
            <Text>Definir cantidad de Porciones</Text>
            <NumericInput 
            onChange={handleOnChangeValue}
            value={cantidades}
          />
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

export default IngredientesModalEdit;
