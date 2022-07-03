import { StyleSheet } from "react-native";
const homePage = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  inputContainer: {
    backgroundColor: "#EFEEEE",
    display: "flex",
    flexDirection: "row",
    alignSelf: "stretch",
    borderBottomStartRadius: 40,
    borderBottomRightRadius: 40,
    borderTopStartRadius: 40,
    borderTopRightRadius: 40,
    height: 35,
    alignItems: "center",
    margin: 5,
    paddingLeft: 10,
  },
  input: {
    width: "40%",
    backgroundColor: "transparent",
    display: "flex",
    paddingLeft: 10,

  },
  inputSearch: {
    width: 250,
    backgroundColor: "#FA4A0C",
    display: "flex",
    color:'white',
    paddingLeft: 10,
    borderBottomStartRadius: 40,
    borderBottomRightRadius: 40,
    borderTopStartRadius: 40,
    borderTopRightRadius: 40,

  },
  Containerselect:{
    width: '100%',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  select: {
    color: "#FA4A0C",
    backgroundColor: "white",
    borderColor: "#FA4A0C",
    borderWidth: 3,
    width: '100%',
    margin: 2,
    borderRadius: 30,
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderWidth: 0,
    width: 95,
    height: 95,
    margin:0,
    marginRight:25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding:5
  },
});

export default homePage;
