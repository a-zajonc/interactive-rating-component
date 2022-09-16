import { Container } from "@chakra-ui/react";
import { RatingInfo } from "./RatingInfo";
import { ThankYouImage } from "./ThankYouImage";
import { ThankYouHeader } from "./ThankYouHeader";
import { ThankYouText } from "./ThankYouText";

export function ThankYouComponent({ rate }) {
    return <Container
        display="grid" alignItems="center" textAlign="center" justifyItems="center" alignContent="space-evenly"
        bgColor='#19202a' height="420px" width="410px" borderRadius="20px" p="30px"
    >
        <ThankYouImage />
        <RatingInfo rate={rate} />
        <ThankYouHeader />
        <ThankYouText />
    </Container>
}