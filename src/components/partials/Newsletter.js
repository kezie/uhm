import { Link } from "react-router-dom";
import { socials } from "./socials/Data";
import { useState } from "react";
import axios from "axios";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (email === '') {
        setError('Please enter your email address');
        setLoading(false);
        return;
    }

    const url = process.env.REACT_APP_SUBSCRIPTIONS_API;

    const submit_hubspot_form = async (email) => {
        const portalId = process.env.REACT_APP_HUBSPOT_PORTAL_ID; // Replace with your HubSpot portal ID
        const formGuid = 'a0ed1afe-d436-4110-8ffa-05a6e1cfdd5f'; // Replace with your HubSpot form GUID
      
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
      
        const response = await axios.post(
          `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
          {
            portalId,
            formGuid,
            fields: [
              { name: 'email', value: email },
            ],
          },
          config
        );
      
        return response;
      };

    try {
        await axios.post(url, {email});

        await submit_hubspot_form(email);

        setEmail('');
        setError('')
        setLoading(false);
        setSubmitMessage('Thank you for subscribing.');


    } catch (error) {
        console.error("Error submitting form:", error);
        setError('Error submitting form, please try again');
        setLoading(false);
        // Handle error
    }
};

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
              <form onSubmit={handleSubmit}>
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <p>Subscribe to our Newsletter to stay updated with events and promotions</p>
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Enter Email Address"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <i className="far fa-envelope" />
                    </div>
                  </div>
                  <p className='text-light'>{error ? error : submitMessage}</p>
                  <div className="col-lg-4 mt-2">
                    <div className="form-button float-lg-right">
                    <button className="main-btn btn-red">
                        {loading ? 'Subscribing...' : 'Subscribe'} 
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
