import { useState, useEffect } from "react";
import PetList from "./PetList";
import "./Employee.css";

export const Employee = () => {
  const API_BASE = "https://vet-app-0obi.onrender.com/";
  const [employeeData, setEmployeeData] = useState([]);
  
  const url = `${API_BASE}api/employees`;

  useEffect(() => {
    function fetchEmployee() {
      fetch((url))
       .then((response) => response.json())
       .then((data) => {
        setEmployeeData(data);
       })
    }
    fetchEmployee();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  

  return (
    employeeData.map(employee => {
      return(
        <article key={employee.id} className="employee">
          <h3>{employee.prefix} {employee.firstName} {employee.lastName}{employee.postfix && `, ${employee.postfix}`}</h3>
          <h4>{employee.title}</h4>
          <PetList 
            API_BASE={API_BASE} 
            employee={employee}
          />
          
        </article>
      )
    })
    
  );
};

export default Employee;
