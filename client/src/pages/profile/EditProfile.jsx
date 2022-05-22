import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User as UserIcon, Edit as EditIcon } from "grommet-icons";
import {
  Box,
  Text,
  Button,
  Avatar,
  Heading,
  Main,
  TextInput,
  TextArea,
  Layer,
  Stack,
  CheckBoxGroup
} from "grommet";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import { patchProfile } from "../../API/profiles";

import ReactAvatar from "react-avatar-edit";

const StyledBox = (props) => (
  <Box
    direction="row-responsive"
    gap="small"
    height="4em"
    align="center"
    {...props}
  />
);

const StyledTextInput = styled(TextInput)`
  background-color: #f8f8f8;
`;

const StyledTextArea = styled(TextArea)`
  background-color: #f8f8f8;
`;

const ProfileField = ({ name, control, text, textArea = false }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Box direction="row" gap="medium" wrap>
          <Text text>{text}</Text>
          {textArea ? (
            <StyledTextArea rows={5} resize={false} {...field} />
          ) : (
            <StyledTextInput {...field} />
          )}
        </Box>
      )}
    />
  );
};

const ServicesField = ({control, name, text}) => {
  const [ checkBox, setCheckbox ] = useState([]);

  return (
    <Controller 
      name={name}
      control={control}
      render={({ field: { onChange } }) => (
        <Box>
          <Text alignSelf="start" margin={{bottom:"10px"}} >{text}</Text>
          <CheckBoxGroup 
            valueKey="id"
            labelKey="category"
            options={[
              { category: "Plumbing", id: "Plumbing" },
              { category: "Carpentry", id: "Carpentry" },
              { category: "Masonry", id: "Masonry" },
              { category: "Gardening", id: "Gardening" },
              { category: "Housekeeping", id: "Housekeeping" },
              { category: "Babysitting", id: "Babysitting" },
            ]}
            value={checkBox}
            onChange={({ value: nextValue, option }) => {
              setCheckbox(nextValue);
              onChange(nextValue);
            }}
          />
        </Box>
      )}
    />
  );
}

const EditProfile = ({ onEdit, setIsEdit, id }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [preview, setPreview] = useState(null);
  const [editProfileFields, setEditProfileFields] = useState({
    name: "Full name",
    contactNo: "096342341324",
    services: "masonry,gardening",
    description: "Able to fix walls and clean gardens",
    picture: "",
    email: "handyman@gmail.com",
  });
  const [src, setSrc] = useState(editProfileFields.picture);
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
                    <img src={src} alt="profile pic" />
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
                {show && (
                  <Layer
                    onEsc={() => setShow(false)}
                    onClickOutside={() => setShow(false)}
                  >
                    <Box pad="medium">
                      <Heading level={3} textAlign="center">
                        Edit Image
                      </Heading>
                      <Box
                        direction="row"
                        gap="small"
                        background="white"
                        pad="small"
                        round
                      >
                        <ReactAvatar
                          width={200}
                          imageHeight={150}
                          onCrop={onCrop}
                          onClose={onClose}
                          onBeforeFileLoad={onBeforeFileLoad}
                          src={src}
                        />
                        <Box
                          height="small"
                          width="small"
                          justify="center"
                          align="center"
                        >
                          {preview && <img src={preview} alt="Preview" />}
                        </Box>
                      </Box>
                      <Button primary label="Upload" onClick={onUpload} />
                    </Box>
                  </Layer>
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
