import React, { useEffect, useState } from "react";
import { Button, Heading, Image, Avatar } from "grommet";
import { User as UserIcon } from "grommet-icons";
import { getProfiles, deleteProfile } from "../../API/admin";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import AdminModal from "../../components/Admin/AdminModal";

const DisplayProfiles = ({
  id,
  name,
  contactNo,
  description,
  services,
  picture,
  email,
  UserId,
  ProfileId,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const onEdit = () => {
    navigate(`/profiles/edit/${id}`, {
      state: {
        id,
        name,
        contactNo,
        description,
        services,
        picture,
        email,
        UserId,
        ProfileId,
      },
    });
  };

  const onDelete = () => {
    deleteProfile(id);
    setOpenModal(false);
    navigate(0);
  };

  const srcImg = `data:image/jpg;base64,` + picture;

  return (
    <tr className="table-data-list">
      <td className="number">{id}</td>
      <td>{name}</td>
      <td>{services}</td>
      <td className="number">{contactNo}</td>
      <td>{description}</td>
      <td>
        <Image src={srcImg} fill />
      </td>
      <td>{email}</td>
      <td className="number">{UserId}</td>
      <td className="number">{ProfileId}</td>
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

const AdminProfiles = () => {
  const [profiles, setprofiles] = useState([]);

  useEffect(() => {
    getProfiles().then((res) => {
      res = res.filter((res) => res.UserId != 3);
      setprofiles(res);
    });
  }, []);

  const renderProfiles = () => {
    if (!profiles) {
      return (
        <tr>
          <td>Loading Profiles...</td>
        </tr>
      );
    }
    if (profiles.length === 0) {
      return (
        <tr>
          <td>No profiles available</td>
        </tr>
      );
    }

    return profiles.map((profile, index) => {
      return (
        <DisplayProfiles
          key={index}
          id={profile.id}
          name={profile.name}
          contactNo={profile.contactNo}
          description={profile.description}
          services={profile.services}
          picture={profile.picture}
          email={profile.email}
          UserId={profile.UserId}
          ProfileId={profile.ProfileId}
        />
      );
    });
  };

  return (
    <div className="profile-container">
      <Heading
        alignSelf="center"
        margin={{ bottom: "medium", top: "medium" }}
        fill
      >
        Profile List
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
          <tbody className="table-data">{renderProfiles()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProfiles;
