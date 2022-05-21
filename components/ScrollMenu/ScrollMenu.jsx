import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SectionList,
  SafeAreaView,
  FlatList,
} from "react-native";
import Card from "../Card/Card";
import ListItem from "./ListItem";

const ScrollMenu = (props) => {
  const [press, setPress] = useState("");

  const handlePress = (value) => setPress(value);
  return (
    <View style={props.state === 1 ? styles.container : styles.containerCard}>
      <StatusBar style="light" />
      {props.state === 1 ? (
        <SafeAreaView style={{ flex: 1 }}>
          <SectionList
            contentContainerStyle={{ paddingHorizontal: 10 }}
            stickySectionHeadersEnabled={false}
            sections={SECTIONS}
            renderSectionHeader={({ section }) => (
              <>
                {section.horizontal ? (
                  <FlatList
                    horizontal
                    data={section.data}
                    renderItem={({ item }) => (
                      <ListItem
                        item={item}
                        handlePress={handlePress}
                        press={press}
                      />
                    )}
                    showsHorizontalScrollIndicator={false}
                  />
                ) : null}
              </>
            )}
            renderItem={({ item, section }) => {
              if (section.horizontal) {
                return null;
              }

              return <ListItem key={item.key} item={item} />;
            }}
          />
        </SafeAreaView>
      ) : (
        <Card />
      )}
    </View>
  );
};
export default ScrollMenu;
const SECTIONS = [
  {
    horizontal: true,
    data: [
      {
        key: "1",
        text: "Ensalada",
      },
      {
        key: "2",
        text: "Carne",
      },

      {
        key: "3",
        text: "Salsa",
      },
      {
        key: "4",
        text: "Postre",
      },
      {
        key: "5",
        text: "Sopa",
      },
      {
        key: "6",
        text: "Bebida",
      },
    ],
  },
];

const styles = StyleSheet.create({
  containerCard:{
    height: 380,
  },
  container: {
    height: "6%",
  },
  sectionHeader: {
    fontWeight: "800",
    fontSize: 18,
    color: "#f4f4f4",
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: "black",
    marginTop: 5,
  },
});
