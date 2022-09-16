import { Text, Container } from "@chakra-ui/react";

export function RatingInfo({ rate }) {

    return <Container bgColor="#272e38" borderRadius="20px" width="fit-content" paddingBlock="4px" paddingInline="20px">
        <Text color="#FB7413" fontFamily="Overpass" fontWeight="400" fontSize="15px">
            You selected {rate} out of 5!
        </Text>
    </Container>
}