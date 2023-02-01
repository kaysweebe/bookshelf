import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Book from "./Book";

export default function BookList(){
    const [books, setBooks] = useState([])
    
    useEffect(() => {
        axios
          .get(`http://localhost:3300/books`)
          .then((res) => {
            setBooks(res.data);
          })
          .catch((err) => console.log(err));
      }, []);
    return ( 
        <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Author</Th>
              <Th>Category</Th>
            </Tr>
          </Thead>
          <Tbody>
            {books.map((book, index) => (
                // TODO: Add Link around Book to Notion notes
              <Book book={book} key={index}></Book>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    )
}