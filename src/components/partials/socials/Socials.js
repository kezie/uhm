import React from 'react'
import { Link } from 'react-router-dom'
import { socials } from './Data'

const Socials = ({backgroundColor, text_light, style}) => {
  return (
    <ul className="social-link">
        {socials.map((social)=>(
            <li key={social.id} style={style}>
                <Link target="_blank" to={social.link} style={{backgroundColor: `${backgroundColor}`}}>
                    <i className= {`${social.icon} ${text_light}`} />
                </Link>
            </li>
        ))}
    </ul>
  )
}

export default Socials