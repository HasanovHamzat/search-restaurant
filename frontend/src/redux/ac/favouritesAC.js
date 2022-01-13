import { ALL_FAVOURITES, CHANGE_STATUS_FAVOURITES } from "../types/favouritesTypes";

export const allFavourites = (obj) => ({
  type: ALL_FAVOURITES,
  payload: obj
})

export const changeStatusFavourites = (id) => ({
  type: CHANGE_STATUS_FAVOURITES,
  payload: id
})



export const changeStatusFavouritesFromServer = (id) => async (dispatch) => {
  const response = await fetch(`http://localhost:3001/restaurants/${id}`, { method: 'PATCH' })
  // const data = await response.json()
  if (response.status===200) {
    console.log(id);
    dispatch(changeStatusFavourites(id))
  }
}
