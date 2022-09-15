import { ChakraProvider, Box } from '@chakra-ui/react'
import { RatingComponent } from './Component/RatingComponent';
import { ThankYouComponent } from './Component/ThankYouComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return <ChakraProvider>
    <Router>
      <Box bgColor="#121417" height="100vh" display='flex' justifyContent='center' alignItems='center'>
        <Routes>
          <Route exact path="/" element={<RatingComponent />} />
          <Route exact path="/thankyou" element={<ThankYouComponent />} />
        </Routes>
      </Box>
    </Router>
  </ChakraProvider>
}

export default App;
