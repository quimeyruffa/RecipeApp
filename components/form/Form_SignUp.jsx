import React, {  } from "react";
import { Pressable,Text, TextInput, View } from "react-native";
import form from "../../styles/style.form";
import styles from "../../styles/style.login";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Form_SignUp = ({ inputs, button, handleSubmit,value, handleChangeValue,  }) => {
 

  return (
    <KeyboardAwareScrollView  behavior="height">
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

         
            <Pressable
              style={[styles.button, form.button]}
              onPress={() => handleSubmit()}
            >
              <Text style={[styles.text, form.inputText]}>{button}</Text>
            </Pressable>
          
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Form_SignUp;
