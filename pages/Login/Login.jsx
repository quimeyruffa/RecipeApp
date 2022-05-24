import React, { useState } from "react";
import form from "../../styles/style.form";
import { Image, View, Text, Pressable } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Form_SignIn from "../../components/form/Form_SignIn";
import axios from "axios";
import { useDispatch } from "react-redux";
import { TOKEN } from "../../src/redux/UserItems";

const Login = (props) => {
  const [tabs, setTabs] = useState(1);
  const [token, setToken] = useState();
  const [user, setUser] = useState({
    username:'',
    password:'',
  })
  const dispatch = useDispatch();

  const handleToken = (value) => dispatch({ type: TOKEN, payload: value });


  const handleChangeValue = (e, value) => {
    switch(value){
      case 'username':
        return setUser({...user, 'username':e})
      case 'password':
        return setUser({...user, 'password':e})
    }
  }

  const InputLogin = [
    { id: 1, label: "Alias", name:'username', secureTextEntry: false },
    { id: 2, label: "Password",name:'password', secureTextEntry: true },
  ];

  const InputRegister = [
    { id: 4, label: "Email Address", secureTextEntry: false },
    { id: 3, label: "Alias", secureTextEntry: false },
  ];

  const handleLogin = async () => {
    console.log(user)
    await axios
      .post("https://adapicooking.herokuapp.com/api/users/login/", user)
      .then((resp) => {
        handleToken(resp.data.token)
        
      })
      .catch((error) => {
        console.log(error);
      });
  };



  return (
    <KeyboardAwareScrollView style={form.container} behavior="height">
      <View className="container__form">
        <View className="header__form" style={[form.header, form.shadowProp]}>
          <Image
            style={form.logo}
            source={require("../../assets/img/logoWhite.png")}
          />
          <View style={form.tabsContainer}>
            <Pressable
              style={tabs === 1 ? form.tabSelect : form.tab}
              onPress={() => setTabs(1)}
            >
              <Text>Login</Text>
            </Pressable>
            <Pressable
              style={tabs === 2 ? form.tabSelect : form.tab}
              onPress={() => setTabs(2)}
            >
              <Text>Sign Up</Text>
            </Pressable>
          </View>
        </View>
        {tabs === 1 ? (
          <Form_SignIn
            inputs={InputLogin}
            navigation={props.navigation}
            button="Login"
            handleChangeValue={handleChangeValue}
            handleSubmit={handleLogin}
            value={user}
          />
        ) : (
          <Form_SignIn
            inputs={InputRegister}
            navigation={props.navigation}
            button="Register"
            handleChangeValue={handleChangeValue}
            handleSubmit={handleLogin}
            value={user}
          />
        )}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
