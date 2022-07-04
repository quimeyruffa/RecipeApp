import React, { useContext, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import form from "../../styles/style.form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "../../styles/style.login";
import axios from 'axios';
import NotiContext from "../../Context/notifications/NotiContext";

const ViewRecoverPassword = ({ }) => {
  const {handleRecoverPassword} = useContext(NotiContext)
  const [register, setRegister] = useState({
    password: "",
    code: "",
    email: "",
  });

  const InputRegister = [
    { id: 4, label: "Email Address", name: "email", secureTextEntry: false },
    { id: 6, label: "Password", name: "password", secureTextEntry: true },
    { id: 3, label: "Code", name: "code", secureTextEntry: false },
  ];
  const handleChangeValueRegister = (e, value) => {
    switch (value) {
      case "email":
        return setRegister({ ...register, email: e });
      case "password":
        return setRegister({ ...register, password: e });
      case "code":
        return setRegister({ ...register, code: e });
    };
  }

    return (
      <KeyboardAwareScrollView behavior="height">
        <View className="body__form" style={form.body}>
        <View
          className="container__formInput"
          style={form.container__formInput}
        >
          {InputRegister.map((item, index) => (
            <View key={index}>
              <Text style={form.text}>{item.label}</Text>
              <TextInput
                style={form.input}
                secureTextEntry={item.secureTextEntry}
                onChangeText={(e) => handleChangeValueRegister(e, item.name)}
                value={register[item.value]}
              />
            </View>
          ))}

         
            <Pressable
              style={[styles.button, form.button]}
              onPress={() => handleRecoverPassword(register)}
            >
              <Text style={[styles.text, form.inputText]}>Continuar</Text>
            </Pressable>
          
        </View>
      </View>
      </KeyboardAwareScrollView>
    );
  };

  export default ViewRecoverPassword;