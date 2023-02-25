'use client'
import { WithLargeQuote, ProgramNutshell, Hero, Services } from '@/components';
import { Courses } from '@/components/courses';
import { Box } from '@chakra-ui/react'

export default function HomePage() {
  return (
    <Box>
      <Hero />
      <Courses />
      <ProgramNutshell />
      <Services />
      <WithLargeQuote />
    </Box>
  )
}