'use client'
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";

const Nutshell = () => {
  return (
      <VStack borderRadius='14' py='2em' w={{base:'100vw',md:'80vw'}} spacing='4' m='auto' my='8em' color='green.800' bgColor='gray.100' px='3'>
          <Heading fontSize={{base:'1.2em',md:'1.5em',lg:'1.7em','2xl':'2em'}} fontWeight='bold' textAlign='center' >The Program in a Nutshell: Earn While You Learn</Heading>
          <Text w={{base:'90vw',md:'75vw'}} m='auto' fontSize={{base:'0.8em',sm:'0.93em',lg:'1.09em'}}>
              In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.
          </Text>
          <Button py='4' alignSelf='flex-end' bg='linear-gradient(270deg,#08d88d,#0eb5a3)' w={{base:'15vw',lg:'12vw',xl:'7vw'}}>Apply</Button>
      </VStack>
    )
}

export default Nutshell;