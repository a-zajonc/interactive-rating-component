import { ChakraProvider, Container } from '@chakra-ui/react'
import { RatingComponent } from './Component/RatingComponent';

function App() {
  return <ChakraProvider>
    <Container bgColor="#1C1E21" height="100vh" display='flex' justifyContent='center' alignItems='center'>
      <RatingComponent />
    </Container>
  </ChakraProvider>
}

export default App;
