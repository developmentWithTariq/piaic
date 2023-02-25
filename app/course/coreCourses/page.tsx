'use client'
import { LineWithDot } from '@/components'
import Card from '@/components/courseCard'
import { CumpulsoryCourses } from '@/content/courses'
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const CoreCoursesPage = () => { 
  return (
    <Box color='green.800' mt='8em' pt='90px'>     
        <VStack textAlign='center' my='4em' spacing='8'>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            Core Courses (Common in All Specializations):
            </Heading>
            <Text px={{base:'6',sm:'10',md:'16'}} fontSize={{ base: 'sm', sm: 'md', md: 'lg', lg: 'xl' }}>
            After completing the first three quarters the participants will start specializations track consisting of two courses:
            </Text>
        </VStack>
        <VStack maxWidth="100vw" p={{ base: 0, sm: 10 }} justifyContent='center' >
        { CumpulsoryCourses?.map((cc, index) => (
          <Flex key={index} flexDirection={{base:'column',xl:'row'}}>
            <Card {...cc} />
            <VStack maxWidth="4xl" p={{ base: 2, md: 10 }} >
                 {cc?.courses?.map((q, index) => (
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

export default CoreCoursesPage