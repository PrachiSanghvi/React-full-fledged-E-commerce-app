import React from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

const User = () => {
  let param = useParams();
  let {name} = param;
  return (
    <div className="user-page-wrapper">
     <div>
        <ul>
        <li><NavLink to="/User/">Back to user data</NavLink></li>
        <li><NavLink to="/User/prachi">Prachi</NavLink></li>
        <li><NavLink to="/User/prakruti">Prakruti</NavLink></li>
      </ul>
    </div>
    {name ? <div>{name}'s page</div>:<div>Select User</div>}
    </div>
  )
}

export default User