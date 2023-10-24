import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <div className='my-5 text-center'>
      <Spinner animation='grow' role='status'>
        <span className='visually-hidden'></span>
      </Spinner>
    </div>
  )
}

export default Loader