import { Button, Tab, Tabs, Heading, Image } from "grommet";
import React, { useEffect, useState } from "react";
import { getValidations, getPayments, deletePayment } from "../../API/admin";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import AdminModal from "../../components/Admin/AdminModal";
import { Buffer } from "buffer";

const DisplayPayments = ({ id, UserId, OrderId, isAccepted }) => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const onEdit = () => {
    navigate(`/requests/payments/edit/${id}`, {
      state: { id, UserId, OrderId, isAccepted },
    });
  };

  const onDelete = () => {
    deletePayment(id);
    setOpenModal(false);
    navigate(0);
  };

  return (
    <tr className="table-data-list">
      <td className="number">{id}</td>
      <td className="number">{UserId}</td>
      <td className="number">{OrderId}</td>
      <td className="number">{isAccepted.toString()}</td>
      <td className="no-stretch">
        <Button
          primary
          margin={{ right: "5px" }}
          label="Edit"
          onClick={onEdit}
        />
        <Button primary color="red" label="Delete" onClick={handleOpen} />
        <AdminModal
          handleClose={handleClose}
          open={openModal}
          onDelete={onDelete}
        />
      </td>
    </tr>
  );
};

const DisplayValidations = ({ id, type, name, image }) => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  console.log(image);
  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const onEdit = () => {
    navigate(`/validations/edit/${id}`, { state: { id, type, name, image } });
  };

  const onDelete = () => {
    deleteValidation(id);
    setOpenModal(false);
    navigate(0);
  };
  const imgSrc =
    `data:${type}/;base64,` + Buffer.from(image).toString("base64");

  return (
    <tr className="table-data-list">
      <td className="number">{id}</td>
      <td>{type}</td>
      <td>
        <Image src={imgSrc} fill height="small" />
      </td>
      <td className="no-stretch">
        <Button
          primary
          margin={{ right: "5px" }}
          label="Edit"
          onClick={onEdit}
        />
        <Button primary color="red" label="Delete" onClick={handleOpen} />
        <AdminModal
          handleClose={handleClose}
          open={openModal}
          onDelete={onDelete}
        />
      </td>
    </tr>
  );
};

const AdminRequests = () => {
  const [profilevalidation, setProfileValidation] = useState([]);
  const [paymentvalidation, setPaymentValidation] = useState([]);

  useEffect(() => {
    getValidations().then((res) => {
      setProfileValidation(res);
    });
    getPayments().then((res) => {
      setPaymentValidation(res);
    });
  }, []);

  const renderHeader = (table) => {
    return table == "Profile" ? (
      <thead className="table-header">
        <tr>
          <td>ID</td>
          <td>Type</td>
          <td>Image</td>
          <td>Actions</td>
        </tr>
      </thead>
    ) : (
      <thead className="table-header">
        <tr>
          <td>ID</td>
          <td>User ID</td>
          <td>Order ID</td>
          <td>Status</td>
          <td>Actions</td>
        </tr>
      </thead>
    );
  };

  const renderProfileValidation = () => {
    if (!profilevalidation) {
      return (
        <tr>
          <td>Loading Profiles...</td>
        </tr>
      );
    }
    if (profilevalidation.length === 0) {
      return (
        <tr>
          <td>No profile validations available</td>
        </tr>
      );
    }

    return profilevalidation.map((validation, index) => {
      return (
        <DisplayValidations
          key={index}
          id={validation.id}
          type={validation.type}
          name={validation.name}
          image={validation.image}
        />
      );
    });
  };

  const renderPaymentValidation = () => {
    if (!paymentvalidation) {
      return (
        <tr>
          <td>Loading Payments...</td>
        </tr>
      );
    }
    if (paymentvalidation.length === 0) {
      return (
        <tr>
          <td>No payments available</td>
        </tr>
      );
    }

    return paymentvalidation.map((payment, index) => {
      return (
        <DisplayPayments
          key={index}
          id={payment.id}
          UserId={payment.UserId}
          OrderId={payment.OrderId}
          isAccepted={payment.isAccepted}
        />
      );
    });
  };

  return (
    <div className="container">
      <Heading
        alignSelf="center"
        margin={{ bottom: "medium", top: "medium" }}
        fill
      >
        Validations
      </Heading>
      <Tabs alignControls="center">
        <Tab title="Profile Validations">
          <table className="requests-table">
            {renderHeader("Profile")}
            <tbody className="table-data">{renderProfileValidation()}</tbody>
          </table>
        </Tab>
        <Tab title="Payment Validations">
          <table className="requests-table">
            {renderHeader("Payments")}
            <tbody className="table-data">{renderPaymentValidation()}</tbody>
          </table>
        </Tab>
      </Tabs>
    </div>
  );
};

export default AdminRequests;
