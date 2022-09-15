import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function SubmitButton() {

    return <Link to="/thankyou">
        <Button bgColor="#FB7413" color="white"
            width="310px"
            fontFamily="Overpass" fontWeight="400"
            textTransform="uppercase" borderRadius="20px"
            _hover={{ bg: "white", color: "#FB7413" }} type="submit">
            Submit
        </Button>
    </Link>
}