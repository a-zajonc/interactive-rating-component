import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";


function NumberButtons({ number }) {

    const [rate, setRate] = useState()

    console.log(`"You have rated us on ${rate} out of 5`)

    const array = Array(number).fill(0).map((e, i) => i + 1)

    return array.map((digit, index) => {
        return <Button key={index} bgColor={'#272e38'} color={'#7C8798'} borderRadius="full" _hover={{ bgColor: "#7C8798", color: "white" }} onClick={() => setRate(digit)} value={digit} _focus={{ bg: "#FB7718", color: "white" }} > {digit}</Button>
    })
}


export function RatingScale() {

    return <Box fontFamily='Overpass' fontWeight="400" display="flex" flexDirection="row" justifyContent="space-between" >
        <NumberButtons number={5} />
    </Box>
}

