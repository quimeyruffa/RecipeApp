import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstPage from "./pages/FirstPage/FirstPage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";


const Stack = createNativeStackNavigator();


export default function App() {
  

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={FirstPage} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
