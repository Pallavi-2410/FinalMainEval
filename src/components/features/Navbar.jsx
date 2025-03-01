import React from 'react'
import { Button, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Home from '@/pages/Home'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {

    const user = useSelector((state) => state.auth.user)
    
    return (
        <HStack display="flex" justifyContent="space-between" p={3} m={3} bg="gray.500" color="white">
            <Link to="./">My Library</Link>
            <HStack>
                <Link to="/home">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </HStack>
        </HStack>
    )
}

export default Navbar
