// import styled from "styled-components"
import GlobalStyles from "./styles/GlobalStyles"
// import Button from "./ui/Button"
// import Input from "./ui/Input"
// import Heading from "./ui/Heading"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Cabins from "./pages/Cabins"
import Users from "./pages/Users"
import Settings from "./pages/Settings"
import Account from "./pages/Account"
import Login from "./pages/Login"
import PageNotFound from "./pages/PageNotFound"
import AppLayout from "./ui/AppLayout"

// const StyledApp = styled.div`
//   background-color: orangered;
//   padding: 20px;
// `

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
            <Route path="account" element={<Account />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      {/* <StyledApp> */}
      {/* </StyledApp> */}
    </>
  )
}

export default App
