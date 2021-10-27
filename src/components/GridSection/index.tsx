import { Grid, GridItem} from '@chakra-ui/react'
import {Card} from './Card'

export function GridCard(){
  return (
    <Grid
      templateColumns={["1fr 1fr","1fr 1fr","repeat(5,1fr)"]}
      w="100%"
      mt={["10","24"]}
      gap={[1,5]}
      mx="auto"
      maxW={1160}
      justifyContent="space-between"
      align="center">
        
      <GridItem>
        <Card icon="taca" name="vida noturna"/>
      </GridItem>
      <GridItem >
        <Card icon="beach" name="praia"/>
      </GridItem>
      <GridItem >
        <Card icon="predio" name="moderno"/>
      </GridItem>
      <GridItem >
        <Card icon="museu" name="clássico"/>
      </GridItem>
      <GridItem colSpan={[2, 2, 1]} >
        <Card icon="terra" name="e mais..."/>
      </GridItem>
    </Grid>
  )
}