import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "../components/BottomNavigation/Tab";
import FirstPage from "./FirstPage/FirstPage";
import Login from "./Login/Login";
import HomePage from "./Menu/Menu";
import { useContext, useEffect } from "react";
import NotiContext from "../Context/notifications/NotiContext";
const Stack = createNativeStackNavigator();
import 'react-native-gesture-handler';

function Aux() {
 
  const { token } = useContext(NotiContext);
  useEffect(()=>{},[token])
  
  return (
      <>
      {token ? (
          <NavigationContainer>
            <Tabs />
          </NavigationContainer>
      ) : (
        <>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={FirstPage} />
            {/* useState change token on */}
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Menu" component={HomePage} />
          </Stack.Navigator>
        </NavigationContainer>
        
        </>
      )}
      </>


  );
}


export default Aux;