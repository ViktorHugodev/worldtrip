import { Heading, Grid } from '@chakra-ui/react'
import { City } from './city'



export function Cities() {
  return (
    <>
      <Heading>Cidiades +100</Heading>,
      <Grid templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={['20px', '45px']} alignItems="center" justifyContent="center" px={["30px", "0"]}>

        <City pais="Reino Unido" cidade="Londres" foto="londres" bandeira="londres-logo" />
        <City pais="França" cidade="París" foto="paris" bandeira="paris-logo" />
        <City pais="Itália" cidade="Roma" foto="roma" bandeira="roma-logo" />
        <City pais="República Checa" cidade="Praga" foto="praga" bandeira="praga-logo" />
        <City pais="Holanda" cidade="Amsterdã" foto="amsterdan" bandeira="amsterdan-logo" />

      </Grid>
    </>
  )
}