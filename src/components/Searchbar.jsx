import React from 'react'
import { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import {IconButton,Paper} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
const Searchbar = () => {
  const [searchTerm, setsearchTerm] = useState("")
  const navigate = useNavigate();
  function submitHandler(e){
    e.preventDefault()
    if(searchTerm){
      navigate(`/search/${searchTerm}`)
    }
  setsearchTerm('')
  }
  return (
    <Paper
    component='form'
    onSubmit={submitHandler}
    sx={{
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
      borderRadius: 10,
    }}
    >
      <IconButton  type='submit'  sx={{p: '10px' ,color:'red'}}  aria-label='search'>
        <SearchIcon/>
      </IconButton>

      <input 
      type='text'
      name='search'
      value={searchTerm}
      onChange={(e)=>setsearchTerm(e.target.value)}
      autoComplete='off'
      autoFocus={true}
      className='outline-none text-gray-700'
      sx={{ml: 1, flex: 1}}
      placeholder='Search...'
      />
    </Paper>
  )
}

export default Searchbar