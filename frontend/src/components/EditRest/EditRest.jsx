import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { editRestFromServer } from '../../redux/ac/restaurantAC';

function EditRest() {
  const [inputUrl, setInputUrl] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputDescr, setInputDescr] = useState('');
  const [restaurant, setRestaurants] = useState({})


  const { id } = useParams()
  const history = useHistory()
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`http://localhost:3001/restaurants/${id}/edit`)
      .then((res) => res.json())
      .then((dataFromServer) => {
        setRestaurants(dataFromServer)
        setInputUrl(dataFromServer.url)
        setInputName(dataFromServer.name)
        setInputDescr(dataFromServer.description)
      })
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputUrl.length && inputName.length && inputDescr.length) {
      dispatch(editRestFromServer(id, inputName, inputUrl, inputDescr));
      setInputUrl('')
      setInputName('')
      setInputDescr('')
    } else {
      alert('Enter form input please')
    }
  }

  const clickHandler = (e) => {
    e.preventDefault()

    history.go(-1)
  }
  return (
    <form onSubmit={submitHandler} className="d-flex align-items-center justify-content-center flex-column py-5">
      <h2 className="mb-4">Редактировать ресторан</h2>
      <div className="mb-3">
        <input type="url" value={inputUrl} onChange={(e) => setInputUrl(e.target.value)} placeholder="Enter our URL" className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <input type="text" value={inputName} onChange={(e) => setInputName(e.target.value)} placeholder="Enter our name" className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <input type="text" value={inputDescr} onChange={(e) => setInputDescr(e.target.value)} placeholder="Enter our description" className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <button type="submit" className="btn btn-primary mt-1">Submit</button>
      <a href="/" onClick={clickHandler} className="card-link my-3">Вернуться в ресторан</a>
    </form>
  )
}

export default EditRest
