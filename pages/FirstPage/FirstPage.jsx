import { StatusBar } from "expo-status-bar";
import {  Pressable, Text, View, Image } from "react-native";
import styles from "../../styles/style.login";
const FirstPage = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <Image
        style={styles.tinyLogo}
        source={require("../../assets/img/logo.png")}
      />
      <View style={styles.container}>
        <Text style={styles.fontTitle}>Food for Everyone</Text>
        <Image source={require("../../assets/img/Login.png")} />

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.text}>Get starteed</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default FirstPage;
