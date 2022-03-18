import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: "#FF4B3A"
  },
  container: {
      marginTop:30,
      justifyContent: "center",
      padding:20,
      flexDirection: "column",
    },
    tinyLogo: {
      position: "relative",
      top: 40,
      left: 30,
      width: 100,
      height: 100,
    },
    fontTitle:{
        fontWeight: "bold",
        fontSize:50,
        color:'#ffff',
        marginBottom:20
     
    },
    button: {
        position:'relative',
        bottom:-30,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 32,
        borderRadius: 40,
        elevation: 3,
        backgroundColor: 'white',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#FF4B3A',
      },
    
  });

export default styles;