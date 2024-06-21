import { Button, FormControl, FormLabel, Input, InputRightElement, Show, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

function Login() {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState()
    const checkPass=()=>setShowp(!Show)
    const handleClick=()=>setShowp(!Show);
    // const[show,setShow]=useState(false);

    // const handleClick=()=>setShow(!show);
    // const submitHandler=()=>{};

    // const submitHandler=()=>{};

    const submitReq=()=>{};


  return (
    <div className='form-container'>
    <VStack spacing="5px">
        <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
        <Input
        placeholder="Enter Your Email"  backgroundColor={'white'}
        onChange={(e)=>setEmail(e.target.value)}
       />
        </FormControl>
  <FormControl id="password">
    <FormLabel>Password</FormLabel>
    <Input type={Show?"text":"password"}
           placeholder='Enter Your Password'  backgroundColor={'white'}
           onChange={(e)=>setPassword(e.target.value)}/>
           {/* <InputRightElement width="4.5rem">
           <Button h="1.75rem" size="5m" onClick={handleClick}>
            {Show ? "Hide" :"Show"}
            
            </Button>           </InputRightElement> */}
                    
  </FormControl>
  

    <Button
    colorScheme='blue'
    width="100%"
    style={{marginTop:15}}
    onClick={submitReq}>   
    Login
    </Button>
    <Button
    variant="solid"
    colorScheme="red"
    width="100%"
    onClick={()=>{
        setEmail("guest@gmail.com");
        setPassword("guest@123");
    }}
    
    >Get Guest User Credentials</Button>
    </VStack></div>
  )
  
}

export default Login
