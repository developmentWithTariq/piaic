import { Image, Box, Heading, Text, Button, Container } from "@chakra-ui/react"
import Link from "next/link";
import { IconType } from "react-icons/lib";

type data = {
    title: string;
    description: string;
    image: string;
    details: {
        id: number;
        categories: string[];
        title: string;
        icon: IconType;
        description: string;
        date: string;
    }[];
}

export const Item = ({course}:{course:data}) => {
    console.log("course",course?.image!)
    return (
        <Box shadow='lg' px='3' >
            <Image borderRadius='8px' shadow='xl' src={course.image} alt="course Image"  h={{base:'20em',md:'18em'}} />
            <Text fontWeight={'bold'} color='green.900' fontSize='2xl' mt='2' minH='40px'>
                {course?.title!}
            </Text>
            <Text fontSize='md'>
                {course.description[0].toUpperCase() }  {course.description.substring(1,69).toLowerCase()}.....
            </Text>
            <Container my='4' fontWeight='light' color='green.900' fontSize='md' textAlign={'center'}>
                <Link href='#' >LEARN MORE</Link>
            </Container>
        </Box>
    )
}