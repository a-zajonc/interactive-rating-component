import { ChakraProvider } from '@chakra-ui/react'
import { RatingComponent } from './Component/RatingComponent';

function App() {
  return <ChakraProvider>
    <RatingComponent />
  </ChakraProvider>
}

export default App;
