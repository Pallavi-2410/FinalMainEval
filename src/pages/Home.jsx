import { Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from '@chakra-ui/react'

const Home = () => {
    const books = useSelector((state) => state.books) || [];

    return (
        <VStack>
            {books.length > 0 ? (books.map((book) => {
                return (
                    <img src={book.coverImage} alt="coverimage" />,
                    <p>{book.title}</p>,
                    <p>{book.author}</p>,
                    <select name= "Status">
                        <option value="">{book.status}</option>
                    </select>                    
                )
            })) : ("No book to display")}
        </VStack>

    )
}

export default Home
