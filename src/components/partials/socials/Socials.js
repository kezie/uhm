import React from 'react'
import { Link } from 'react-router-dom'
import { socials } from './Data'

const Socials = ({backgroundColor, text_light, style}) => {
  return (
    <ul className="social-link">
        {socials.map((social)=>(
            <li key={social.id} >
                <Link target="_blank" to={social.link} style={{backgroundColor: `${backgroundColor}, ${style}`}}>
                    <i className= {`${social.icon} ${text_light}`} />
                </Link>
            </li>
        ))}
    </ul>
  )
}

export default Socials