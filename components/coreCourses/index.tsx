import {Box, Text, GridItem, Image, SimpleGrid, VStack, Heading, } from '@chakra-ui/react';
import { CumpulsoryCourses } from '../../content/courses'

const CoreCourses = () => {
  // console.log(CumpulsoryCourses.map((c) => c.image))
  return (
    <Box my='16'>
    <VStack py='8' textAlign={'center'} justify='center'>
    <Heading fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }} >
        Core Courses (Common in All Specializations):
      </Heading>
      <Text fontSize={{ base: 'sm', sm: 'md', md: 'lg', lg: 'xl' }} w={{ base: '80vw', md: '90vw' }} >
        Every participant of the program will start by completing the following three core courses:
      </Text>
    </VStack>
    
    <SimpleGrid w={{ base: '80vw', md: '80vw' }} templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', '2xl': 'repeat(3, 1fr)' }} rowGap={{ base: '8', '2xl': '4' }} columnGap={{ base: '8', md: '8' }} m='auto' mt='1em'>
          {CumpulsoryCourses?.map((c) => (
              <GridItem shadow='lg' pb='4' key={c.id}>
              <Image borderRadius='8px' shadow='xl' src={c?.image!} alt="course Image" h={{ base: '20em', md: '18em' }} w='40em'/>
              <Text fontWeight={'bold'} color='green.900' fontSize='2xl' mt='2' minH='40px' textAlign={'center'}>
                {c.categories}
              </Text>
              <Text fontSize='md' textAlign='center'>
                {c.title}
              </Text>
          </GridItem>
          ))}
        </SimpleGrid>
                </Box>
  )
}

export default CoreCourses