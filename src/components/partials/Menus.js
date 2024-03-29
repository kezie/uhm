import React, {Fragment} from 'react'
import { useSelector } from 'react-redux';
import { Link, NavLink } from "react-router-dom";

const Menus = () => {

  const { userLocation } = useSelector((state)=> state.userLocation)

  return (
    <Fragment>
    <nav className="main-menu d-none d-xl-block">
      <ul>
        <li className="menu-item">
          { userLocation === "NG" ? <NavLink to="/" className='menu-li'>Home</NavLink> : <NavLink to="/global" className='menu-li'>Home</NavLink> }  
        </li>
        <li className="menu-item">
          <Link to="#" id="about-li">
            About Us
          </Link>
          <ul className="sub-menu">
            <li>
              <NavLink exact to="/story" className='about-us-li'  activeClassName="active">Our Story</NavLink>
            </li>
            <li>
              <NavLink to="/board" className='about-us-li' activeClassName="active">Board Members</NavLink>
            </li>
            <li>
              <NavLink to="/team" className='about-us-li' activeClassName="active">Our Team</NavLink>
            </li>
          </ul>
        </li>

        <li className="menu-item">
        { userLocation === "NG" ? (
          <>
          <Link to="#" id='service-li' >
            Our Services
          </Link>
          <ul className="sub-menu">
            <li className='menu-item'>
              <NavLink to="/insurance-plans" className='services-li' activeClassName="active">Private Health Insurance</NavLink>
            </li>
            <li className='menu-item'>
              <NavLink to="/social-health-insurance" className='services-li' activeClassName="active">Social Health Insurance</NavLink>
            </li>
          </ul>
          </>) : <NavLink to="/insurance-plans" className='menu-li' activeClassName="active">
            Our Services
          </NavLink>}
          
        </li>

        <li className="menu-item">
          <NavLink to="/providers" className='menu-li' activeClassName="active">
            List Of Providers
          </NavLink>
        </li>

        <li className="menu-item">
          <NavLink to="/news" className='menu-li' activeClassName="active">
            News/Events
          </NavLink>
        </li>

        <li className="menu-item">
          <NavLink to="/contact" className='menu-li' activeClassName="active">
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  </Fragment>
  )
}

export default Menus