import { Container } from "@chakra-ui/react";
import { Star } from "./Star";
import { Header } from "./Header";
import { RatingText } from "./RatingText";
import { RatingScale } from "./RatingScale";
import { SubmitButton } from "./SubmitButton";

export function RatingComponent({ rate, setRate }) {
    return <Container display="grid" alignItems="center" bgColor='#19202a' height="400px" width="350px" borderRadius="20px" p="20px">
        <Star />
        <Header />
        <RatingText />
        <RatingScale rate={rate} setRate={setRate} />
        <SubmitButton />
    </Container>
}