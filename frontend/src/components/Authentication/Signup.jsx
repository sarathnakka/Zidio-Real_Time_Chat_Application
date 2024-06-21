import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

function Signup() {
    const [show,setShow]=useState(false);
    const [name,setName]=useState();
    const [email,setEmail]=useState();
   
    const [confirmpassword,setConfirmpassword]=useState();
    const [password,setPassword]=useState();;
    const [pic,setPic]=useState()

    const handleClick=()=>setShow(!show);
    const postDetails=(pics)=>{};
    const submitHandler=()=>{};

  return   <VStack spacing='5px' alignItems='flex-end' >
 
    <FormControl id='first-name' isRequired>
        <FormLabel >Name</FormLabel>
        <Input  backgroundColor={'white'} placeholder="Enter Your Name"  
               onChange={(e)=>setName(e.target.value)}
        />
    </FormControl>
    <FormControl id='email' isRequired>
        <FormLabel >Email</FormLabel>
        <Input backgroundColor={'white'}Color={'white'} placeholder="Enter Your Email"  
               onChange={(e)=>setEmail(e.target.value)}
        />
    </FormControl>
    <FormControl id='password' isRequired>
        <FormLabel >Password</FormLabel>
        <InputGroup>
        <Input type={show ?"text" : "password"}
               backgroundColor={'white'} placeholder="Enter Your Password"  
               onChange={(e)=>setPassword(e.target.value)}
        />
        <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="5m" onClick={handleClick}>
            {show ? "Hide" :"Show"}
        </Button>
        </InputRightElement>
        </InputGroup>
    </FormControl>
    <FormControl id='confirmpassword' isRequired>
        <FormLabel >Confirm Password</FormLabel>
        <InputGroup>
        <Input type={show ?"text" : "password"} placeholder="Confirm The Password"  
               backgroundColor={'white'}
               onChange={(e)=>setConfirmpassword(e.target.value)}
        />
        <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="5m" onClick={handleClick}>
            {show ? "Hide" :"Show"}
        </Button>
        </InputRightElement>
        </InputGroup>
    </FormControl>
    <FormControl id='pic' isRequired>
        <FormLabel >Profile Picture</FormLabel>
        <Input type="file"
        p={.5} 
        backgroundColor={'white'}
        accept='image/*'
        placeholder='Upload'
               onChange={(e)=>postDetails(e.target.files[0])}
        />
    </FormControl>
    <Button
    colorScheme='blue'
    width="100%"
    style={{marginTop:15}}
    onClick={submitHandler}>
    
        Sign UP
    </Button>
  </VStack>
   
  
}

export default Signup
