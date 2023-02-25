



import { Box, ChakraProvider, Grid } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { SpecializationTrack } from '../../../content/courses'
import { Item } from "../item";


const CourseList: FunctionComponent = () => {

  return (
    <ChakraProvider>
      <Grid  w={{base:'70vw',md:'80vw'}} templateColumns={{base:'repeat(1, 1fr)',md:'repeat(2, 1fr)','2xl':'repeat(3, 1fr)'}} rowGap={{base:'8','2xl':'4'}} columnGap={{base:'8',md:'8'}} m='auto' mt='3em'>
        { SpecializationTrack?.map(course =>
          <Item key={course.title} course={course}/>
        )}
      </Grid>
    </ChakraProvider>
  )
}

export default CourseList;