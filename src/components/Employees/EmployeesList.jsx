import { useEffect, useState } from "react";
import "./Employees.css";
import { getStaffUsers } from "../../Services/userService.jsx";
import { User } from "../../Users/User.jsx";
import { Link } from "react-router-dom";

export const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getStaffUsers().then((staffArray) => {
      setEmployees(staffArray);
    });
  }, []);

  return (
    <div className="employees">
      {employees.map((employeeObj) => {
        return( 
          <Link to={`/employees/${employeeObj.id}`} key={employeeObj.id}>
            <User user={employeeObj}/>
          </Link>
            )
      })}
    </div>
  );
};
