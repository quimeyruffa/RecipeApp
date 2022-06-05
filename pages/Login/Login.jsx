import React, { useContext, useState } from "react";
import form from "../../styles/style.form";
import { Image, View, Text, Pressable } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Form_SignIn from "../../components/form/Form_SignIn";
import { Feather } from '@expo/vector-icons';
import NotiContext from "../../Context/notifications/NotiContext";
import IngredientesModal from "../../components/Modal/Modal";

const Login = (props) => {
  const [tabs, setTabs] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const {handleLogin} = useContext(NotiContext)
  const [loading, setLoading]= useState(false)
  const [user, setUser] = useState({
    username:'',
    password:'',
  })
  


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

  const handleSubmit = async () => {
    setLoading(true)
    let res = await handleLogin(user)
    if(res){
      setLoading(!res)
      setModalVisible(res)
    }
  };



  return (
    <KeyboardAwareScrollView style={form.container} behavior="height">
      <IngredientesModal modalVisible={modalVisible} setModalVisible={setModalVisible} message="Error al logear el usuario" />
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
          (loading ?
            <View style={{with:'100%',height:200, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Feather name="loader" size={50} color="black" />
            </View>
              :
            <Form_SignIn
              inputs={InputLogin}
              navigation={props.navigation}
              button="Login"
              handleChangeValue={handleChangeValue}
              handleSubmit={handleSubmit}
              value={user}
            />
          )
        ) : (
          <Form_SignIn
            inputs={InputRegister}
            navigation={props.navigation}
            button="Register"
            handleChangeValue={handleChangeValue}
            handleSubmit={handleSubmit}
            value={user}
          />
        )}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
