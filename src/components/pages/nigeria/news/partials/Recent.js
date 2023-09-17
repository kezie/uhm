import React from 'react'
import { Link } from 'react-router-dom';

const Recent = ({latestPosts}) => {
  return (
    <ul className="recent-post-list">
        {latestPosts.map((post)=>{
            const limitedWords = post.title.rendered.slice(0, 20);
            const inputDateString = post.date
            const date = new Date(inputDateString);
    
            const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            ];
    
            const day = date.getDate().toString().padStart(2, '0');
            const month = months[date.getMonth()];

            return(
            <li className="post-thumbnail-content">
            {post._embedded && post._embedded['wp:featuredmedia'] && 
                <img
                src={post._embedded['wp:featuredmedia'][0].source_url}
                alt={post._embedded['wp:featuredmedia'][0].alt_text}
                />
            }
            
            <div className="post-title-date">
                <span className="posted-on">
                <i className="far fa-calendar-alt" />
                <a href="#">{day} {month} </a>
                </span>
                <h6>
                <Link to={`/${post.slug}`}>
                    <a>{limitedWords + "..."}</a>
                </Link>
                </h6>
            </div>
            </li>)
        })}
    </ul>
  )
}

export default Recent