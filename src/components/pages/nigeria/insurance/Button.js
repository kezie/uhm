import React from 'react'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <Link to="#" data-bs-toggle="modal" data-bs-target="#getQuoteModal">
        <a className="main-btn btn-black">Buy Plan</a>
    </Link>
  )
}

export default Button