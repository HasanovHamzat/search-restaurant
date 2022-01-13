import { ALL_FAVOURITES, CHANGE_STATUS_FAVOURITES } from "../types/favouritesTypes";

const favouritesReducer = (state = [], action) => {
  switch (action.type) {
    case ALL_FAVOURITES:
      return [...state,
      action.payload
      ]
    case CHANGE_STATUS_FAVOURITES:
      return state.map(el => {
        if (el.id === action.payload) {
          return {
            ...el,
            status: !el.status,
          }
        }
        return el
      })
    default:
      return state;
  }
}

export default favouritesReducer;
