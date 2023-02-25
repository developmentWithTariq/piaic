import { Box, Flex, Heading, HStack, Text, useColorModeValue, VStack, Icon, Link } from '@chakra-ui/react'
import React from 'react'
import LineWithDot from '../lineWithDot'
import { IoMdPlanet } from 'react-icons/io';
import { TbAugmentedReality } from 'react-icons/tb';
import { motion as m } from 'framer-motion';
import { SpecializationTrack as STC } from '@/content/courses';
import Card from '../courseCard';


const SpecializationTrack = ({params}:{params: {name: string}}) => {
  const SpecCourseQuaters = STC?.find((d) => d.title === decodeURI(params.name))
  console.log(SpecCourseQuaters)
  return (
    <Box color='green.800' mt='8em'>     
    <VStack textAlign='center' my='4em'>
    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
      Specilization Track
    </Heading>
    <Text px={{base:'6',sm:'10',md:'16'}} fontSize={{ base: 'sm', sm: 'md', md: 'lg', lg: 'xl' }}>
    After completing the first three quarters the participants will start specializations track consisting of two courses:
    </Text>
    </VStack>
    <VStack maxWidth="100vw" p={{ base: 0, sm: 10 }} justifyContent='center' >
        {SpecCourseQuaters?.details?.map((stcq, index) => (
          <Flex key={index} flexDirection={{base:'column',xl:'row'}}>
            <Card {...stcq} />
            <VStack maxWidth="4xl" p={{ base: 2, md: 10 }} >
                 {stcq?.courses?.map((q, index) => (
                <Flex key={index} >
                  <LineWithDot />
                  <Card {...q} />
                </Flex>
              ))}
        </VStack>
          </Flex>
        ))}
  </VStack>
</Box>
  )
}

export default SpecializationTrack