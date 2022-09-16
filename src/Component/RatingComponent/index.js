import { Container } from "@chakra-ui/react";
import { Star } from "./Star";
import { RatingHeader } from "./RatingHeader";
import { RatingText } from "./RatingText";
import { RatingScale } from "./RatingScale";
import { SubmitButton } from "./SubmitButton";

export function RatingComponent({ rate, setRate }) {
    return <Container display="grid" alignItems="start" justifyContent="start" bgColor='#19202a' height="420px" width="410px" borderRadius="20px" p="30px">
        <Star />
        <RatingHeader />
        <RatingText />
        <RatingScale rate={rate} setRate={setRate} />
        <SubmitButton rate={rate} />
    </Container>
}