import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  general:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flex:1
  },
    body: {
      flex: 1,
      backgroundColor: "#FF4B3A"
  },
  container: {

      justifyContent: "center",
      padding:5,
      flexDirection: "column",
    },
    tinyLogo: {
      position: "relative",
      top: 10,
      left: 30,
      width: 100,
      height: 100,
    },
    fontTitle:{
        fontWeight: "bold",
        fontSize:50,
        color:'#ffff',
        marginBottom:5
     
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
        letterSpacing: 0.25,
        color: '#FF4B3A',
        
      }
  });

export default styles;