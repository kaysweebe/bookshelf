"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@chakra-ui/react");
var BookList_1 = __importDefault(require("../books/BookList"));
function Main() {
    return (<react_1.VStack divider={<react_1.StackDivider borderColor='gray.200'/>} spacing={4} align='stretch'>
            <react_1.Box h='40px' bg='yellow.200'>
                Books
            </react_1.Box>
            <react_1.Box bg='white'>
                <BookList_1.default />
                
            </react_1.Box>
            {/* <Box h='40px' bg='pink.100'>
            <Button colorScheme='blue'>Add Book</Button>
        </Box> */}
        </react_1.VStack>);
}
exports.default = Main;
