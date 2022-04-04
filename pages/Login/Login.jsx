import React, { useState } from "react";
import form from "../../styles/style.form";
import { Image, View, Text, Pressable } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Form_SignIn from "../../components/form/Form_SignIn";

const Login = (props) => {
  const [tabs, setTabs] = useState(1);

  const InputLogin = [
    { id: 1, label: "Email Address", secureTextEntry: false },
    { id: 2, label: "Password", secureTextEntry: true },
  ];

  const InputRegister = [
    { id: 4, label: "Email Address", secureTextEntry: false },
    { id: 3, label: "Alias", secureTextEntry: false },
  ];
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
          <Form_SignIn inputs={InputLogin} navigation={props.navigation} button='Login' />
        ) : (
          <Form_SignIn inputs={InputRegister} navigation={props.navigation} button='Register' />
        )}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
