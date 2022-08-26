import { useState } from "react"
import {
  Heading,
  Stack,
  Radio,
  RadioGrup,
  RadioInput,
  Text,
  Box,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  useDisclosure,
  RadioGroup, // for Password
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
  const [password, setPassword] = useState("")
  const [gender, setGender] = useState("")

  const submitRegister = () => {
    setUsername(username)
    setEmail(email)
    setPassword(password)
    setGender(gender)
    onOpen()
  }
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
            type="email"
            // value={email}
            onChange={(email) => setEmail(email.target.value)}
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

        <RadioGroup onChange={setGender} value={gender}>
          <Stack direction="row">
            <Radio value="Male">Male</Radio>
            <Radio value="Female">Female</Radio>
          </Stack>
        </RadioGroup>

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
