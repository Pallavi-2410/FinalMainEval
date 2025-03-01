import { login } from '@/redux/actions/authActions';
import { Button, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch()
    const handleLogin = () => {
        dispatch(login(email, password));
    }
    // email handle krna hai
    return (
        <VStack w="50%" margin="auto">
            <h1>Login</h1>
            <Input type='text' value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
            <Input type='password' value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
            <Button onClick={handleLogin}>Login</Button>


            
        </VStack>
    )
}

export default Login
