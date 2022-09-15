import { Container } from "@chakra-ui/react";
import { RatingInfo } from "./RatingInfo";
import { ThankYouImage } from "./ThankYouImage";
import { ThankYouHeader } from "./ThankYouHeader";
import { ThankYouText } from "./ThankYouText";

export function ThankYouComponent() {
    return <Container display="grid" alignItems="center" textAlign="center" justifyItems="center" alignContent="space-evenly" bgColor='#19202a' height="400px" width="400px" borderRadius="20px" p="20px">
        <ThankYouImage />
        <RatingInfo />
        <ThankYouHeader />
        <ThankYouText />
    </Container>
}