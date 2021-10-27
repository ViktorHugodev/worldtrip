import { Flex, Heading } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner/index'
import { GridCard } from '../components/GridSection'
import { BorderBotton } from '../components/GridSection/BorderBotton'
import { SwiperComponent } from '../components/Swiper'

export default function Home() {

  return (
    <>
      <Flex direction="column" maxWidth={1440} mx="auto">
        <Header />
        <Banner />
        <GridCard />
        <BorderBotton />

        <Heading fontSize={["2xl", "3xl"]} mb={["4", "8"]} textAlign="center" fontWeight="500">Vamos nessa?<br /> Então escolha seu continente</Heading>

        <SwiperComponent />
      </Flex>


    </>
  )
}


