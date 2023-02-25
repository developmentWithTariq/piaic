
import { motion as m } from 'framer-motion';
import { Box, Heading, HStack, Text, useColorModeValue, VStack, Icon, Link } from '@chakra-ui/react'


const Card = ({ title, categories, description, icon, date }: any) => {
    return (
      
      <m.div
        whileHover={{ scale: 0.98 }}
        whileInView={{ x: 0 }}
        initial={{ x: -100 }}>
        <HStack
          p={{ base: 3, sm: 6 }}
          bg={useColorModeValue("gray.100", "gray.800")}
          spacing={5}
          rounded="lg"
          flexDirection={{base:'column',md:'row'}}
          alignItems="center"
          pos="relative"
          _before={{
            content: `""`,
            w: "0",
            h: "0",
            borderColor: `transparent ${useColorModeValue(
              "#edf2f6",
              "#1a202c"
            )} transparent`,
            borderStyle: "solid",
            borderWidth: "15px 15px 15px 0",
            position: "absolute",
            left: "-15px",
            display: "block",
            
          }}
        >
          <Icon as={icon} w={12} h={12} color="brand.limegreen" />
          <Box>
            <HStack spacing={2} mb={1}>
              {categories?.map((cat:any) => (
                <Text fontSize="sm" color={"brand.seafoam"} key={cat}>
                  {cat}
                </Text>
              ))}
            </HStack>
            <VStack spacing={2} mb={3} textAlign="left">
              <Heading
                as={Link}
                _hover={{ color: "brand.limegreen", textDecoration: "none" }}
                fontSize="2xl"
                lineHeight={1.2}
                fontWeight="bold"
                w="100%"
              >
                {title}
              </Heading>
              <Text fontSize="md" color={"gray.500"}>
                {description}
              </Text>
            </VStack>
            <Text fontSize="sm" color={"brand.seafoam"}>
              {date}
            </Text>
          </Box>
        </HStack>
      </m.div>
    );
  };

  export default Card;