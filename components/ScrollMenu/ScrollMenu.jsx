import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  SectionList,
  SafeAreaView,
  FlatList,
} from "react-native";
import NotiContext from "../../Context/notifications/NotiContext";
import Card from "../Card/Card";
import ListItem from "./ListItem";

const ScrollMenu = (props) => {
  const {press, setPress}= props;
  const { display_recipes } = useContext(NotiContext);

  useEffect(() => {}, [display_recipes]);

  const handlePress = (value, status) => {
    if(!status){
      setPress(value)
    }else{
      setPress('')
    }
  };
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
        <Card recipes={display_recipes} />
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
        text: "Vegetariano",
      },
      {
        key: "2",
        text: "Sushi",
      },

      {
        key: "3",
        text: "Postre",
      },
      {
        key: "4",
        text: "Pizza",
      },
      {
        key: "5",
        text: "Pasta",
      },
      {
        key: "6",
        text: "Hamburguesa",
      },
      {
        key: "7",
        text: "Asado",
      },
      {
        key: "8",
        text: "Americana",
      },
      
    ],
  },
];



const styles = StyleSheet.create({
  containerCard: {
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
