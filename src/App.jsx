import Register from "./pages/Register"
import { Routes, Route, Link } from "react-router-dom"
import { Text, Tab, Tabs, TabList, Box } from "@chakra-ui/react"

function App() {
  return (
    <Box>
      <Text fontSize={"3xl"} fontWeight={"bold"} color={"red.400"}>
        Learning React.Js!
      </Text>
      <hr />
      <Tabs variant="enclosed">
        <TabList>
          <Tab>
            <Link to="Register">Register</Link>
          </Tab>
        </TabList>
      </Tabs>
      <Routes>
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Box>
  )
}

export default App
