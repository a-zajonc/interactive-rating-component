import { Button } from "@chakra-ui/react";

export function SubmitButton() {
    return <Button bgColor="#FB7413" color="white" fontFamily="Overpass" fontWeight="400" borderRadius="20px" textTransform="uppercase" _hover={{ bg: "white", color: "#FB7413" }}>
        Submit
    </Button>
}