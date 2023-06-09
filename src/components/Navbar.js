import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx= {{ gap: {sm: '122px', xs: '15px'}, mt : {sm: '32px', xs: '20px'}, justifyContent: 'none'}}
      px="20px"
    >
      <Link to="/">
        <img src={Logo} alt='Logo' className='logo'/>
      </Link>
      <Stack
        direction="row"
        sx={{
          gap: {sm: '40px', xs: '15px'}
        }}
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to='/' className='link'>Home</Link>
        <a href='/' onClick={() => window.scrollTo( {top: 1800, left: 100, behavior: 'smooth'})}>Excercises</a>
        <a href='/' onClick={() => window.scrollTo( {top: 1800, left: 100, behavior: 'smooth'})}>Body Calculator</a>
      </Stack>
    </Stack>
  )
}

export default Navbar