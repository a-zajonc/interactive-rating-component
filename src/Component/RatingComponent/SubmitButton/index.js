import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function SubmitButton({ rate }) {

    const navigate = useNavigate();

    const handleClick = () => {
        return (rate === undefined) ? alert("Rate us first!") : navigate("/thankyou");
    }

    return <Button
        bgColor="#FB7413" color="white"
        width="310px"
        fontFamily="Overpass" fontWeight="400"
        textTransform="uppercase" borderRadius="20px"
        _hover={{ bg: "white", color: "#FB7413" }}
        onClick={() => handleClick()}>
        Submit
    </Button>
}