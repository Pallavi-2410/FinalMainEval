import { login, logout } from '@/redux/actions/authActions';
import { Button, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch()
    const handleRegister = () => {
        dispatch(login(email, password));
    }
    // email handle krna hai
    return (
        <VStack w="50%" margin="auto">
            <h1>Register</h1>
            <Input type='text' value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            <Input type='password' value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={handleRegister}>Register</Button>
        </VStack>
    )
}

export default Register






