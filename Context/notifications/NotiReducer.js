import { TOKEN, RECIPES, UNIDADES, CREATE_RECIPE, USERNAME, MY_RECIPES, DETAILS_RECIPE, INGREDIENTES, CONNECTION, DISPLAY_RECIPES, DESCARGAS, FAVORITOS, DETAILSDOWLOAD } from "../type";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case TOKEN:
      return {
        ...state,
        token: payload,
      };
    case USERNAME:
      return { ...state, username: payload };
    case MY_RECIPES:
        return{...state, my_recipes:payload}
    case RECIPES:
      return {
        ...state,
        recipes: payload,
      };
    case DETAILS_RECIPE:
      return{
        ...state,
        details_recipe: payload,
      }
    case INGREDIENTES:
      return{...state, Ingredientes:payload}
    case UNIDADES:
      return {
        ...state,
        unidades: payload,
      };
    case CREATE_RECIPE:
      return {
        ...state,
        create_recipe: payload,
      };

    case CONNECTION:
      return { ...state, connection_type: payload}

    case DISPLAY_RECIPES :
      return {...state, display_recipes:payload}

    case DESCARGAS:
      return {...state, descargas:payload}

    case FAVORITOS:
      return{ ...state, favoritos:payload}

    case DETAILSDOWLOAD:
      return{ ...state, detailsDownload:payload}
    default:
      return state;
  }
};
