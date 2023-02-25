import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

const LineWithDot = () => {
    return (
      <Flex pos="relative" alignItems="center" mr="20px" display={{base:'flex',xl:'flex'}}>
        <Box
          position="absolute"
          left="50%"
          height="calc(100% + 10px)"
          border="1px solid"
          borderColor={useColorModeValue("brand.spearmint", "gray.700")}
          top="0px"
        ></Box>
        <Box pos="relative" p="10px">
          <Box
            pos="absolute"
            width="100%"
            height="100%"
            bottom="0"
            right="0"
            top="0"
            left="0"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundPosition="center center"
            backgroundColor="rgb(255, 255, 255)"
            borderRadius="100px"
            border="3px solid #94C973"
            backgroundImage="none"
            opacity={1}
          ></Box>
        </Box>
      </Flex>
    );
  };
  
export default LineWithDot;