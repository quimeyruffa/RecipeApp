import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstPage from "./pages/FirstPage/FirstPage";
import Login from "./pages/Login/Login";
import HomePage from "./pages/Menu/Menu";


const Stack = createNativeStackNavigator();


export default function App() {
  

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={FirstPage} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Menu" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
