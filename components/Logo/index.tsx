'use client'
import Image from 'next/image';
import {Box} from '@chakra-ui/react';
import React from 'react'

const Logo = () => {
  return (
    
    <Box position={'absolute'} left='100px' border='2px'>
        <Image height={'100'} width='100' alt='logo' src='https://www.piaic.org/static/media/Logo.fb7de414.svg' />
    </Box>
    

  )
}

export default Logo;