import { call, put, debounce } from 'redux-saga/effects'
import { allRestaurants } from '../ac/restaurantAC';
import { SEARCH_SAGA } from '../types/restaurantTypes';

async function getFilteredRest(url){
  const response = await fetch(url)
  return response.json()
}

function* searchSagaWorker(action) {
   try {
      const restaurants = yield call(getFilteredRest, action.payload);
      yield put(allRestaurants(restaurants));
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* searchSagaWatcher() {
  yield debounce(10000, SEARCH_SAGA , searchSagaWorker);
}

export default searchSagaWatcher;

