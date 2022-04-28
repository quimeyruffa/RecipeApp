import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import TextCard from "../../components/Input/TextCard";
import * as ImagePicker from "expo-image-picker";
import AddImg from "../../assets/img/addImage.png";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AntDesign } from "@expo/vector-icons";
import PNG from '../../assets/img/addIcon.png';
import DropDownPickerModel from "../../components/DropDownPiker/DropDownPiker";
const NewRecipes = () => {
  const [cant, setCant] = useState(1);
  const [text, onChangeText] = useState("");
  const [img, setPic] = useState(null);

  const restCant = () => {
    if (cant == 1) {
      return null;
    } else {
      setCant(cant - 1);
    }
  };

  useEffect(async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Permission denied.");
      }
    }
  }, []);

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaType: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setPic(result.uri);
    }
  };

  return (
    <KeyboardAwareScrollView behavior="height">
      <View style={styles.container}>
        <View style={styles.card__Recipe}>
          <View>{/* Imagen */}</View>

          <View>
            <View>
              <View
                style={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                {img ? (
                  <Image
                    style={{ height: 200, width: 200, borderRadius: 200 }}
                    source={{ uri: img }}
                  />
                ) : null}
              </View>

              <View
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <Pressable onPress={() => PickImage()}>
                  <Image source={AddImg} style={{ height: 35, width: 35 }} />
                </Pressable>
              </View>
            </View>
            <View style={{ marginBottom: 10, marginTop: 10 }}>
              <Text style={styles.title}>Nombre</Text>
            </View>

            <TextCard
              multiline
              numberOfLines={4}
              style={styles.bottom_dots}
              onChangeText={onChangeText}
              value={text}
              maxLength={40}
            />
          </View>
          <View>
            <View style={{ marginBottom: 10, marginTop: 20 }}>
              <Text style={styles.title}>Description</Text>
            </View>

            <TextCard
              multiline
              numberOfLines={6}
              style={styles.bottom_dots}
              onChangeText={onChangeText}
              value={text}
              maxLength={140}
            />
          </View>

          <View></View>
        </View>

        <View style={styles.card__Recipe}>

          <View>
            <Image source={PNG} style={{height:35, width:35}}/>
          </View>

          <View style={styles.row}>
            <Text style={styles.title}>Ingrediente</Text>
            <TextCard
              multiline
              numberOfLines={4}
              style={[styles.bottom_dots, styles.inputsSize]}
              onChangeText={onChangeText}
              value={text}
              maxLength={40}
            />
          </View>

          <View style={styles.row}>
            <Text style={styles.title}>Cantidad</Text>
            <View>
              <View
                style={{
                  display: "flex",
                  width: 180,
                  justifyContent: "flex-end",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor: "#FA4A0C",
                    borderRadius: 10,
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 30,
                    width: 105,
                    
                  }}
                >
                  <Pressable
                    onPress={() => restCant()}
                    style={{
                      width: 35,
                    }}
                  >
                    <AntDesign name="minus" size={24} color="white" />
                  </Pressable>

                  <Text
                    style={{
                      backgroundColor: "transparent",
                      width: 35,
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    {cant}{" "}
                  </Text>

                  <Pressable
                    onPress={() => setCant(cant + 1)}
                    style={{
                      width: 35,

                    }}
                  >
                    <AntDesign name="plus" size={24} color="white" />
                  </Pressable>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.title}>Unidad</Text>
            
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default NewRecipes;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
  },
  card__Recipe: {
    padding: 20,
    width: 315,
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
});
