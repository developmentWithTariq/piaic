import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import CourseList  from './list'

export const Courses = () => {
  return (
    <Box mt='1em'>
        <Heading mt='1em' fontSize={{base:'3xl',sm:'4xl',md:'5xl'}} textAlign='center'>Available Programs</Heading>
        <Text mt='0.5em' textAlign='center' fontSize={{base:'sm',sm:'lg',md:'xl'}} px={{base:'3',sm:'6'}}>After completing the first two quarters the participants will select one or more specializations consisting of two courses each</Text>
        <CourseList />
    </Box>
  )
}