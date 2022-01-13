import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { allFavourites, changeStatusFavouritesFromServer } from '../../redux/ac/favouritesAC';
import { deleteRestFromServer } from '../../redux/ac/restaurantAC';
import styles from './style.module.css'


function Restaurant({ el }) {
  const dispatch = useDispatch();
  function allDisp(el){
    dispatch(changeStatusFavouritesFromServer(el.id))
    dispatch(allFavourites(el))
  }
  return (

    <div className="card my-3">
      <img src={el.url} className="card-img-top" alt={el.name} />
      <div className="d-flex align-items-center justify-content-between my-3">
        <h5 className="card-title my-2">{el.name}</h5>
        <button type="button" onClick={(e) =>  allDisp(el)}  className={styles.btnEditColor}>Add to favourites</button>
      </div>
      <form className={styles.ratingArea}>
        <input type="radio" id="star-5" name="rating" value="5" />
        <label htmlFor="star-5" title="Оценка «5»"></label>
        <input type="radio" id="star-4" name="rating" value="4" />
        <label htmlFor="star-4" title="Оценка «4»"></label>
        <input type="radio" id="star-3" name="rating" value="3" />
        <label htmlFor="star-3" title="Оценка «3»"></label>
        <input type="radio" id="star-2" name="rating" value="2" />
        <label htmlFor="star-2" title="Оценка «2»"></label>
        <input type="radio" id="star-1" name="rating" value="1" />
        <label htmlFor="star-1" title="Оценка «1»"></label>
      </form>
      <div className="d-flex align-items-center justify-content-between my-3 p-3">
        <Link to={`/restaurants/${el.id}`}>
          <button className="btn btn-success py-2">More details</button>
        </Link>
        <button type="button" onClick={(e) => dispatch(deleteRestFromServer(el.id))} className="btn btn-danger mx-2 my-1">Delete</button>
      </div>
    </div>
  )
}

export default Restaurant

