import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Socials from "./socials/Socials";

const MobileMenu = ({handleLocationChange}) => {

  const { userLocation } = useSelector((state)=> state.userLocation)
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const [open, setOpen] = useState(false);

  const activeMenuSet = (value) => setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) => value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
      setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };
  
  return (
    <Fragment>
      <nav className="main-menu d-block d-xl-none">
        <ul>
          
          <li className="menu-item">
            { userLocation === "NG" ? <Link to="/" className="active">Home</Link> : <Link to="/global" className="active">Home</Link> }  
          </li>

          <li className="menu-item has-children">
            <a href="#">About Us</a>
            <ul className="sub-menu" style={activeLi("about")}>
              <li>
                <Link to="/story">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/board">
                  Board Members
                </Link>
              </li>
              <li>
                <Link to="/team">
                  Our Team
                </Link>
              </li>
            </ul>
            <span
              className="dd-trigger"
              onClick={() => activeMenuSet("about")}
            >
              <i className="far fa-angle-down" />
            </span>
          </li>

          <li className="menu-item has-children">
          { userLocation === "NG" ? (
            <>
            <Link to="#">Our Services</Link>
            <ul className="sub-menu" style={activeLi("home")}>
              <li>
                <Link to="/insurance-plans">Private Health Insurance</Link>
              </li>
              <li className="has-children">
                <Link to="/social-health-insurance">Social Health Insurance</Link>
              </li>
            </ul>
            <span className="dd-trigger" onClick={() => activeMenuSet("home")}>
              <i className="far fa-angle-down" />
            </span>
            </> ) : <Link to="/insurance-plans"> Our Services </Link> }
          </li>

          <li className="menu-item">
            <Link to="/providers">
              List Of Providers
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

          <li className="menu-item">
            <Link to='#' data-bs-toggle="modal" data-bs-target="#loginModal">
              <i className="fa fa-user"></i> Login
            </Link>
          </li>

          <div className="btn-group" style={{cursor:'pointer'}}>
            <span className= "dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              {userLocation === "NG" ? <> <img src="assets/images/logo/naija.png" width={25}/> <span style={{fontWeight:'bold'}}> NG</span> </> : <> <img src="assets/images/logo/global.png" width={20}/> <span style={{fontWeight:'bold'}}> Global</span> </> }
            </span>
            <ul className="dropdown-menu" style={{minWidth:"7rem"}}>
              <li className="ms-2"><Link onClick={() => handleLocationChange('NG')} to="/"> <img src="assets/images/logo/naija.png" width={25}/> Nigeria</Link></li>
              <li className="ms-2"><Link onClick={() => handleLocationChange('DG')} to="/global"><img src="assets/images/logo/global.png" width={20}/> Global</Link></li>
            </ul>
          </div>

        </ul>
        
          {/* <Socials/> */}
        
      </nav>
    </Fragment>
  );
};
export default MobileMenu;
