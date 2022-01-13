import React, { useEffect, useState } from 'react'
import Restaurant from '../Restaurant/Restaurant'
import { useDispatch, useSelector } from 'react-redux';
import { allRestaurantsFromServer } from '../../redux/ac/restaurantAC';
import Search from '../Search/Search';
import Loader from '../Loader/Loader';

function Main() {

  const { restaurants } = useSelector(state => state);
  const [loader, setLoader] = useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allRestaurantsFromServer())
      .then((res) => res)
      .then(() => {
        setLoader(false)
      })
  }, [])

  return (
    <>
      <Search />
      <div>
        {loader ? <Loader />
          : (
            <div className="d-flex align-items-center justify-content-between flex-wrap">
              {
                restaurants?.map((el) => (
                  <Restaurant el={el} key={el.id} />
                ))
              }
            </div>
          )}
      </div>
    </>
  )
}

export default Main
