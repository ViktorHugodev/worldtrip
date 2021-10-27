import { Image,Text,Flex, Heading, useBreakpointValue} from '@chakra-ui/react'

export function Banner(){
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true
  })
  
  return (
    <Flex
      w="100%"
      maxWidth={1440}
      h={["163px","250px",
      "250px",
      "335px"]}
      justify="space-around"
      bgImage="url(/images/Background.svg)"
      mx="auto">

      <Flex direction="column" p={["8","14","14","24"]} maxWidth={720}>
        <Heading color="light.text" fontSize={["18","26","38"]} fontWeight="500" >5 Continentes,
        <br/>infinitas possibilidades</Heading>
        <Text mt={["2","3","6"]} fontSize={["12","20"]} color="light.info" fontWeight="400">Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
      </Flex>
      
      <Flex>
        {isWideScreen && <Image src="/images/Airplane.svg" transform="translateY(50px)" alt="Avião voando nas nuvens" /> }
        
        
      </Flex>
    </Flex>
  )
}