import { ADD_COMMENTS, ADD_RESTAURANT, ALL_RESTAURANT, DELETE_COMMENTS, DELETE_RESTAURANT, EDIT_RESTAURANT, SEARCH_SAGA } from "../types/restaurantTypes";




export const allRestaurants = (array) => ({
  type: ALL_RESTAURANT,
  payload: array
})



export const allRestaurantsFromServer = () => async (dispatch) => {
  const response = await fetch('http://localhost:3001/restaurants/')
  const dataFromServer = await response.json()
  dispatch(allRestaurants(dataFromServer))
}


export const addNewComments = (comment) => ({
  type: ADD_COMMENTS,
  payload: {
    comment,
  }
})
// // ------------------------------
export const addNewCommentsFromServer = (id, comment) => async (dispatch) => {
  const response = await fetch(`http://localhost:3001/restaurants/${id}/reviews/new`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      comment
    })
  })

  const data = await response.json()
  if (response.ok) {
    dispatch(addNewComments(data))
  }
}

export const addNewRest = (name, url, description) => ({
  type: ADD_RESTAURANT,
  payload: {
    id: Date.now(),
    name,
    url,
    description,
  }
})
export const addNewRestFromServer = (name, url, description) => async (dispatch) => {
  const response = await fetch('http://localhost:3001/restaurants/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: Date.now(),
      name,
      url,
      description,
      comment: []
    })
  })

  const data = await response.json()
  console.log(data);
  if (response.ok) {
    dispatch(addNewRest(data))
  }
}


export const editRest = (data) => ({
  type: EDIT_RESTAURANT,
  payload: data
})

export const editRestFromServer = (id, name, url, description) => async (dispatch) => {
  const response = await fetch(`http://localhost:3001/restaurants/${id}/edit/rest`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      url,
      description,
    })
  })

  const data = await response.json()
  if (response.ok) {
    dispatch(editRest(data))
  }
}


export const deleteRest = (id) => ({
  type: DELETE_RESTAURANT,
  payload: id
})

export const deleteRestFromServer = (id) => async (dispatch) => {

  const response = await fetch(`http://localhost:3001/restaurants/${id}`, { method: 'DELETE' })
  if (response.ok) {
    dispatch(deleteRest(id))
  }
}




// ----------------------------
export const deleteComment = (idREst, indexComm) => ({
  type: DELETE_COMMENTS,
  payload: {
    idREst,
    indexComm
  }
})


export const deleteCommentFromServer = (idRest, indexComm) => async (dispatch) => {
  console.log(idRest, indexComm);
  const response = await fetch(`http://localhost:3001/restaurants/comm/${idRest}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      indexComm
    })
  })
  if (response.ok) {
    let data = await response.json();
    console.log(data);
    dispatch(deleteComment(data))
  }

}

export const searchRestFromSrver = (url) => async (dispatch) => {
  const response = await fetch(url)
  const dataFromServer = await response.json()
  console.log(dataFromServer);
  dispatch(allRestaurants(dataFromServer))
}

// ----------------------------------------------------
// Saga
export const getFilteredRestSaga = (url) => ({
  type: SEARCH_SAGA,
  payload: url
})
