import React, { useState } from "react";
import EditProfile from "../../../pages/profile/EditProfile";
import UserProfile from "./UserProfile";

const MyDetails = ({ myDetailsData }) => {
  const [isEdit, setIsEdit] = useState(true);
  const onEdit = () => setIsEdit(true);

  const toPassProps = {
    onEdit: onEdit,
    setIsEdit,
  };

  return (
    <div>
      {isEdit ? (
        <EditProfile {...toPassProps} {...myDetailsData} />
      ) : (
        <UserProfile {...toPassProps} {...myDetailsData} />
      )}
    </div>
  );
};

export default MyDetails;
