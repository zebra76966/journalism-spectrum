import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from '@mui/material'
import { grey, red } from '@mui/material/colors'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    background: {
      default: grey[100],
    },
    primary: {
      main: red[500],
    },
  },
  typography: {
    fontFamily: 'quatro-slab',
    fontSize: 14,
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth='xl' sx={{ p: 2 }}>
        <Card>
          <CardHeader
            title={<Typography variant='h6'>Journalism Spectrum</Typography>}
          />
          <CardContent>Hello, world!</CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  )
}

export default App
