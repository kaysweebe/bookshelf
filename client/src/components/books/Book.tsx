import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button } from "@chakra-ui/react";

type AppProps = {
    book: BookType
}

type BookType = {
    id: string,
    title: string,
    author: string,
    description: string,
}

export default function Book({book}: AppProps){

    return (
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        >
        <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '100px'}}
            src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
            alt='Book by any name'
        />

        <Stack>
            <CardBody>
            <Heading size='md'>{book.title}</Heading>

            <Text py='2'>
                {book.description}
            </Text>
            </CardBody>

            <CardFooter>
            <Button variant='solid' colorScheme='blue'>
                Notes
            </Button>
            </CardFooter>
        </Stack>
        </Card>
    )
}