import { TOKEN, RECIPES, UNIDADES, CREATE_RECIPE, USERNAME, MY_RECIPES, DETAILS_RECIPE, INGREDIENTES } from "../type";

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

    default:
      return state;
  }
};
