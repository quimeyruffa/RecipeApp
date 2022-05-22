import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "../components/BottomNavigation/Tab";
import FirstPage from "./FirstPage/FirstPage";
import Login from "./Login/Login";
import HomePage from "./Menu/Menu";
import { useEffect, useState } from "react";
const Stack = createNativeStackNavigator();
import { connect } from 'react-redux'

function Aux(props) {
 
  const { token } = props;
  
  useEffect(()=>{},[token])
  
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

const mapStateToProps = (state) =>{
  return {
    token: state.token
  }
}
export default connect(mapStateToProps)(Aux);