import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SectionList,
  SafeAreaView,
  FlatList,
} from 'react-native';
import ListItem from './ListItem';



export default  ScrollMenu = () => {
const [select, setSelect] = useState(0);
const handleSelect = (value) => setSelect(value);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
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
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }

            return <ListItem item={item} handleSelect={handleSelect}/>;
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const SECTIONS = [
  {
    
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'Item text 1',
      },
      {
        key: '2',
        text: 'Item text 2',
      },

      {
        key: '3',
        text: 'Item text 3',
      },
      {
        key: '4',
        text: 'Item text 4',
    
      },
      {
        key: '5',
        text: 'Item text 5',
   
      },
    ],
  },
 
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#f4f4f4',
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
    color: 'black',
    marginTop: 5,
  },
});