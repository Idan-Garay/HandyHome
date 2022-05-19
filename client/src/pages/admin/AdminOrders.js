import React, { useEffect, useState } from "react";
import { getOrders } from "../../API/admin";
import { Heading } from "grommet";
import "../../App.css";

const Displayorders = ({ id, description, price, status, contactNo }) => {
  return (
    <tr className="table-data-list">
      <td className="number">{id}</td>
      <td>{description}</td>
      <td>{contactNo}</td>
      <td className="number">Php {price.toFixed(2)}</td>
      <td className="number">{status}</td>
    </tr>
  );
}

const AdminOrders = () => {
  const [ orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().then(res => {
      setOrders(res);
    })
  },[])

  const renderOrders = () => {
      if (!orders) {
        return (
          <tr>
            <td>Loading orders...</td>
          </tr>
        );
      }
      if (orders.length === 0) {
        return (
          <tr>
            <td>No orders available</td>
          </tr>
        );
      }

      return orders.map((order, index) => {
        return <Displayorders key={index} id={order.id} description={order.description} price={order.price} status={order.status} contactNo={order.contactNo} />
      })
        
  }

  return (
    <div className="container">
      <Heading 
            alignSelf="center"
            margin={{bottom:"medium",top:"medium"}}
            fill
        >Order List
      </Heading>
      <div className="table-list">
        <table className="table">
          <thead className="table-header">
            <tr>
              <td>ID</td>
              <td>Description</td>
              <td>Contact No</td>
              <td>Price</td>
              <td>Status</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody className="table-data">
            {renderOrders()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrders;
