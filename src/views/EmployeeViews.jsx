import { Outlet, Route, Routes } from "react-router-dom"
import { EmployeeNav } from "../components/Nav/EmployeeNav.jsx"
import { Welcome } from "../components/Welcome/Welcome.jsx"
import { TicketList } from "../components/Tickets/TicketList.jsx"
import { EmployeesList } from "../components/Employees/EmployeesList.jsx"
import { EmployeeDetails } from "../components/Employees/EmployeeDetails.jsx"
import { CustomersList } from "../components/Customers/CustomersList.jsx"
import { CustomerDetails } from "../components/Customers/CustomerDetails.jsx"
import { EmployeeEdit } from "../components/Forms/EmployeeEdit.jsx"


export const EmployeeViews = ({currentUser}) => {
    return(
        <Routes>
        <Route path="/" element={
            <>
            <EmployeeNav/>
            <Outlet/>
            </>
            }>
            <Route index element={<Welcome/>}/>
            <Route path="tickets" element={<TicketList currentUser={currentUser}/>} /> 
            <Route path="employees">
              <Route index element={<EmployeesList/>}/>
              <Route path=":employeeId" element={<EmployeeDetails/>}/>
            </Route>
            <Route path="customers"> 
              <Route index element={<CustomersList/>}/>
              <Route path=":customerId" element={<CustomerDetails/>}/>
            </Route>
            <Route path="profile" element={<EmployeeEdit currentUser={currentUser}/>}/>
          </Route>
      </Routes>  
    )
}