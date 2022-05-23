import React from 'react'
import {
    SectionList,
    SafeAreaView,
    FlatList
  } from "react-native";
import CardItem from './CardItem';

const Card = (props) => {
  const {recipes} = props;

  // THISSS
    
  return (
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
                      <>
                     
                      <CardItem
                        item={item}
                        
                      />
                      </>
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

              return <>
              
              <CardItem key={item.key} item={item} />;
              </>
            }}
          />
        </SafeAreaView>
  )
}

export default Card;

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