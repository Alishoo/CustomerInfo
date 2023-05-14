import React, { useEffect, useState } from 'react'
import axios from "axios";


const Customer = () => {
  const [customers, setCuctomers] = useState([])

  useEffect(()=>{
    const fetchAllCustomers = async () => {
      try{
        const res = await axios.get("http://localhost:8800/customer");
        setCuctomers(res.data);
      }catch(err){
        console.log(err);
      }
    }
    fetchAllCustomers();
  }, [])
  

  return (
    <div>
      <h1> Al Najm Al raed customers</h1>
      <div className="customers">
        {customers.map((customer) => (
          <div className="customer" key={customer.id}>
            <h2>{customer.name}</h2>
            <h2>{customer.phoneNumber}</h2>
            <h2>{customer.address}</h2>
            <h2>{customer.age}</h2>
            <h2>{customer.gender}</h2>
            
            <p>===================</p>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Customer