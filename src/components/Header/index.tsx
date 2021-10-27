import { Link, Flex, Image, Icon, Spacer, Grid } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import { RiArrowLeftLine } from 'react-icons/ri'
export function Header() {
  const { asPath } = useRouter()
  const isHomePage = asPath === '/'

  return (
    <Flex bg="white" w="100%" as="header" mx="auto" px="1rem" h={["50px", "100px"]} align="center" justify="center">
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
        alignSelf="start"
      >

        {!isHomePage && (
          <Link exact href="/" >
            <a>
              <Icon as={RiArrowLeftLine} fontSize={[20, 40]} justifySelf="start" />
            </a>
          </Link>

        )}

        <Image
          w={["81px", "184px"]}
          src="/images/Logo.svg"
          alt="Avião nas nuvens"
          justifySelf="center"
          gridColumn="2"
        />

      </Grid>
    </Flex>
  )
}