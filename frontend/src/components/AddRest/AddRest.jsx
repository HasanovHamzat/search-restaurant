import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNewRestFromServer } from '../../redux/ac/restaurantAC';
import { Link } from 'react-router-dom'

function AddRest() {
  const [inputUrl, setInputUrl] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputDescr, setInputDescr] = useState('');
  const dispatch = useDispatch();


  const submitHandler = (e) => {
    e.preventDefault();
    if (inputUrl.length && inputName.length && inputDescr.length) {
      dispatch(addNewRestFromServer(inputName, inputUrl, inputDescr));
      setInputUrl('')
      setInputName('')
      setInputDescr('')
    } else {
      alert('Enter form input please')
    }
  }
  return (
    <form onSubmit={submitHandler} className="d-flex align-items-center justify-content-center flex-column py-5">
      <h2 className="mb-4">Добавить ресторан</h2>
      <div className="mb-3">
        <input type="url" value={inputUrl} onChange={(e) => setInputUrl(e.target.value)} placeholder="Enter our URL" className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <input type="text" value={inputName} onChange={(e) => setInputName(e.target.value)} placeholder="Enter our name" className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <input type="text" value={inputDescr} onChange={(e) => setInputDescr(e.target.value)} placeholder="Enter our description" className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <button type="submit" className="btn btn-primary mt-1">Submit</button>
      <Link to={'/restaurants'}>
        <a href="/" className="card-link my-3">Вернуться в рестораны</a>
      </Link>
    </form>
  )
}

export default AddRest
