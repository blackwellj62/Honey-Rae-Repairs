import { useEffect, useState } from "react";
import { getNonStaffUsers } from "../../Services/userService.jsx";
import { User } from "../../Users/User.jsx";
import "./Customers.css"

export const CustomersList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getNonStaffUsers().then((customerArray) => {
      setCustomers(customerArray);
    });
  }, []);

  return (
    <div className="customers">
      {customers.map((customerObj) => {
        return ( < User user={customerObj}/>
          
        );
      })}
    </div>
  );
};
