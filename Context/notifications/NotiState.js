import { useReducer } from "react";
import NotiReducer from "./NotiReducer";
import NotiContext from "./NotiContext";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { URL } from "../type";
const NotiState = (props) => {
  const initialState = {
    connection_type: "",
    token: false,
    username: "",
    recipes: [],
    display_recipes:[],
    my_recipes: [],
    unidades: [],
    create_recipe: "",
    details_recipe: [],
    Ingredientes: [],
    descargas: [],
    favoritos: [],
  };

  const [state, dispatch] = useReducer(NotiReducer, initialState);

  const handleConnectiontype = async (value) => {
    dispatch({ type: "CONNECTION", payload: value });
  };
  const handleAsyncStorage = async (value) => {
    try {
      console.log(JSON.stringify(value));
      await AsyncStorage.setItem("recetasDescargadas", JSON.stringify(value));
    } catch (err) {
      console.log(err);
    }
  };

  const handleGetAsyncStorage = async () => {
    try {
      const value = await AsyncStorage.getItem("recetasDescargadas");
      if (value !== null) {
        let obj = JSON.parse(value);
        console.log(obj.pasos);
        handleCreateRecipes(obj.receta[0], obj);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCreateRecipes = async (recipe, obj) => {
    await axios
      .post(`${URL}api/recetas/`, recipe, {
        headers: { Authorization: `Bearer ${state.token}` },
      })
      .then((resp) => {
        if (obj.ingredientes !== []) {
          for (let i = 0; i < obj.ingredientes.length; i++) {
            let array = {
              cantidad: obj.ingredientes[i].cantidad,
              observaciones: "",
              receta: resp.data.id,
              ingrediente: obj.ingredientes[i].ingrediente,
              unidad: obj.ingredientes[i].unidad,
            };

            handleCreateIngredientes(array);
          }
        }

        if (obj.pasos !== []) {
          for (let i = 0; i < obj.pasos.length; i++) {
            let array = {
              receta: resp.data.id,
              nroPaso: obj.pasos[i].nroPaso,
              texto: obj.pasos[i].texto,
              imagen: obj.pasos[i].imagen,
            };

            handleCreateStep(array);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCreateIngredientes = async (ingredientes) => {
    await axios
      .post(`${URL}api/recetas/utilizados/`, ingredientes, {
        headers: { Authorization: `Bearer ${state.token}` },
      })
      .then(async (resp) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCreateStep = async (paso) => {
    await axios
      .post(`${URL}api/recetas/paso/`, paso, {
        headers: { Authorization: `Bearer ${state.token}` },
      })
      .then(async (resp) => {
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //HandleGetREcipeExists nombre=${}

  const handleMyRecipes = async () => {
    await axios
      .get(`${URL}api/recetas/?user=${state.username}`, {
        headers: { Authorization: `Bearer ${state.token}` },
      })
      .then((resp) => {
        dispatch({ type: "MY_RECIPES", payload: resp.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRegister = async (user) => {
    let res = false;
    await axios
      .post("https://adapicooking.herokuapp.com/api/users/register/", user)
      .then((resp) => {
        dispatch({ type: "USERNAME", payload: resp.data.username });
        dispatch({ type: "TOKEN", payload: resp.data.token });
      })
      .catch((error) => {
        res = true;
        console.log(error);
      });

    return res;
  };
  const handleLogin = async (user) => {
    let res = false;
    await axios
      .post("https://adapicooking.herokuapp.com/api/users/login/", user)
      .then((resp) => {
        console.log(resp);
        dispatch({ type: "USERNAME", payload: resp.data.username });
        dispatch({ type: "TOKEN", payload: resp.data.token });
      })
      .catch((error) => {
        res = true;
        console.log(error);
      });

    return res;
  };

  const handleCreateRecipe = (recipe) => {
    dispatch({ type: "CREATE_RECIPE", payload: recipe });
  };

  const handleFilterRecipe = async  (name = '', user = '', ingrediente = '', noIngrediente = '') => {
    console.log(name, user, ingrediente, noIngrediente);

    await axios
      .get(`${URL}api/recetas/?search=${name}&user=${user}&ingrediente=${ingrediente}&notingrediente=${noIngrediente}`, {
        headers: { Authorization: `Bearer ${state.token}` },
      })
      .then((resp) => {
        console.log(resp.data)
        dispatch({ type: "RECIPES", payload: resp.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const handleGetRecipes = async () => {
    await axios
      .get("https://adapicooking.herokuapp.com/api/recetas/", {
        headers: { Authorization: `Bearer ${state.token}` },
      })
      .then((resp) => {
        dispatch({ type: "RECIPES", payload: resp.data });
        dispatch({ type: "DISPLAY_RECIPES", payload: resp.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUnidades = async () => {
    await axios
      .get(`${URL}api/recetas/unidades/`, {
        headers: { Authorization: `Bearer ${state.token}` },
      })
      .then((resp) => {
        dispatch({ type: "UNIDADES", payload: resp.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDetailsRecipe = async (index) => {
    await axios
      .get(`${URL}api/recetas/${index}`, {
        headers: { Authorization: `Bearer ${state.token}` },
      })
      .then((resp) => {
        dispatch({ type: "DETAILS_RECIPE", payload: resp.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpload = (image, hook) =>{

    const data = new FormData();
    data.append('file', image)
    data.append('upload_preset', 'dev_setups')
    data.append("cloud_name", 'dv8hvjcim')
    fetch("https://api.cloudinary.com/v1_1/dv8hvjcim/image/upload",{
      method:'post',
      body:data
    }).then(res=>res.json())
    .then(data=>{
      hook(data.url)
    })
  }
  const handleGetIngredientes = async () => {
    await axios
      .get(`${URL}api/recetas/ingredientes/`, {
        headers: { Authorization: `Bearer ${state.token}` },
      })
      .then((resp) => {
        dispatch({ type: "INGREDIENTES", payload: resp.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <NotiContext.Provider
      value={{
        token: state.token,
        recipes: state.recipes,
        unidades: state.unidades,
        create_recipe: state.create_recipe,
        my_recipes: state.my_recipes,
        details_recipe: state.details_recipe,
        Ingredientes: state.Ingredientes,
        connection_type: state.connection_type,
        display_recipes:state.display_recipes,
        handleLogin,
        handleGetRecipes,
        getUnidades,
        handleCreateRecipe,
        handleMyRecipes,
        handleDetailsRecipe,
        handleGetIngredientes,
        handleRegister,
        handleConnectiontype,
        handleAsyncStorage,
        handleGetAsyncStorage,
        handleUpload,
        handleFilterRecipe
      }}
    >
      {props.children}
    </NotiContext.Provider>
  );
};

export default NotiState;
