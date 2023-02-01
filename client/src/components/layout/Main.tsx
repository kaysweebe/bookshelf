import { Box, Button, StackDivider, VStack } from "@chakra-ui/react";
import BookList from "../books/BookList";

export default function Main(){
    return (
        <VStack
        divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        align='stretch'
        >
            <Box h='40px' bg='yellow.200'>
                Books
            </Box>
            <Box bg='white'>
                <BookList />
                
            </Box>
            {/* <Box h='40px' bg='pink.100'>
                <Button colorScheme='blue'>Add Book</Button>
            </Box> */}
        </VStack>
    )
}