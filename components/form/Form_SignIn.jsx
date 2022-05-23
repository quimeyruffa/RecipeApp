import React from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import form from "../../styles/style.form";
import styles from "../../styles/style.login";

const Form_SignIn = ({ inputs, button, handleSubmit,email, handleEmail }) => {
 
  
  return (
    <ScrollView>
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
                onChangeText={handleEmail}
                value={email}
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
    </ScrollView>
  );
};

export default Form_SignIn;
