import { ChakraProvider, Box } from '@chakra-ui/react'
import { RatingComponent } from './Component/RatingComponent';

function App() {
  return <ChakraProvider>
    <Box bgColor="#121417" height="100vh" display='flex' justifyContent='center' alignItems='center'>
      <RatingComponent />
    </Box>
  </ChakraProvider>
}

export default App;
