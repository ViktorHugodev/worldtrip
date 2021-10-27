import { Flex, Heading} from '@chakra-ui/react'

interface ContinentProps { 
  image: string
  continent: string
}

export function ContinentBanner({image, continent}: ContinentProps){
  return (
    <Flex
      px={["0","0","36"]}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      justify={["center","center", "flex-start"]}
      align="center"
      maxWidth={1440}
      w="100%"
      h={["150px","500px"]}
      
      bgImage={`url(/images/${image}.png)`}>
       <Heading
       pt={["0", "0", "72"]}
        fontSize={["24", "38"]}
        fontWeight="500"
         textAlign={["center","left"]}
         color="light.text">{continent}</Heading>
    </Flex>
  )
} 