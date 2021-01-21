// export default {
//   colors: {
//     text: "#111",
//     background: "#fff",
//     primary: "tomato",
//     secondary: "#3f3f3f",
//     muted: "#e0e0e0",
//     highlight: "#9f9f9f",
//     gray: "#6c6c6c",
//     accent: "#3f3f3f",
//   },
//   fonts: {
//     body: "Comic Sans MS",
//   },
// };
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: "#666666"
    }
  },
  typography: {
    "fontFamily": `"Helvetica Neue", Helvetica, Arial, Sans-serif`,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500,
    "letterSpacing": "-0.07em",
    h4: {
      "fontSize": "3rem"
    }
  }
})