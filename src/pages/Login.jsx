import { Button, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch()
    const handleLogin = () => {
        dispatch()
    }
    // email handle krna hai
    return (
        <VStack>
            <h1>Login</h1>
            <Input type='text' value={email} placeholder='Email' onSubmit={(e) => setEmail(e.target.value)}/>
            <Input type='password' value={password} placeholder='Password' onSubmit={(e) => setPassword(e.target.value)}/>
            <Button onClick={handleLogin}>Login</Button>
        </VStack>
    )
}

export default Login
