import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useWindowSize from "../../../partials/useWindowSize";
import { stickyNav } from "../../../partials/utils";
import MobileMenu from "../../../partials/MobileMenu";
import Menus from "../../../partials/Menus"
import '../../../../styles/style.css'
import Socials from "../../../partials/socials/Socials";
import { useSelector } from "react-redux";

const Header = ({ singleMenus, handleLocationChange }) => {

  const { userLocation } = useSelector((state)=> state.userLocation)

  useEffect(() => {
    stickyNav({ singleMenus });
  }, []);

  const { width } = useWindowSize();

  useEffect(() => {
    const headers = document.querySelectorAll(".header-navigation");
    headers.forEach((header) => {
      if (width <= 1199) {
        header.classList.add("breakpoint-on");
      } else {
        header.classList.remove("breakpoint-on");
      }
      // toggle
      const toggleBtn = header.getElementsByClassName("navbar-toggler")[0],
        overlay = header.getElementsByClassName("nav-overlay")[0],
        menu = header.getElementsByClassName("nav-menu")[0];
        toggleBtn.addEventListener("click", () => {
          overlay.classList.add("active");
          menu.classList.add("menu-on");
        });
        overlay.addEventListener("click", () => {
          overlay.classList.remove("active");
          menu.classList.remove("menu-on");
        });
    });
  }, [width]);

  
    return(
    <>
    <header className="header-area transparent-header">
      {/*=== Header Top-bar ===*/}
      <div className="topbar-two">
        <div className="container-1420">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9">
              <div className="top-left">
                <span className="text-light">
                  <i className="far fa-envelope text-light " /> Email us :{" "}
                  <span>
                    <a className="text-light" href="mailto:info@ultimatehealthhmo.com">info@ultimatehealthhmo.com</a>
                  </span>
                </span>

              </div>
            </div>
            <div className="col-xl-4 col-lg-3">
              <div className="top-right float-lg-right d-flex align-items-center">
                <div className="me-3">
                  <Link to='#' data-bs-toggle="modal" data-bs-target="#loginModal">
                    <i className="fa fa-user"></i> Login
                  </Link>
                </div>


                <Socials/>

                <div className="btn-group" style={{cursor:'pointer'}}>
                  <span className= "dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    {userLocation === "NG" ? <> <img src="assets/images/logo/naija.png" width={25}/> <span style={{fontWeight:'bold'}}> NG</span> </> : <> <img src="assets/images/logo/global.png" width={20}/> <span style={{fontWeight:'bold'}}> Global</span> </> }
                  </span>
                  <ul className="dropdown-menu" style={{minWidth:"6rem"}}>
                    <li className="ms-2"><Link onClick={() => handleLocationChange('NG')} to="/"> <img src="assets/images/logo/naija.png" width={25}/> Nigeria</Link></li>
                    <li className="ms-2"><Link onClick={() => handleLocationChange('DG')} to="/global"><img src="assets/images/logo/global.png" width={20}/> Global</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=== Header Navigation ===*/}
      <div className="header-navigation navigation-default">
        <div className="nav-overlay" />
        <div className="container-1420">
          {/*=== Primary Menu ===*/}
          <div className="primary-menu">
            {/*=== Site Branding ===*/}
            <div className="site-branding">
            { userLocation === "NG" ? (<Link to="/">
                <span className="brand-logo">
                  <img src="assets/images/logo/logo-2.png" width={60} alt="Site Logo" />
                </span>
              </Link>) : (<Link to="/global">
                <span className="brand-logo">
                  <img src="assets/images/logo/logo-2.png" width={60} alt="Site Logo" />
                </span>
              </Link>)} 
              
            </div>
            {/*=== Nav Inner Menu ===*/}
            <div className="nav-inner-menu">
              <div className="nav-menu">
                {/*=== Mobile Logo ===*/}
                <div className="mobile-logo mb-30 d-block d-xl-none text-center">
                  <Link to="/">
                    <span className="brand-logo">
                      <img src="assets/images/logo/logo-2.png" width={60} alt="Site Logo" />
                    </span>
                  </Link>
                </div>
                  <Fragment>
                    <Menus />
                    <MobileMenu handleLocationChange={handleLocationChange}/>
                  </Fragment>
                <div className="menu-button pt-30">
                  <Link to="/insurance-plans">
                    <span className="main-btn btn-red">Get Quote</span>
                  </Link>
                </div>
              </div>
            </div>
            {/*=== Nav right item ===*/}
            <div className="nav-right-item d-flex align-items-center">
              <div className="call-button" style={{color:'#db812e'}}>
                <span>
                  <i className="fas fa-headset" style={{marginRight:'10px'}} />
                    <a style={{marginRight:'10px'}} href="tel:+23418890002">018890002</a>
                </span>
              </div>
              <div className="menu-button">
                <Link to="/insurance-plans">
                  <span className="main-btn btn-red">Get a Quote</span>
                </Link>
              </div>
              <div className="navbar-toggler">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Login Modal */}
    <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
      <section className="modal-dialog fintex-user-section pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="user-wrapper text-center">
                <div className="user-content modal-content">
                  <img src="assets/images/logo/logo-1.png" className="m-auto" alt="logo"width={60}/>
                  <h3 className="mb-20">Log In To Your Account</h3>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="user-form"
                  >
                    <div className="form_group">
                      <input
                        type="text"
                        className="form_control"
                        placeholder="User Name"
                        name="user"
                        required=""
                      />
                      <i className="fas fa-user" />
                    </div>
                    <div className="form_group">
                      <input
                        type="password"
                        className="form_control"
                        placeholder="Password"
                        name="password"
                        required=""
                      />
                      <i className="fas fa-lock" />
                    </div>
                    <div className="form_group">
                      <button className="main-btn btn-red">Log In</button>
                    </div>
                  </form>
                  <div className="mt-2">
                    Don't have an Account? <a href="#" className="text-success" data-bs-toggle="modal" data-bs-target="#registerModal">Sign Up</a>
                    <span type="button" className="ms-4 text-danger" data-bs-dismiss="modal" aria-label="Close">Cancel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/* Register Modal */}
    <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
      <section className=" modal-dialog fintex-user-section pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="user-wrapper text-center">
                <div className="user-content modal-content">
                  <img src="assets/images/logo/logo-1.png" className="m-auto" alt="logo"width={60}/>
                  <h3 className="mb-20">Create Your Account</h3>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="user-form"
                  >
                    <div className="form_group">
                      <input
                        type="text"
                        className="form_control"
                        placeholder="User Name"
                        name="user"
                        required=""
                      />
                      <i className="fas fa-user" />
                    </div>
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Email"
                        name="email"
                        required=""
                      />
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="form_group">
                      <input
                        type="password"
                        className="form_control"
                        placeholder="Password"
                        name="password"
                        required=""
                      />
                      <i className="fas fa-lock" />
                    </div>
                    <div className="form_group">
                      <input
                        type="password"
                        className="form_control"
                        placeholder="Confirm Password"
                        name="password"
                        required=""
                      />
                      <i className="fas fa-lock" />
                    </div>
                    <div className="form_group">
                      <button className="main-btn btn-red">
                        Create Account
                      </button>
                    </div>
                  </form>
                  <div className="mt-2">
                    Have an Account? <a href="#" className="text-success" data-bs-toggle="modal" data-bs-target="#loginModal">Login Now</a>
                    <span type="button" className="ms-4 text-danger" data-bs-dismiss="modal" aria-label="Close">Cancel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
)};

export default Header;



