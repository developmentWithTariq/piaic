'use client'
import { CoreCourses, LineWithDot } from '@/components';
import SpecializationTrack from '@/components/sTrack';
import { Box, Container, Flex, GridItem, Heading, HStack, Image, Link, SimpleGrid, Text, useColorModeValue, VStack, Icon } from '@chakra-ui/react';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { IoMdPlanet } from 'react-icons/io';
import { SiTypescript } from 'react-icons/si';
import { TbAugmentedReality, TbBrandNextjs } from 'react-icons/tb';
import { SpecializationTrack as STC } from '@/content/courses';

type props = {
  params: { name: string }
}

const CourseDetailPage = ({ params }: props ) => {
  const title = STC?.find((e)=>e.title === decodeURI(params.name))?.title
  return (
    <Box color='green.800' pt='90px'>
      <VStack h='85vh' alignItems={'center'} justifyContent='center' bgColor='gray.50' color='green.800' pb='6' bg='linear-gradient(270deg,gray.50,gray.20  )'>
        <Heading fontSize={{ base: '3xl', md: '5xl', lg: '6xl', xl: '5xl' }} textAlign='center'>{title} </Heading>
        <Text textAlign={'center'} fontSize={{ base: 'sm', md: 'md', xl: 'lg' }} w={{ base: '80vw', lg: '60vw' }}>A ONE AND A QUARTER YEAR DEV PROGRAM FOR ABSOLUTE BEGINNERS. GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF METAVERSE.</Text>
      </VStack>
      <CoreCourses />
      <SpecializationTrack params={params}/>
    </Box>
  )
}
export default CourseDetailPage 
