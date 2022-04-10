import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Perfil</Text>
      <View style={styles.section}>
        <Text style={{ fontSize: 17 }}>Detalles personales</Text>
        <Text style={{ fontSize: 17, color: "#FA4A0C" }}>Editar</Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <View style={styles.card}>
          <View style={styles.containerImg}>
            <Image
              style={styles.img}
              source={require("../../assets/img/profile.png")}
            />
          </View>
          <View style={styles.containerData}>
            <Text
              style={{ fontSize: 17, fontWeight: "bold", fontStyle: "italic" }}
            >
              Marvis Ighedosa
            </Text>
            <Text style={styles.data}>Dosamarvis@gmail.com</Text>
            <Text  style={styles.data}>+234 9011039271</Text>
            <Text  style={styles.data}>
              No 15 uti street off ovie palace road effurun delta state
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontStyle: "italic",
    marginTop: 20,
    marginLeft: 10,
  },
  section: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  card: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    width: 374,
    height: 197,
    borderRadius: 20,
  },
  img: {
    height: 100,
    width: 91,
    borderRadius: 20,
  },
  containerImg: {
    width: "40%",

    paddingTop: 15,
    paddingLeft: 15,
  },
  containerData: {
    flex: 5,
    display: "flex",

    paddingTop: 15,
  },
  data: {
    fontSize: 15,
    color:'#9F9F9F',
    marginTop:5,
    padding:1,
    borderTopWidth:0.5
  },
});
