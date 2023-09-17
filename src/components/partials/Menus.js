import React, {Fragment} from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Menus = () => {

  const { location } = useSelector((state)=> state.location)

  return (
    <Fragment>
    <nav className="main-menu d-none d-xl-block">
      <ul>
        <li className="menu-item">
          { location === "NG" ? <Link to="/" className="active">Home</Link> : <Link to="/global" className="active">Home</Link> }  
        </li>
        <li className="menu-item">
          <Link to="#">
            About Us
          </Link>
          <ul className="sub-menu">
            <li>
              <Link to="/story">Our Story</Link>
            </li>
            <li>
              <Link to="/board">Board Members</Link>
            </li>
            <li>
              <Link to="/team">Our Team</Link>
            </li>
          </ul>
        </li>

        <li className="menu-item">
          <Link to="#">
            Our Services
          </Link>
          <ul className="sub-menu">
            <li className='menu-item'>
              <Link to="#">State Health Insurance</Link>
            </li>
            <li className='menu-item'>
              <Link to="/social-health-insurance">Social Health Insurance</Link>
              <ul className="sub-menu">
                <li>
                  <Link to="#">TISHIP</Link>
                </li>
                <li>
                  <Link to="#">GIFSHIP</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="menu-item">
          <Link to="/providers">
            Provider Network
          </Link>
        </li>

        <li className="menu-item">
          <Link to="/news">
            News/Events
          </Link>
        </li>

        <li className="menu-item">
          <Link to="/contact">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  </Fragment>
  )
}

export default Menus