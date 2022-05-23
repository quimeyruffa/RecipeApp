export const TOKEN = "TOKEN";
export const RECIPES = "RECIPES";

const INITIAL_STATE = {
  recipes: [],
  token: true,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOKEN:
      //return new state
      return state.token = action.payload;

    case RECIPES:
      return state.recipes = action.payload;

    default:
      return state;
  }
};



export default userReducer;
