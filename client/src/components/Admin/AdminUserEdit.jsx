import { 
    Box, 
    Heading, 
    Main, 
    Button, 
    TextInput,
    TextArea,
    Text,
    Select
} from "grommet";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { patchUser } from "../../API/admin";
import styled from "styled-components";

const StyledTextInput = styled(TextInput)`
    background-color: #f8f8f8;
`;

const StyledTextArea = styled(TextArea)`
    background-color: #f8f8f8;
`;

const AdminUserEdit = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const details  = state;

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

    const SelectField = ({ name, control, text }) => {
        const [ selectItem, setSelectItem ] = useState(getValues("verified").toString());

        return (
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange }  }) => (
                    <Box direction="row" gap="medium" wrap>
                        <Text 
                            text
                            margin={{ top:"auto", bottom:"auto" }}
                        >{text}</Text>
                        <Select 
                            valueKey={{ key: "id", reduce: true }}
                            labelKey="status"
                            options={[
                                { status: "Verified", id: "true"},
                                { status: "Not Verified", id: "false"},
                            ]}
                            value={selectItem}
                            placeholder="Indicate Status of User"
                            closeOnChange
                            plain={false}
                            onChange={({ value: nextValue }) => {
                                setSelectItem(nextValue);
                                onChange(nextValue === "true" ? true : false);
                            }}
                        />
                    </Box>
                )}
            />
        );
    };

    const { control, reset, getValues } = useForm({
        defaultValues: {
            id: details.id,
            username: details.username,
            email: details.email,
            verified: details.verified,
            accountType: details.accountType,
        },
    });
    
    const onSave = () => {
        const updateData = getValues();
        updateData.accountType = parseInt(updateData.accountType, 10);
        patchUser({ ...updateData })
        navigate("/", { replace: true });
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
                Edit User
            </Heading>
            <Main margin={{ top: "2em", left: "10%", right: "10%" }} gap="medium">
                <EditField name="username" control={control} text="Username" />
                <EditField name="email" control={control} text="Email" />
                <EditField name="accountType" control={control} text="Account Type" />
                <SelectField name="verified" control={control} text="Verified Status" />
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

export default AdminUserEdit;