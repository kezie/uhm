import { Link } from "react-router-dom";
import { socials } from "./socials/Data";

const Newsletter = () => {
  return (
    <section className="newsletter-section black-bg pt-50 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-12">
            {/*=== Common Heading ===*/}
            <div className="section-title section-title-white wow fadeInLeft pt-30">
              <h2>Follow Us On Social Media To Feel Our Pulse</h2>
                <ul className="social-link">
                  {socials.map((social)=>(
                      <li key={social.id} className="ms-2">
                          <Link target="_blank" to={social.link}>
                              <i className= {`${social.icon} p-2 text-light`} style={{fontSize:'30px'}} />
                          </Link>
                      </li>
                  ))}
                </ul>
              <h6 className="text-light">The taste of the pudding is in the eating</h6>
            </div>
          </div>
          <div className="col-xl-5 col-lg-12">
            {/*=== Newsletter Form ===*/}
            <div className="newsletter-from wow fadeInRight">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <p>Subscribe to our Newsletter to stay updated with events and promotions</p>
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Enter Email Address"
                        name="email"
                      />
                      <i className="far fa-envelope" />
                    </div>
                    <div className="form_checkbox">
                      <input
                        type="checkbox"
                        name="checkbox"
                        id="check2"
                        defaultChecked=""
                      />
                      <label htmlFor="check2">
                        <span>
                          I agree to the <a href="#"> Privacy Policy</a>.
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-4 mt-2">
                    <div className="form-button float-lg-right">
                      <button className="main-btn btn-red">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Newsletter;
