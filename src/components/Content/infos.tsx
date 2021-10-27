import { Flex, Heading, Text, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody, Icon } from '@chakra-ui/react'
import { RiInformationLine } from 'react-icons/ri'

export function Infos() {
  return (
    <Flex align="center" justify="space-between">

      <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
        <Heading fontSize={["2xl", "5xl"]} color="highlight.100" fontWeight="500">50</Heading>
        <Text fontWeight="600" fontSize={["md", "xl"]} color="dark.text">países</Text>
      </Flex>
      <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
        <Heading fontSize={["2xl", "5xl"]} color="highlight.100" fontWeight="500">60</Heading>
        <Text fontWeight="600" fontSize={["md", "xl"]} color="dark.text">línguas</Text>
      </Flex>
      <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
        <Heading fontSize={["2xl", "5xl"]} color="highlight.100" fontWeight="500">27</Heading>
        <Text fontWeight="600" fontSize={["md", "xl"]} color="dark.text">cidades +100
          <Popover>
            <PopoverTrigger>
              <span>
                <Icon cursor="pointer" as={RiInformationLine} ml="1" color="gray.400" w={["10px", "16px"]} h={["10px", "16px"]} />
              </span>
            </PopoverTrigger>
            <PopoverContent bg="gray.700" color="yellow.400">
              <PopoverArrow bg="gray.700" />
              <PopoverCloseButton />
              <PopoverBody fontWeight="400" fontSize="lg">Paris, Europa, Chiná, Canadá </PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Flex>




    </Flex>
  )
}