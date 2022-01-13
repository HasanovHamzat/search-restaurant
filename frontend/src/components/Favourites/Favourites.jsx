import React from 'react'
import { useSelector } from 'react-redux';

function Favourites() {

  const { favourites } = useSelector(state => state);

  return (
    <div className="d-flex align-items-center flex-wrap">
      {
        favourites.map((el) => (
            <div className="card mx-3">
            <img src={el.url} className="card-img-top" alt={el.name} />
            <div className="card-body">
              <h5 className="card-title">{el.name}</h5>
              <div className="d-flex align-items-center">
                <svg width="20" height="20">
                  <path d="M5 14.309a.749.749 0 01-.75-.75v-2.45a3.768 3.768 0 01-3-3.667V5.44A3.754 3.754 0 015 1.69h6a3.754 3.754 0 013.75 3.75v2A3.755 3.755 0 0111 11.19H8.924l-3.437 2.938a.75.75 0 01-.487.18zM5 3.191a2.253 2.253 0 00-2.25 2.25v2a2.259 2.259 0 002.215 2.25.792.792 0 01.785.75v1.49l2.41-2.06a.749.749 0 01.487-.18H11a2.253 2.253 0 002.25-2.25v-2A2.253 2.253 0 0011 3.19H5z">
                  </path>
                </svg>
                <p className="card-text mx-1">{el.description}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Favourites
