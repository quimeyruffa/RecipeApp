import React, { useContext, useState } from "react";
import form from "../../styles/style.form";
import { Image, View, Text, Pressable } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Form_SignIn from "../../components/form/Form_SignIn";
import { Feather } from "@expo/vector-icons";
import NotiContext from "../../Context/notifications/NotiContext";
import IngredientesModal from "../../components/Modal/Modal";
import Form_SignUp from "../../components/form/Form_SignUp";
import axios from 'axios';
const Login = (props) => {
  const [tabs, setTabs] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const { handleLogin, handleRegister } = useContext(NotiContext);
  const [loading, setLoading] = useState(false);
  const [label, setlabel] =useState("Error al logear el usuario")
  const [options, setOptions] = useState([])
 
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [register, setRegister] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
  });

  const handleChangeValue = (e, value) => {
    switch (value) {
      case "username":
        return setUser({ ...user, username: e });
      case "password":
        return setUser({ ...user, password: e });
    }
  };

  const handleChangeValueRegister = (e, value) => {
    switch (value) {
      case "username":
        return setRegister({ ...register, username: e });
      case "password":
        return setRegister({ ...register, password: e });
      case "email":
        return setRegister({ ...register, email: e });
      case "name":
        return setRegister({ ...register, name: e });
    }
  };

  

  const InputLogin = [
    { id: 1, label: "Alias", name: "username", secureTextEntry: false },
    { id: 2, label: "Password", name: "password", secureTextEntry: true },
  ];

  const InputRegister = [
    { id: 4, label: "Email Address", name: "email", secureTextEntry: false },
    { id: 3, label: "Alias", name: "username", secureTextEntry: false },
    { id: 5, label: "Name", name: "name", secureTextEntry: false },
    { id: 6, label: "Password", name: "password", secureTextEntry: true },
  ];

  const handleSubmit = async () => {
    setLoading(true);
    let res = await handleLogin(user);
    if (res) {
      setLoading(!res);
      setModalVisible(res);
    }
  };
  const handleSubmitRegister = async () => {
    setLoading(true);
    let res = await handleRegister(register);
    if (res !== false) {
      setOptions(res.options)
      setlabel(res.detail)
      setModalVisible(true);
    }
  };

  const handleResetPassword = async (email) => {
    console.log(email)
    await axios
      .post("https://adapicooking.herokuapp.com/api/users/reset/", {'email': email})
      .then((resp) => {
          console.log(resp)
      })
      .catch((error) => {
        console.log(error);
      });

 };
  return (
    <KeyboardAwareScrollView behavior="height">
      <IngredientesModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        message={label}
        options={options}
        setOption={handleChangeValueRegister}
      />
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
          loading ? (
            <View
              style={{
                with: "100%",
                height: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather name="loader" size={50} color="black" />
            </View>
          ) : (
            <Form_SignIn
              inputs={InputLogin}
              navigation={props.navigation}
              button="Login"
              handleChangeValue={handleChangeValue}
              handleSubmit={handleSubmit}
              value={user}
              handleResetPassword={handleResetPassword}
            />
          )
        ) : (
          <Form_SignUp
            inputs={InputRegister}
            navigation={props.navigation}
            button="Register"
            handleChangeValue={handleChangeValueRegister}
            handleSubmit={handleSubmitRegister}
            value={user}
          />
        )}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
