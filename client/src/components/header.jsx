import React from 'react'
import { Link } from 'react-router-dom'

function header() {
  return (
    <nav>
      <div className="container nav_container">
        <Link to='/' className='nav_logo'>
          <img src="" alt="" />
        </Link>
      </div>
    </nav>
  )
}

export default header
