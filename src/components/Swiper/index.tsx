import SwiperCore, { Navigation, Pagination, A11y, EffectFade } from 'swiper';
import { Flex, Link, Heading, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/effect-fade'
// import './swiper.css'

// SwiperCore.use([Navigation, Pagination, A11y, EffectFade])

export function SwiperComponent() {
  return (
    <Flex w="100%" mx="auto" maxW="1240px" h={["250px", "450px"]}>
      <Swiper
        modules={[Navigation, Pagination, A11y, EffectFade]}

        style={{ width: '100%', flex: '1' }}
        slidesPerView={1}
        effect={"fade"}
        navigation
        pagination={{ clickable: true }}

      >
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            bgSize="cover"
            textAlign="center"
            bgImage="url(/icons/europa.png)">
            <Link href="/">
              <a>
                <Heading color="light.text" fontSize={["22", "28", "52"]} >Europa</Heading>
                <Text color="light.info" mt={["2", "4"]} fontSize={["18", "22", "42"]}>O continente mais antigo.</Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex

            w="100%"
            h="100%"
            align="center"
            justify="center"
            bgSize="cover"
            textAlign="center"
            bgImage="url(/icons/americanorte.png)">
            <Link textDecoration="none" href="/continents/europe">
              <a>
                <Heading color="light.text" fontSize={["22", "28", "52"]} >Europa</Heading>
                <Text color="light.info" mt={["2", "4"]} fontSize={["18", "22", "42"]}>O continente mais antigo.</Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>


      </Swiper>
    </Flex>
  );
};