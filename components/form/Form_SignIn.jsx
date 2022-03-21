import React from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import form from "../../styles/style.form";
import styles from "../../styles/style.login";

const Form_SignIn = ({ navigation }) => {
  const [text, onChangeText] = React.useState("");
  return (
    <ScrollView>
      <View className="body__form" style={form.body}>
        <View
          className="container__formInput"
          style={form.container__formInput}
        >
          <View>
            <Text style={form.text}>Email Address</Text>
            <TextInput
              style={form.input}
              onChangeText={onChangeText}
              value={text}
            />
          </View>

          <View>
            <Text style={form.text}>Email Address</Text>
            <TextInput
              style={form.input}
              secureTextEntry={true}
              onChangeText={onChangeText}
              value={text}
            />
          </View>

          <Pressable
            style={[styles.button, form.button]}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={[styles.text, form.inputText]}>Login</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Form_SignIn;
