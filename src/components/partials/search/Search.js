import React, {useState} from 'react'

const Search = ({onSearch, placeholder, style, className}) => {
  const [search, setSearch] = useState('');

  const onInputChange = (value) => {
    setSearch(value);
    onSearch(value);
  }

  return (
    <input
        type='text'
        className={className}
        style={style}
        placeholder= {placeholder} 
        value={search}
        onChange={(e)=>onInputChange(e.target.value)}
    />
  )
}

export default Search