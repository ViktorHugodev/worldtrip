import { ContinentBanner } from "../../components/Banner/ContinentBanner";
import { Header } from "../../components/Header";
import { Flex } from '@chakra-ui/react'
import { Content } from "../../components/Content";
import { Infos } from "../../components/Content/infos";
import { Cities } from "../../components/Cities";

export default function Europe() {
  return (
    <Flex direction="column" maxWidth={1440} mx="auto">
      <Header />
      <ContinentBanner continent="Europa" image="europe" />

      <Flex direction="column" maxWidth="1160px" mx="auto" mb="10" px="1rem">
        <Content />
        <Cities />
      </Flex>
    </Flex>
  )
}