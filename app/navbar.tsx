'use client'
import React from 'react'
import { ChakraProvider, Box, HStack, Text, Flex,Link as CLink, Button, useDisclosure, Collapse, Stack, useColorModeValue, Icon, IconButton, ScaleFade, Popover, PopoverTrigger, PopoverContent, useBreakpointValue } from "@chakra-ui/react";
import { PiaicLogo }  from '../components'
import Link from 'next/link';
import { extendTheme } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

const customeTheme = extendTheme({
  breakpoints: {
    sm: "480px",
    md: "667px",
    lg: "990px",
    xl: "1130",
    '2xl': '1535'
  },
});

const theme = extendTheme({ customeTheme });

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'How It Works',
    href: 'https://www.piaic.org/howitworks',
  },
  {
    label: 'Apply',
    href: 'https://portal.piaic.org/signup',
  },
  {
    label: 'Available Programs',
    children: [
      {
        label: 'Artificial Intelligence (AI) Specialization',
        subLabel: 'Find your dream design job',
        href: `/course/`,
      },
      {
        label: 'Web 3.0 and Metaverse Specialization',
        subLabel: 'An exclusive list for contract work',
        href: '/course/',
      },
      {
        label: 'Cloud-Native Computing Specialization',
        subLabel: 'An exclusive list for contract work',
        href: '/course/',
      },
      
      {
        label: 'Ambient Computing and IoT Specialization',
        subLabel: 'An exclusive list for contract work',
        href: '/course/',
      },
      
      {
        label: 'Genomics and Bioinformatics Specialization',
        subLabel: 'An exclusive list for contract work',
        href: '/course/',
      },
      
      {
        label: 'Programmability and Automation Specialization',
        subLabel: 'An exclusive list for contract work',
        href: '/course/',
      },
    ],
  },
  {
    label: 'About Us',
    href: '/about-us',
  },
  {
    label: 'WIT',
    href: '#',
  },
];


  






const MobileNav = () => {
  return (
    <ChakraProvider >
      <Stack 
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ xl: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
          ))}
      </Stack>
        </ChakraProvider>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <ChakraProvider >

    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Box py={2}>
              <Link key={child.label}  href={child?.href!+child.label}>
                {child.label}
              </Link>
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
            </ChakraProvider>
  );
};


export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  // sm 480
// md 667
// lg 990
// xl 1280
// 2xl 1535
  return (
    <ChakraProvider >
            <Flex 
            position='fixed'
            w='100vw'
              shadow={'lg'}
              zIndex='10'
              minH={'90px'}
              py={{ base: 2 }}
              px={{ base: 4 }} direction='row' justifyContent='center' alignItems={'center'} 
              bg={useColorModeValue('white', 'gray.800')}
              color={useColorModeValue('gray.600', 'white')}
              >
            <Flex 
                flex={{ base: 1, md: 'auto' }}
                justifyContent='flex-start'
                ml={{ base: -2 }}
                display={{ base: 'flex', lg: 'none' }}>
                <IconButton
                onClick={onToggle}
                icon={
                    isOpen ? <CloseIcon display={'block'} w={3} h={3} /> : <HamburgerIcon w={6} h={6} />
                }
                variant={'ghost'}
                aria-label={'Toggle Navigation'}
                />
          </Flex>
                <PiaicLogo />
                    <HStack  display={{base:'none',lg:'flex'}} as='ul' fontSize={{'base':'0.7em','md':'1.1em','lg':'1.15em','xl':'1.2em'}} w={'60vw'} spacing={{ base: '0', md: '4', lg: '8',xl:'12', '2xl':'16' }} justifyContent={'center'}  >
       
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </HStack>
                <Button border='2px' display='flex' justifyContent={'center'} position='absolute' right={{base:'2',lg:'8',xl:'14'}} w={{base:'18vw',sm:'12vw',lg:'12vw'}} py={{base:'0px',sm:'4px',lg:'20px'}} bg='linear-gradient(270deg,#08d88d,#0eb5a3)' fontSize={{base:'14',sm:'md'}} fontWeight='bold'>
                  LOGIN
                </Button>
                <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
            </Flex>
        {/* </Box> */}
    </ChakraProvider>
  )
}



const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box fontWeight='semibold'
              p={2}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                <Link
                  
                  href={navItem.href ?? '#'}
                  >
                  {navItem.label}
                </Link>
              </Box>
              
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                    
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box role={'group'}
    display={'block'}
    p={2}
    rounded={'md'}
    _hover={{ bg: useColorModeValue('green.50', 'gray.900') }}>

    <Link href={href+label}>
        
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'green.400' }} 
            fontSize='md'
            fontWeight={500}>
            {label}
          </Text>
        </Box>
        
      </Stack>
    </Link>
    </Box>
  );
};

