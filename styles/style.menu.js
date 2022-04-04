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
    height: 50,
    alignItems: "center",
    margin: 15,
    paddingLeft: 10,
  },
  input: {
    width: "100%",
    backgroundColor: "transparent",
    display: "flex",
    paddingRight: 50,
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
    height: 45,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    color: "#FA4A0C",
    backgroundColor: "white",
    borderColor: "#FA4A0C",
    borderWidth: 3,
    width: "40%",
    margin: 10,
    borderRadius: 30,
    height: 45,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default homePage;
