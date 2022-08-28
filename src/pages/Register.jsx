import { useState } from "react"
// import validator from "validator"
import {
  Heading,
  Stack,
  Radio,
  RadioGroup, // for Password
  Text,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  useDisclosure,
} from "@chakra-ui/react"

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"

const Register = () => {
  const [show, setShow] = useState(false) // for password
  const handleClick = () => setShow(!show) // for password
  const { isOpen, onOpen, onClose } = useDisclosure() // open close modal
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  // const [emailError, setEmailError] = useState("")
  const [password, setPassword] = useState("")
  const [gender, setGender] = useState("")

  const submitRegister = () => {
    setUsername(username)
    setEmail(email)
    setPassword(password)
    setGender(gender)
    onOpen()

    // function emailValidation() {
    //   setEmail(email)
    //   return /\S+@\S+\.\S+/.test(email)
    // }
  }

  // const emailValidation = (event) => {
  //   setEmail(email)
  //   var emailError = event.target.value

  //   if (validator.isEmail(emailError)) {
  //     setEmailError("Valid Email")
  //   } else {
  //     setEmailError("Enter Valid Email !")
  //   }
  // }

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box
        mt="150px"
        align="center"
        justifyContent="center"
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderColor="black"
        borderRadius="8"
        textAlign="right"
        py="4"
        mr="12"
      >
        <Heading align="left">Register</Heading>
        <br />
        <FormControl isRequired>
          <FormLabel>Username</FormLabel>
          <Input
            type="username"
            // value={username}
            onChange={(username) => setUsername(username.target.value)}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              //   value={password}
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              onChange={(password) => setPassword(password.target.value)}
            />
            <InputRightElement width={"4.5rem"}>
              <Button h="1.75 rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl mt="5px">
          <FormLabel>Gender</FormLabel>
          <RadioGroup onChange={setGender} value={gender}>
            <Stack direction="row">
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          onClick={submitRegister}
          colorScheme="teal"
          variant="solid"
          mt="3"
          width="full"
        >
          Register
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Result</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Username : {username}</Text>
              <Text>Email : {email}</Text>
              <Text>Password : {password}</Text>
              <Text>Gender : {gender}</Text>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blackAlpha" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* <FormControl>
          <FormLabel>Gender</FormLabel>
        </FormControl> */}
      </Box>
    </Flex>
  )
}

export default Register
