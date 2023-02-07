'use client'
import React from 'react'
import { ChakraProvider, Box, HStack, Text, Flex } from "@chakra-ui/react";
import Logo  from '../components/Logo'
export const Navbar = () => {
  return (
    // bg='#51d98d' for button
    <ChakraProvider>
        <Box>
            <Flex direction='row' color='green.700' border={'2px'} justifyContent='right'>
                    <Logo />
                <HStack as='ul' mr='16' py='5'  spacing='16' alignSelf={'right'} border='2px'>
                    <Text fontSize='xl' fontWeight='semibold'>How It Works</Text>
                    <Text fontSize='xl' fontWeight='semibold'>Apply</Text>
                    <Text fontSize='xl' fontWeight='semibold'>Available Program</Text>
                    <Text fontSize='xl' fontWeight='semibold'>About</Text>
                    <Text fontSize='xl' fontWeight='semibold'>WIT</Text>

                </HStack>
            </Flex>
        </Box>
    </ChakraProvider>
  )
}
