import { Box } from "@chakra-ui/react";
import { Star } from "./Star";
import { Header } from "./Header";
import { RatingText } from "./RatingText";
import { RatingScale } from "./RatingScale";
import { SubmitButton } from "./SubmitButton";

export function RatingComponent() {
    return <Box>
        <Star />
        <Header />
        <RatingText />
        <RatingScale />
        <SubmitButton />
    </Box>
}