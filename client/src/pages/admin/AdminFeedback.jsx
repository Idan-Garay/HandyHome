import React, { useEffect, useState } from "react";
import { Heading } from "grommet";
import { getFeedbacks } from "../../API/admin";
import "../../App.css";

const AdminFeedback = () => {
    const [ feedbacks, setFeedback ] = useState([]);

  useEffect(() => {
    getFeedbacks().then(res => {
        setFeedback(res);
    })
  },[])

  const renderFeedbacks = () => {
        if (!feedbacks) {
            return (
                <tr>
                    <td>Loading feedbacks...</td>
                </tr>
            );
      };
        if (feedbacks.length === 0) {
            return (
            <tr>
                <td>No feedbacks available</td>
            </tr>
            );
        };

        return feedbacks.map((feedback, index) => {
            return <tr className="table-data-list" key={index} >
                        <td className="number">{feedback.id}</td>
                        <td>{feedback.description}</td>
                        <td>{feedback.rates}</td>
                        <td className="number">{feedback.OrderId}</td>
                    </tr>
        })
  }

  return (
    <div className="container">
      <Heading 
            alignSelf="center"
            margin={{bottom:"medium",top:"medium"}}
            fill
        >Feedback List
      </Heading>
      <div className="table-list">
        <table className="table">
          <thead className="table-header">
            <tr>
              <td>ID</td>
              <td>Description</td>
              <td>Rates</td>
              <td>Order ID</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody className="table-data">
            {renderFeedbacks()}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminFeedback;