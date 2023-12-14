import axios from 'axios';
import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [sent, setSent] = useState('')

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true)

        if(name === '' || email === '' || subject === '' || message === ''){
          setError('Please fill out all fields')
          setLoading(false)
          return;
        }
      
        const dataToSend = {
          name,
          email,
          subject,
          message,
      };

        const url = process.env.REACT_APP_CONTACT_FORM_API;
      
        try {
          const response = await axios.post(url, dataToSend);
      
          console.log(response.data);
          setName(''); setEmail('');setMessage(''); setSubject(''); setError('');
          setSent('Your message was sent successfully, we will contact you shortly.')
          
          setLoading(false)
          
      } catch (error) {
        console.error("Error submitting form:", error);
        setError('Please fill out all fields')
        // Handle error
          
      }finally{
        setLoading(false)
      };
    }

  return (
    <form
        onSubmit={handleSubmit}
        className="contact-form"
    >
        <div className="row">
        <div className="col-lg-6">
            <div className="form_group">
            <input
                type="text"
                className="form_control"
                placeholder="Full Name"
                name="your-name"
                required=""
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <i className="far fa-user" />
            </div>
        </div>
        <div className="col-lg-6">
            <div className="form_group">
            <input
                type="email"
                className="form_control"
                placeholder="Email Address"
                name="your-email"
                onChange={(e) => setEmail(e.target.value)}
                required=""
                value={email}
            />
            <i className="far fa-envelope" />
            </div>
        </div>
        <div className="col-lg-6">
            <div className="form_group">
            <input
                type="text"
                className="form_control"
                placeholder="subject"
                name="your-subject"
                onChange={(e) => setSubject(e.target.value)}
                required=""
                value={subject}
            />
            <i className="far fa-pencil" />
            </div>
        </div>
        
        <div className="col-lg-12">
            <div className="form_group">
            <textarea
                className="form_control"
                name="your-message"
                placeholder="Write your Message"
                onChange={(e) => setMessage(e.target.value)}
                defaultValue={""}
                value={message}
            />
            <i className="far fa-pencil" />
            </div>
        </div>
        <span className={error ? 'text-danger text-center' : 'text-success text-center'}>{error ? error:sent}</span>
        <div className="col-lg-12">
            <div className="form_group">
            <button className="main-btn btn-red">
                {isLoading ? 'Sending Message...' :'Send Message' }
            </button>
            </div>
        </div>
        </div>
    </form>
  )
}

export default Form