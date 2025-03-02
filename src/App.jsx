import "./App.css"
import { CustomersList } from "./components/Customers/CustomersList.jsx"
import { EmployeesList } from "./components/Employees/EmployeesList.jsx"
import { NavBar } from "./components/Nav/NavBar.jsx"
import { TicketList } from "./components/Tickets/TicketList.jsx"
import { Routes, Route, Outlet } from "react-router-dom"
import { Welcome } from "./components/Welcome/Welcome.jsx"
import { CustomerDetails } from "./components/Customers/CustomerDetails.jsx"
import { EmployeeDetails } from "./components/Employees/EmployeeDetails.jsx"



export const App = () => {
  return( 
    <Routes>
      <Route path="/" element={
        <>
        <NavBar/>
        <Outlet/>
        </>
        }>
        <Route index element={<Welcome/>}/>
        <Route path="tickets" element={<TicketList/>} /> 
        <Route path="employees">
          <Route index element={<EmployeesList/>}/>
          <Route path=":employeeId" element={<EmployeeDetails/>}/>
        </Route>
        <Route path="customers"> 
          <Route index element={<CustomersList/>}/>
          <Route path=":customerId" element={<CustomerDetails/>}/>
        </Route>
      </Route>
    </Routes>
  )
}
  
