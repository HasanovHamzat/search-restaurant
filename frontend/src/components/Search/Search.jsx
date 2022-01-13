import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getFilteredRestSaga } from '../../redux/ac/restaurantAC';

function Search() {

  const [inputName, setInputName] = useState('');
  const [inputReviews, setInputReviews] = useState('');
  const dispatch = useDispatch()

  useEffect(() => {
    const url = `http://localhost:3001/restaurants?_filter=${inputName}&_reviews=${inputReviews}`;
    dispatch(getFilteredRestSaga(url))
  }, [inputName, inputReviews])

  return (
    <form className="d-flex align-items-center justify-content-center flex-column">
      <h2 className="mb-4">Найти ресторан</h2>
      <div className="mb-3 d-flex align-items-center justify-content-center">
        <input type="text" value={inputName} onChange={(e) => setInputName(e.target.value)} placeholder="Search by name" className="form-control mx-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <input type="number" value={inputReviews} onChange={(e) => setInputReviews(e.target.value)} placeholder="Search by reviews" className="form-control mx-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
    </form>
  )
}

export default Search
