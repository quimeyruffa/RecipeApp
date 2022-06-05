import { StyleSheet, Dimensions } from "react-native";
const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      paddingTop: 20,
      paddingBottom: 90
    },
    card__Recipe: {
      padding: 20,
      width: SCREEN_WIDTH,
      backgroundColor: "white",
      borderRadius: 20,
      marginBottom: 20,
    },
    title: {
      fontWeight: "bold",
      fontSize: 15,
    },
    bottom_dots: {
      borderBottomWidth: 2,
      height: 50,
  
      fontSize: 18,
      borderBottomColor: "#FA4A0C",
      borderStyle: "dashed",
      paddingBottom: 0,
    },
    width:{
      width:250
    },
    rowIngredientes:{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        width:'90%'
    },
    row: {
      display: "flex",
      flexDirection: "row",
      width: 315,
      alignItems: "center",
      marginBottom: 20,
    },
    inputsSize: {
      marginLeft: 10,
      width: 180,
    },
    nextButton:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#FA4A0C',
      width:120,
      height:30,
      borderRadius:20,
      
    }
  });

  export default styles;