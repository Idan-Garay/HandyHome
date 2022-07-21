import React, { useState } from "react";
import { User as UserIcon, Edit as EditIcon } from "grommet-icons";
import { Box, Button, Avatar, Heading, Main, Stack, Image } from "grommet";
import { useForm } from "react-hook-form";
import { patchProfile } from "../../API/profiles";

import ProfileField from "../../components/Profile/ProfileField";
import ServicesField from "../../components/Profile/ServicesField";
import UploadPicture from "../../components/Profile/UploadPicture";
import { StyledBox } from "../../components/Form/Index";

const EditProfile = ({
  setIsEdit,
  picture,
  description,
  name,
  email,
  contactNo,
  services,
  id,
}) => {
  const [show, setShow] = useState(false);
  const [preview, setPreview] = useState(null);
  const [editProfileFields, setEditProfileFields] = useState({
    name: name,
    contactNo: contactNo,
    services: services,
    description: description,
    picture: picture,
    email: email,
  });
  const imgSrc = "data:image/jpg;base64," + picture;
  const [src, setSrc] = useState(imgSrc);
  const onCrop = (preview) => setPreview(preview);
  const onClose = () => setPreview(null);
  const onUpload = () => {
    setSrc(preview);
    setPreview(null);
    setShow(false);
  };

  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 71680) {
      alert("File is too big!");
      elem.target.value = "";
    }
  };

  const { control, reset, getValues, setValue } = useForm({
    defaultValues: editProfileFields,
  });

  const onSave = () => {
    setValue("picture", src);
    const updateData = getValues();
    updateData.services = updateData.services.toString();
    patchProfile({ ...updateData, picture: src, id });
    setIsEdit(false);
  };

  const onCancel = () => {
    reset();
    setIsEdit(false);
  };

  return (
    <>
      <Box direction="column" pad="small" margin={{ top: "2em" }}>
        <StyledBox height="small" align="end">
          <Box
            direction="row"
            gap="medium"
            fill="horizontal"
            pad={{ left: "3em" }}
          >
            <Box>
              <Stack anchor="bottom-right">
                <Avatar className="b-1" size="large" pad="3px">
                  {src ? (
                    <Image src={imgSrc} alt="profile pic" height="110%" />
                  ) : (
                    <UserIcon color="black" />
                  )}
                </Avatar>
                <Button
                  primary
                  hoverIndicator
                  onClick={() => {
                    setShow(true);
                  }}
                  icon={<EditIcon color="black" size="12" />}
                />
                {show &&
                  UploadPicture(
                    setShow,
                    onCrop,
                    onClose,
                    onBeforeFileLoad,
                    src,
                    preview,
                    onUpload
                  )}
              </Stack>
            </Box>
            <Box align="start" width="large">
              <Heading level={4}>{editProfileFields.name}</Heading>
            </Box>
            <Box direction="row" justify="center" gap="small">
              <Box pad="xsmall">
                <Button plain label="Cancel" onClick={onCancel} />
              </Box>
              <Box>
                <Button primary label="Save" onClick={onSave} />
              </Box>
            </Box>
          </Box>
        </StyledBox>

        <Main margin={{ top: "2em" }} gap="medium">
          <ProfileField name="name" control={control} text="Name" />
          <ServicesField name="services" control={control} text="Services" />
          <ProfileField
            name="description"
            control={control}
            text="Description"
            textArea
          />
        </Main>
      </Box>
    </>
  );
};

export default EditProfile;
