import React, { useEffect, useState } from "react";
import { Heading, Button } from "grommet";
import { getFeedbacks, deleteFeedback } from "../../API/admin";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import AdminModal from "../../components/Admin/AdminModal";

const DisplayFeedback = ({ id, description, rates, OrderId }) => {
  const [ openModal, setOpenModal ] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpenModal(true);
  }

  const handleClose = () => {
    setOpenModal(false);
  }

  const onEdit = () => {
    navigate(`/feedbacks/edit/${id}`, { state: { id, description, rates, OrderId } });
  }

  const onDelete = () => {
    deleteFeedback(id);
    setOpenModal(false);
    navigate(0);
  }

  return (
    <tr className="table-data-list">
      <td className="number">{id}</td>
      <td>{description}</td>
      <td className="number">{rates}</td>
      <td className="number">{OrderId}</td>
      <td className="no-stretch">
        <Button primary margin={{right:"5px"}} label="Edit" onClick={onEdit} />
        <Button primary color="red" label="Delete" onClick={handleOpen} />
        <AdminModal open={openModal} handleClose={handleClose} onDelete={onDelete} />
      </td>
    </tr>
  );
}

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
            return <DisplayFeedback key={index} id={feedback.id} description={feedback.description} rates={feedback.rates} OrderId={feedback.OrderId} />
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