'use client'
import React from 'react'
import {Box} from '@chakra-ui/react';
import Image from 'next/image';
const HomeImage = () => {
  return (
    <Box>
        <Image height={'700'} width='500' src='https://www.piaic.org/static/media/president-png.5b5f05c1.png' alt='prisident' />
    </Box>
  )
}

export default HomeImage