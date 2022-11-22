import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { getMyUsersFetch, searchUsersFetch } from "../actions/index";

const Search = () => {
  // search for result - hooks
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const users = useSelector(state => state.getUserDataReducer.users);
  const isMounted = useRef(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    /* Debouncing effect */
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      let resultData = users.filter(obj => obj?.name?.toLowerCase().includes(search.toLowerCase()))
      dispatch(searchUsersFetch(resultData))
    }, 2000);
  }, [search])


  useEffect(() => {
    dispatch(getMyUsersFetch())
  }, [])

  return (
    <>
      <form className="search-form">
        <input className="search-input" type="text" placeholder="Search here" onChange={(e) => {
          setSearch(e.target.value)
        }} />
      </form>
    </>
  )
}

export default Search;