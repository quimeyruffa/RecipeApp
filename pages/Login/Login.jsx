import React from "react";
import form from "../../styles/style.form";
import { Image, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Form_SignIn from "../../components/form/Form_SignIn";

const Login = (props) => {
  
  return (
    <KeyboardAwareScrollView style={form.container} behavior="height">
      <View className="container__form">
        <View className="header__form" style={[form.header, form.shadowProp]}>
          <Image
            style={form.logo}
            source={require("../../assets/img/logoWhite.png")}
          />
        </View>

        <Form_SignIn navigation={props.navigation}/>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
