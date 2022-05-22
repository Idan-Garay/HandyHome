import React, { useEffect, useState } from "react";
import { deleteUser, getUsers } from "../../API/admin";
import { Box, Heading, Text, Button } from "grommet";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import AdminModal from "../../components/Admin/AdminModal";

const DisplayUsers = ({ id, username, email, verified, accountType }) => {
  const [ openModal, setOpenModal ] = useState(false);
  const navigate = useNavigate();

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      padding: 0,
      width: '50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const handleOpen = () => {
    setOpenModal(true)
  }

  const handleClose = () => {
    setOpenModal(false);
  }

  const onEdit = () => {
    navigate(`/users/edit/${id}`, { state: { id, username, email, verified, accountType } });
  }

  const onDelete = () => {
    deleteUser(id);
    setOpenModal(false);
    navigate(0);
  }

  return (
    <tr className="table-data-list">
      <td className="number">{id}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td className="number">{verified.toString()}</td>
      <td className="number">{accountType}</td>
      <td className="no-stretch">
        <Button primary margin={{right:"5px"}} label="Edit" onClick={onEdit} />
        <Button primary color="red" label="Delete" onClick={handleOpen}  />
        <AdminModal handleClose={handleClose} open={openModal} onDelete={onDelete} />
      </td>
    </tr>
  );
}

const Admin = () => {
  const [ users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(res => {
      res = res.filter(type => type.accountType != 2)
      setUsers(res);
    })
  },[])

  const renderUsers = () => {
      if (!users) {
        return (
          <tr>
            <td>Loading Users...</td>
          </tr>
        );
      }
      if (users.length === 0) {
        return (
          <tr>
            <td>No users available</td>
          </tr>
        );
      }

      return users.map((user, index) => {
        return <DisplayUsers key={index} id={user.id} username={user.username} email={user.email} verified={user.verified} accountType={user.accountType} />
      })
        
  }

  return (
    <div className="container">
      <Heading 
            alignSelf="center"
            margin={{bottom:"medium",top:"medium"}}
            fill
        >User List
      </Heading>
      <div className="table-list">
        <table className="table">
          <thead className="table-header">
            <tr>
              <td>ID</td>
              <td>Username</td>
              <td>Email</td>
              <td>Verified</td>
              <td>Account Type</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody className="table-data">
            {renderUsers()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
