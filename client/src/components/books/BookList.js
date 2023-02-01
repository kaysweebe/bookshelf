"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@chakra-ui/react");
var axios_1 = __importDefault(require("axios"));
var react_2 = require("react");
var Book_1 = __importDefault(require("./Book"));
function BookList() {
    var _a = (0, react_2.useState)([]), books = _a[0], setBooks = _a[1];
    (0, react_2.useEffect)(function () {
        axios_1.default
            .get("http://localhost:3300/books")
            .then(function (res) {
            setBooks(res.data);
        })
            .catch(function (err) { return console.log(err); });
    }, []);
    return (<react_1.TableContainer>
        <react_1.Table variant="simple">
          <react_1.Thead>
            <react_1.Tr>
              <react_1.Th>Title</react_1.Th>
              <react_1.Th>Author</react_1.Th>
              <react_1.Th>Category</react_1.Th>
            </react_1.Tr>
          </react_1.Thead>
          <react_1.Tbody>
            {books.map(function (book, index) { return (
        // TODO: Add Link around Book to Notion notes
        <Book_1.default book={book} key={index}></Book_1.default>); })}
          </react_1.Tbody>
        </react_1.Table>
      </react_1.TableContainer>);
}
exports.default = BookList;
