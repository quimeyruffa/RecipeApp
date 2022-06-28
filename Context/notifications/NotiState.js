import { useReducer } from "react";
import NotiReducer from "./NotiReducer";
import NotiContext from "./NotiContext";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { URL } from "../type";
const NotiState = (props) => {
  const initialState = {
    connection_type:'wifi',
    token: false,
    username:'',
    recipes:[],
    my_recipes:[],
    unidades:[],
    create_recipe:'',
    details_recipe:[],
    Ingredientes:[],
    descargas:[],
    favoritos:[],
  };

  const [state, dispatch] = useReducer(NotiReducer, initialState);
  
  const handleConnectiontype = async (value) =>{
    console.log('VALUE', value)
    dispatch({ type: 'CONNECTION', payload: value})
  }
  const handleAsyncStorage = async (value) => {
    try{
      console.log(JSON.stringify(value))
      await AsyncStorage.setItem('recetasDescargadas', JSON.stringify(value) )
    }catch(err){
      console.log(err)
    }
  }

  const handleGetAsyncStorage = async () => {
    try{
      const value = await AsyncStorage.getItem('@storage_Key')
      if(value !== null){

      }
    }catch (err) {
      console.log(err)
    }
  }

  const handleMyRecipes = async () => {
    
    await axios
    .get(`${URL}api/recetas/?user=${state.username}`, { headers: {"Authorization" : `Bearer ${state.token}`} })
    .then((resp) => {

      dispatch({ type: 'MY_RECIPES', payload: resp.data })
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const handleRegister = async (user) => {
    console.log(user)
    let res=false
    await axios
      .post("https://adapicooking.herokuapp.com/api/users/register/", user)
      .then((resp) => {

        dispatch({ type: 'USERNAME', payload:resp.data.username })
        dispatch({ type: 'TOKEN', payload: resp.data.token })
        
      })
      .catch((error) => {
        res=true
        console.log(error);
      });

      return res;
  }
  const handleLogin = async (user) => {
    let res=false
    await axios
      .post("https://adapicooking.herokuapp.com/api/users/login/", user)
      .then((resp) => {
        console.log(resp)
        dispatch({ type: 'USERNAME', payload:resp.data.username })
        dispatch({ type: 'TOKEN', payload: resp.data.token })
        
      })
      .catch((error) => {
        res=true
        console.log(error);
      });

      return res;
  };

  const handleCreateRecipe =  (recipe) => {

    dispatch({ type: 'CREATE_RECIPE', payload: recipe })
  }


  const handleGetRecipes = async () => {
    await axios.get('https://adapicooking.herokuapp.com/api/recetas/', { headers: {"Authorization" : `Bearer ${state.token}`} })
    .then(resp => {
    
      dispatch({ type: 'RECIPES', payload: resp.data })

    })
    .catch(error => {
      console.log(error);
    });
  }

  const getUnidades = async () => {
    await axios.get(`${URL}api/recetas/unidades/`, { headers: {"Authorization" : `Bearer ${state.token}`} })
    .then(resp => {
      
      dispatch({ type: 'UNIDADES', payload: resp.data })

    })
    .catch(error => {
      console.log(error);
    });
  }
  
  const handleDetailsRecipe =async (index) =>{
   
    await axios.get(`${URL}api/recetas/${index}`, { headers: {"Authorization" : `Bearer ${state.token}`} })
    .then(resp => {
     
    dispatch({ type: 'DETAILS_RECIPE', payload: resp.data })
  })
  .catch(error => {
    console.log(error);
  });

  }

  const handleGetIngredientes = async () =>{
    // {{URL}}api/recetas/ingredientes/

    await axios.get(`${URL}api/recetas/ingredientes/`, { headers: {"Authorization" : `Bearer ${state.token}`} })
    .then(resp => {
      
      dispatch({ type: 'INGREDIENTES', payload: resp.data })

    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <NotiContext.Provider
      value={{
        token: state.token,
        recipes:state.recipes,
        unidades:state.unidades,
        create_recipe:state.create_recipe,
        my_recipes:state.my_recipes,
        details_recipe:state.details_recipe,
        Ingredientes:state.Ingredientes,
        connection_type:state.connection_type,
        handleLogin,
        handleGetRecipes,
        getUnidades,
        handleCreateRecipe,
        handleMyRecipes,
        handleDetailsRecipe,
        handleGetIngredientes,
        handleRegister,
        handleConnectiontype,
        handleAsyncStorage
      }}
    >
      {props.children}
    </NotiContext.Provider>
  );
};

export default NotiState;
