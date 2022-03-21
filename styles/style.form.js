import { StyleSheet } from "react-native";
const form = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  header: {
    height: 300,
    backgroundColor: "white",
    borderBottomStartRadius: 40,
    borderBottomRightRadius: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.4,
    shadowRadius: 11.14,

    elevation: 17,
  },
  logo: {
    width: 150,
    height: 150,
  },
  input: {
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    height: 60,
    marginBottom:20
  },
  container__formInput: {
    width: 300,
  },
  body: {
    alignItems: "center",
    paddingTop: 90,
    height:400,
  },
  button: {
      backgroundColor:"#FA4A0C",
  },
  inputText: {
      color: "#FFFFFF"
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    opacity: 0.4,
  },
});

export default form;
