import React, { useEffect, useState } from "react";
import { getUsers } from "../../API/admin";
import { Box, Heading, Text } from "grommet";
import "../../App.css";

const DisplayUsers = ({ id, username, email, verified, accountType }) => {
  return (
    <tr className="table-data-list">
      <td className="number">{id}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td className="number">{verified.toString()}</td>
      <td className="number">{accountType}</td>
    </tr>
  );
}

const Admin = () => {
  const [ users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(res => {
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
