import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { addNewCommentsFromServer } from '../../redux/ac/restaurantAC';

function Form() {
  const [input, setInput] = useState('');

  const { id } = useParams()
  const history = useHistory()

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (input.length) {
      dispatch(addNewCommentsFromServer(id, input));
      setInput('')
    } else {
      alert('Enter comments input please')
    }
  }
  const clickHandler = (e) => {
    e.preventDefault()

    history.go(-1)
  }

  return (
      <form onSubmit={submitHandler} className="d-flex align-items-center justify-content-center flex-column py-5">
        <h2 className="mb-4">Оставьте комментарий</h2>
        <div className="mb-3">
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter our comments" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <button type="submit"  className="btn btn-primary mt-3">Submit</button>
        <a href="/" onClick={clickHandler} className="card-link my-3">Вернуться в ресторан</a>
      </form>
  )
}

export default Form
