import { Box, Image, Flex, Heading, Text } from "@chakra-ui/react"

interface CityProps {
  pais: string
  cidade: string
  foto: string
  bandeira: string

}

export function City({ pais, cidade, foto, bandeira }: CityProps) {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image src={`/icons/${foto}.png`} alt={pais} />

      <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">{cidade}</Heading>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">{pais}</Text>
        </Flex>
        <Image src={`/icons/${bandeira}.png`} alt="bandeira" w="30px" h="30px" borderRadius="50%" objectFit="cover" />
      </Flex>
    </Box>
  )
}