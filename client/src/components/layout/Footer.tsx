import { Box, Flex, Spacer } from "@chakra-ui/react";

export default function Footer(){
    return (
        <Flex>
        <Box p='4'>
            Bookshelf
        </Box>
        <Spacer />
        <Box p='4'>
            a modern library
        </Box>
        </Flex>    
    )
}