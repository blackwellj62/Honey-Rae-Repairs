import { useEffect, useState } from "react";
import { getAllTickets } from "../../Services/ticketService.jsx";
import "./Tickets.css";
import { Ticket } from "./Ticket.jsx";
import { TicketFilterBar } from "./TicketFilterBar.jsx";


export const TicketList = () => {
    const [allTickets, setAllTickets] = useState([]);
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);
    const [filteredTickets, setFilteredTickets] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    getAllTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray);
      
    }); 
  }, []); //ONLY runs on initial render of component

  useEffect(()=>{
      if (showEmergencyOnly === true){
        const emergencyTickets = allTickets.filter(ticket => ticket.emergency === true)
        setFilteredTickets(emergencyTickets)
      } else {
        setFilteredTickets(allTickets)
      }
  }, [showEmergencyOnly, allTickets])

  useEffect(()=>{
    const foundTickets = allTickets.filter(ticket => 
        ticket.description.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
        setFilteredTickets(foundTickets)
  },[searchTerm, allTickets])

  return (
    <div className="tickets-container">
      <h2>Tickets</h2>
        < TicketFilterBar setShowEmergencyOnly={setShowEmergencyOnly} 
        setSearchTerm={setSearchTerm}/>
      <article className="tickets">
        {filteredTickets.map((ticketObj) => {
          return (
            <Ticket ticket={ticketObj} key={ticketObj.id}/>
          );
        })}
      </article>
    </div>
  );
};
