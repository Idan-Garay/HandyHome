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
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { patchProfile } from "../../API/admin";
import styled from "styled-components";
import ReactAvatar from "react-avatar-edit";

const StyledTextInput = styled(TextInput)`
  background-color: #f8f8f8;
`;

const StyledTextArea = styled(TextArea)`
  background-color: #f8f8f8;
`;

const StyledBox = (props) => (
    <Box
      direction="row-responsive"
      gap="small"
      height="4em"
      align="center"
      {...props}
    />
  );

const AdminProfilesEdit = ()  => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const details  = state;
    const [show, setShow] = useState(false);
    const [preview, setPreview] = useState(null);
    const [src, setSrc] = useState(details.picture);
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

    const EditField = ({ name, control, text, textArea = false }) => {
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
        const [ checkBox, setCheckbox ] = useState(details.services.split(","));
      
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

    const { control, reset, getValues, setValue } = useForm({
        defaultValues: {
            id: details.id,
            name: details.name,
            services: details.services,
            contactNo: details.contactNo,
            description: details.description,
            picture: details.picture,
            email: details.email,
            UserId: details.UserId,
            ProfileId: details.ProfileId
        },
    });
    
    const onSave = () => {
        setValue("picture", src);
        const updateData = getValues();
        updateData.services = updateData.services.toString();
        patchProfile({ ...updateData, picture: src })
        navigate(-1, { replace: true });
    }

    const onCancel = () => {
        reset();
        navigate(-1);
    }

    return (
        <div className="container">
            <Heading
                alignSelf="center"
                margin={{bottom:"medium",top:"medium"}}
                fill
            >
                Edit Profile
            </Heading>
            <StyledBox margin={{ top: "2em", left: "10%", right: "10%" }} height="small" align="end">
                
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
                <Text>Edit Avatar</Text>
            </StyledBox>
            <Main margin={{ top: "2em", left: "10%", right: "10%" }} gap="medium">
                <EditField name="name" control={control} text="Name" />
                <EditField name="email" control={control} text="Email" />
                <EditField name="description" control={control} text="Description" textArea />
                <EditField name="contactNo" control={control} text="Contact No" />
                <EditField name="UserId" control={control} text="User ID" />
                <ServicesField name="services" control={control} text="Services" />

                <Box>
                    <Button plain label="Cancel" onClick={onCancel} />
                </Box>
                <Box>
                    <Button primary label="Save" onClick={onSave} />
                </Box>
            </Main>
        </div>

    )
}

export default AdminProfilesEdit;