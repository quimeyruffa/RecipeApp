import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../../pages/Menu/Menu";
import Profile from "../../pages/Profile/Profile";

import { Text, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import NewRecipes from "../../pages/Recipes/NewRecipes";
("@react-navigation/native-stack");
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import MyRecipes from "../../pages/Recipes/MyRecipes";
import SaveRecipes from "../../pages/Recipes/SaveRecipes";
import AllRecipes from "../../pages/Recipes/AllRecipes";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        top: -40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        zIndex:20
      }}
    >
      {" "}
      {children}
    </Text>
  </TouchableOpacity>
);
const Tabs = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 0,
            elevation: 0,
            backgroundColor: "#F2F2F2",
            height: 90,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Entypo
                  name="home"
                  size={34}
                  style={{
                    color: focused ? "#FA4A0C" : "#C7C7C7",
                    backgroundColor: "transparent",
                    shadowColor: focused ? "red" : "transparent",
                    shadowOffset: {
                      width: 10,
                      height: 10,
                    },
                    borderRadius: 25,
                    shadowOpacity: 0.25,
                    shadowRadius: 3.5,
                    elevation: 5,
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="AllRecipes"
          component={AllRecipes}
          options={{
            tabBarButton: (props) => null, //like this
            tabBarVisible: false, //this is additional if you want to hide the whole bottom tab from the screen
          }}
        />
        <Tab.Screen
          name="Recipes"
          component={MyRecipes}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Feather
                  name="calendar"
                  size={34}
                  style={{
                    color: focused ? "#FA4A0C" : "#C7C7C7",
                    backgroundColor: "transparent",
                    shadowColor: focused ? "red" : "transparent",
                    shadowOffset: {
                      width: 10,
                      height: 10,
                    },
                    borderRadius: 25,
                    shadowOpacity: 0.25,
                    shadowRadius: 3.5,
                    elevation: 5,
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="NewRecipes"
          component={NewRecipes}
          options={{
            tabBarIcon: ({ focused }) => (
              <Text>
                <AntDesign
                  name="pluscircle"
                  size={60}
                  style={{
                    color: "#FA4A0C",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                />
              </Text>
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Feather
                  name="user"
                  size={34}
                  style={{
                    color: focused ? "#FA4A0C" : "#C7C7C7",
                    backgroundColor: "transparent",
                    shadowColor: focused ? "red" : "transparent",
                    shadowOffset: {
                      width: 10,
                      height: 10,
                    },
                    borderRadius: 25,
                    shadowOpacity: 0.25,
                    shadowRadius: 3.5,
                    elevation: 5,
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Save"
          component={SaveRecipes}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <FontAwesome
                  name={focused ? "bookmark" : "bookmark-o"}
                  size={34}
                  style={{
                    color: focused ? "#FA4A0C" : "#C7C7C7",
                    backgroundColor: "transparent",
                    shadowColor: focused ? "red" : "transparent",
                    shadowOffset: {
                      width: 10,
                      height: 10,
                    },
                    borderRadius: 25,
                    shadowOpacity: 0.25,
                    shadowRadius: 3.5,
                    elevation: 5,
                  }}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Tabs;
