import { Box, Button } from "@chakra-ui/react";
export function NumberButtons({ rate, setRate, number }) {

    const array = Array(number).fill(0).map((e, i) => i + 1)

    return array.map((digit, index) => {
        return <Button key={index} bgColor={'#272e38'} color={'#7C8798'} height="50px" width="50px" borderRadius="full"
            _hover={{
                bgColor: "#7C8798",
                color: "white"
            }
            }
            onClick={() => setRate(digit)}
            value={digit}
            _focus={{
                bg: "#FB7718",
                color: "white"
            }} >
            {digit}
        </Button>
    })
}


export function RatingScale({ rate, setRate }) {

    return <Box fontFamily='Overpass' fontWeight="400" display="flex" flexDirection="row" justifyContent="space-between">
        <NumberButtons number={5} rate={rate} setRate={setRate} />
    </Box>
}

