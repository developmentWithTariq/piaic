'use client'
import { Avatar, Box, Flex, GridItem, Heading, HStack, SimpleGrid, Stack, Text, useColorModeValue, VStack } from '@chakra-ui/react';

function SuccessStory() {
  return (
    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={6}
      borderRadius='14'
      px={8}
      spacing={{ base: 8, md: 8 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: 'sm', lg: 'md' }}
        textAlign={'center'}
        maxW={'3xl'}>
        We had an incredible experience working with Chakra Templates and were
        impressed they made such a big difference in only three weeks. Our team
        is so grateful for the wonderful improvements they made and their
        ability to get familiar with the product concept so quickly.
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
          }
          mb={2}
        />

        <Text fontWeight={600}>Jenny Wilson</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Vice President
        </Text>
      </Box>
    </Stack>
  );
}

const SuccessStories = () => {
  return (
    <VStack color='green.900' mx={{lg:'2em',xl:'6em','2xl':'8em'}} my='12' spacing='4'>
      <Heading fontSize={{base:'3xl',md:'5xl'}}>
        Success  Stories
      </Heading>
      <Text fontSize={{base:'lg',md:'2xl'}}>
        What our Students Acheive with us.
      </Text>

      <SimpleGrid spacing='1em' templateColumns={{base:'repeat(1, 1fr)',md:'repeat(2, 1fr)','2xl':'repeat(3, 1fr)'}} rowGap={{base:'8','2xl':'4'}} columnGap={{base:'8',md:'8'}}>
        <GridItem>
          <SuccessStory />
        </GridItem>
        <GridItem>
          <SuccessStory />
        </GridItem>
        <GridItem>
          <SuccessStory />
        </GridItem>
      </SimpleGrid>
    </VStack>
  )
}

export default SuccessStories