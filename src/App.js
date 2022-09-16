import { ChakraProvider, Box } from '@chakra-ui/react'
import { RatingComponent } from './Component/RatingComponent';
import { ThankYouComponent } from './Component/ThankYouComponent';
import { Routes, Route } from 'react-router-dom';
import { useState } from "react";

function App() {

  const [rate, setRate] = useState()

  return <ChakraProvider>
    <Box bgColor="#121417" height="100vh" display='flex' justifyContent='center' alignItems='center'>
      <Routes>
        <Route exact path="/" element={<RatingComponent rate={rate} setRate={setRate} />} />
        <Route exact path="/thankyou" element={<ThankYouComponent rate={rate} />} />
      </Routes>
    </Box>
  </ChakraProvider>
}

export default App;
