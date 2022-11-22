import React from 'react'
import { useNavigate } from "react-router";
const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Contact</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}

export default Contact