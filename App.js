import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./components/BottomNavigation/Tab";
import FirstPage from "./pages/FirstPage/FirstPage";
import Login from "./pages/Login/Login";
import HomePage from "./pages/Menu/Menu";
import { useState } from "react";
const Stack = createNativeStackNavigator();

export default function App() {
  const [token, setToken] = useState(false);

  return (
    <>
      {token ? (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={FirstPage} />
            {/* useState change token on */}
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Menu" component={HomePage} />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <>
          <NavigationContainer>
            <Tabs />
          </NavigationContainer>
        
        </>
      )}
    </>
  );
}
