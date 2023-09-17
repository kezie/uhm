import React, { useEffect } from 'react'

const Categories = ({categoryItems}) => {
  return (
    <ul className="category-nav">
        {categoryItems.map((category)=>(
            <li key={category.name}>
            <a href="#">
                {category.name} <span className="number">{category.count}</span>
            </a>
            </li>
        ))}                    
    </ul>
  )
}

export default Categories