import React from 'react'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <>
      <Link to="/insurance-calculator" >
          <a className="main-btn btn-black">Buy Plan</a>
      </Link>
      <Link to="/insurance-plans" className='ms-3'>
          <a className="main-btn btn-black">Compare Plans</a>
      </Link>
    </>
  )
}

export default Button