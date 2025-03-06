import { Outlet, Route, Routes } from "react-router-dom"
import { Welcome } from "../components/Welcome/Welcome.jsx"
import { CustomerNav } from "../components/Nav/CustomerNav.jsx"
import { TicketList } from "../components/Tickets/TicketList.jsx"
import { TicketForm } from "../components/Forms/TicketForm.jsx"

export const CustomerViews = ({currentUser}) => {
    return(
        <Routes>
          <Route path="/" element={
            <>
            <CustomerNav/>
            <Outlet/>
            </>
          }>
            <Route index element={<Welcome/>}/>
            <Route path="tickets" >
            <Route index element={<TicketList currentUser={currentUser}/>}/>
            <Route path="create" element={<TicketForm currentUser={currentUser}/>}/>
            </Route>
            </Route >  
        </Routes>
    )
}