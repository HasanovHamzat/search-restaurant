import { ADD_COMMENTS, ADD_RESTAURANT, ALL_RESTAURANT, DELETE_RESTAURANT, EDIT_RESTAURANT } from "../types/restaurantTypes";



const restaurantReducer = (state = [], action) => {
  switch (action.type) {
    case ALL_RESTAURANT:
      return action.payload;
    case ADD_RESTAURANT:
      return [
        ...state,
        action.payload
      ]
    case DELETE_RESTAURANT:
      return state.filter(el => el.id !== action.payload);

    case ADD_COMMENTS:
      return [
        ...state,
        action.payload,
      ]
    case EDIT_RESTAURANT:
      return state.map(el => el.id === action.payload.id ? action.payload : el)
    default:
      return state;
  }
}

export default restaurantReducer;
