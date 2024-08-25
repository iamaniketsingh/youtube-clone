import React from 'react'
import { logo } from '../utils/constants'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'
const Navbar = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="space-between"
      alignItems="center"
      p={2}
      elevation={2}
      sx={{ backgroundColor: '#212121',borderBottom: '1px solid #3d3d3d' }}
    >
        <Link to="/">
          <img src={logo} alt="Logo" height={45} width={65} />
        </Link>
      <Searchbar/>
    </Stack>
  )
}

export default Navbar