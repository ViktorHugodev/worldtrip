import {extendTheme} from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    highlight: {
      "100": "#FFBA08",
      "50": "#FFBA08"
    },
    dark:{
      "black" :"#000000",
      "text": "#47585B",
      "info": "#999999",
      "info50": "rgba(153, 153, 153, 0.5)"
    },
    light: {
      "white": "#FFFFFF",
      "text": "#F5F8FA",
      "info": "#DADADA"
    }
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins"
  },
  styles: {
    global: {
      body: {
        bg: 'light.text',
        color: 'dark.text'
      }
    }
  }
}) 