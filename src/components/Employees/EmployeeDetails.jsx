import './Employees.css'
import { getEmployeeByUserId } from '../../Services/employeeService.jsx'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export const EmployeeDetails = () => {
    const [employee, setEmployee] = useState({})
    const {employeeId} = useParams()

    useEffect(()=>{
        getEmployeeByUserId(employeeId).then(data => {
            const employeeObj = data[0]
            setEmployee(employeeObj)
        })
    },[employeeId])

    return(
        <section className="employee">
            <header className="employee-header">
                {employee.user?.fullName}
            </header>
            <div >
                <span className="employee-info"> Email : </span>
                {employee.user?.email}
            </div>
            <div>
                <span className="employee-info"> Specialty : </span>
                    {employee.specialty}
            </div>
            <div>
                <span className="employee-info"> Rate : </span>
                {employee.rate}
            </div>
            <footer >
                <span className="employee-footer">Currently working on {employee.employeeTickets?.length} tickets.</span>
            </footer>
        </section>
    )
}