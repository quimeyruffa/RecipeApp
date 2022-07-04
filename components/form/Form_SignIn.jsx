import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import form from "../../styles/style.form";
import styles from "../../styles/style.login";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Ionicons } from '@expo/vector-icons';
import ViewRecoverPassword from "./ViewRecoverPassword";
const Form_SignIn = ({ inputs, button, handleSubmit, value, handleChangeValue,handleResetPassword }) => {

  const [showInput, setShowInput] = useState(false)
  const [email, setEmail] = useState('');
  const [viewRecover, setViewRecover] = useState(true)
  const handleSetEmail = async () =>{
    if(email !== '') {

      await handleResetPassword(email)
      setViewRecover(false)
    }
  }
  return (
    <KeyboardAwareScrollView behavior="height">
      {viewRecover ?
      <View className="body__form" style={form.body}>
        <View
          className="container__formInput"
          style={form.container__formInput}
        >
          {inputs.map((item) => (
            <View key={item.id}>
              <Text style={form.text}>{item.label}</Text>
              <TextInput
                style={form.input}
                secureTextEntry={item.secureTextEntry}
                onChangeText={(e) => handleChangeValue(e, item.name)}
                value={value[item.value]}
              />
            </View>
          ))}


          {showInput &&
            <View >
              <Text style={form.text}>Ingrese su email para recibir un codido de 4 digitos</Text>
              <TextInput
                style={form.input}
                secureTextEntry={false}
                onChangeText={(e) => setEmail(e)}
                value={email}
              />
              <Text style={form.text}>Enviar</Text>
              <Ionicons name="ios-send" size={24} color="black" onPress={handleSetEmail} />
            </View>
          }
          <Pressable

            onPress={() => setShowInput(true)}
          >
            <Text style={{ color: 'black' }}>Forgot Password?</Text>
          </Pressable>

          <Pressable
            style={[styles.button, form.button]}
            onPress={() => handleSubmit()}
          >
            <Text style={[styles.text, form.inputText]}>{button}</Text>
          </Pressable>

        </View>
      </View>
      :
      <ViewRecoverPassword />
      }
    </KeyboardAwareScrollView>
  );
};

export default Form_SignIn;
