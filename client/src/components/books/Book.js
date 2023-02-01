"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@chakra-ui/react");
function Book(_a) {
    var book = _a.book;
    return (<react_1.Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
        <react_1.Image objectFit='cover' maxW={{ base: '100%', sm: '100px' }} src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60' alt='Book by any name'/>

        <react_1.Stack>
            <react_1.CardBody>
            <react_1.Heading size='md'>{book.title}</react_1.Heading>

            <react_1.Text py='2'>
                {book.description}
            </react_1.Text>
            </react_1.CardBody>

            <react_1.CardFooter>
            <react_1.Button variant='solid' colorScheme='blue'>
                Notes
            </react_1.Button>
            </react_1.CardFooter>
        </react_1.Stack>
        </react_1.Card>);
}
exports.default = Book;
