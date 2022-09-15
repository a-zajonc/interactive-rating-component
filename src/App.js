import { ChakraProvider, Box } from '@chakra-ui/react'
import { RatingComponent } from './Component/RatingComponent';
import { ThankYouComponent } from './Component/ThankYouComponent';

function App() {
  return <ChakraProvider>
    <Box bgColor="#121417" height="100vh" display='flex' justifyContent='center' alignItems='center'>
      {/* <RatingComponent /> */}
      <ThankYouComponent />
    </Box>
  </ChakraProvider>
}

export default App;
