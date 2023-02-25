'use client'
// import Image from 'next/image';
import {Box, Image} from '@chakra-ui/react';
import React from 'react'

const Logo = () => {
  return (
    
    <Box display={{lg:'block'}} position={'absolute'} left={{base:'center',lg:'2em'}} h={{base:'50px',lg:'100px'}} w={{base:'50px',lg:'100px'}} top={{base:'2',lg:'6'}}>
        <Image  alt='logo' src='https://www.piaic.org/static/media/Logo.fb7de414.svg' />
    </Box>
    

  )
}

export default Logo;