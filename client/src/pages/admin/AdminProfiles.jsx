import React, { useEffect, useState } from "react";
import { Heading, Image } from "grommet";
import { getProfiles } from "../../API/admin";
import "../../App.css";

const AdminProfiles = () => {
    const [ profiles, setprofiles] = useState([]);

  useEffect(() => {
    getProfiles().then(res => {
        setprofiles(res);
    })
  },[])

  const renderProfiles = () => {
        if (!profiles) {
            return (
                <tr>
                    <td>Loading Profiles...</td>
                </tr>
            );
      };
        if (profiles.length === 0) {
            return (
            <tr>
                <td>No profiles available</td>
            </tr>
            );
        };

        return profiles.map((profile, index) => {
            //profile.picture.data = URL.createObjectURL(profile.picture);
            return <tr className="table-data-list" key={index} >
                        <td className="number">{profile.id}</td>
                        <td>{profile.name}</td>
                        <td>{profile.services}</td>
                        <td className="number">{profile.contactNo}</td>
                        <td>{profile.description}</td>
                        <td></td>
                        <td>{profile.email}</td>
                        <td className="number">{profile.UserId}</td>
                        <td className="number">{profile.ProfileId}</td>
                    </tr>
        })
  }

  return (
    <div className="profile-container">
      <Heading 
            alignSelf="center"
            margin={{bottom:"medium",top:"medium"}}
            fill
        >Profile List
      </Heading>
      <div className="table-list">
        <table className="profile-table">
          <thead className="table-header">
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Services</td>
              <td>Contact No</td>
              <td>Description</td>
              <td>Picture</td>
              <td>Email</td>
              <td>User ID</td>
              <td>Profile ID</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody className="table-data">
            {renderProfiles()}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminProfiles;