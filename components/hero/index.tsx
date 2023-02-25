'use client'
import React from 'react'
import { Image, Box, ChakraProvider, Heading, Flex, Text, Button, HStack, VStack } from '@chakra-ui/react';
import Link from 'next/link';
// import Image from 'next/image';
const Hero = () => {
  return (
    <ChakraProvider>
      <Flex justifyContent={{md:'space-between'}} direction={{base:'column',sm:'row'}} pt='90px'>
        <Box mt={{base:'2em',sm:'8em',md:'12'}} ml={{base:'70px',lg:'100px'}} >
          <Image height={{sm:'50vh',md:'85vh'}} width={{ base: '64vw', sm: '40vw', md: '40vw', lg: '34vw', xl: '28vw', '2xl': '25vw' }} src='https://www.piaic.org/static/media/president-png.5b5f05c1.png' alt='prisident' />
        </Box>
        <Box mt={{base:'8',sm:'6em',md:'28'}} textAlign={'left'} w={{base:'100vw',md:'50vw'}} pl={{base:'10',sm:'10'}}>
          <Heading fontSize={{base:'30px',sm:'2xl',md:'3xl',lg:'4xl',xl:'5xl'}} fontWeight={{base:'semibold',md:'semibold'}} color='green.900'>
            Presidential Initiative
          </Heading>
          <Text fontSize={{base:'xl',sm:'xl',md:'xl',lg:'3xl'}} color='green.600' fontWeight='medium' display='relative' bottom='1em'>
            for Artificial Intelligence & Computing
          </Text>
          <Text fontSize={{base:'14px',sm:'12px',md:'14px',lg:'lg'}} color='green.900' fontWeight={{md:'semibold'}} textAlign='left' mt={{base:'5',sm:'30'}} w={{base:'80vw',sm:'46vw'}}>
            The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies
            . Experts are calling this the 4th industrial revolution. We want Pakistan to become a global
            hub for AI, data science, cloud native computing, edge computing,
            blockchain, augmented reality, and internet of things.
          </Text>
          <HStack mt='4' spacing='10'> 

            <Button bg=' linear-gradient(270deg,#08d88d,#0eb5a3)' fontWeight='semibold' w={{base:'28vw',sm:'18vw',md:'15vw',lg:'12vw'}} ml={{md:'0',lg:'0'}} borderRadius='8px' fontSize={{base:'md',md:'xl'}} my={{base:'4',sm:'2',md:'4',xl:'6'}} h={{base:'40px',md:'50px  '}}>Apply Now</Button>
            {/* <Button borderRadius='full' _hover={{"background": 'linear-gradient(270deg,#08d88d,#0eb5a3)'}} fontSize='lg' py='6'>How It Works</Button> */}
            <VStack spacing='0'>

              <Text fontWeight='extrabold' fontSize={{base:'28px',sm:'27px',md:'30px',lg:'37px'}} color='green.800'>
                100K
              </Text>
              <Text fontSize={{base:'10px',sm:'8px',md:'10px'}} mb='80px' fontWeight='bold' color='green.800' position={'relative'} bottom='2'>Applications</Text>
            </VStack>
          </HStack>
        </Box>
      </Flex>
      
    </ChakraProvider>
  )
}

export default Hero