import { Text, Flex, Image, useBreakpointValue} from '@chakra-ui/react'

interface GridProps {
  icon: string
  name: string
}
 
export function Card({icon, name}: GridProps){
  const isMobile = useBreakpointValue({
    base: false,
    sm: true
  })
  
  return (
    <Flex direction={["row","column"]} align="center" justify="center"
    >
      {isMobile ? <Image mb="6"src={`/icons/${icon}.svg`} h="85px" w="85px" alt={name}/> : <Text color="highlight.100" fontSize="4xl" fontWeight="600" mr="2">•</Text>}
      <Text fontSize={["18","18","18", "20"]} fontWeight="600">{name}</Text>
    </Flex>
  )
}