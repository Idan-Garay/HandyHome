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
import { patchOrder } from "../../API/admin";
import styled from "styled-components";

const StyledTextInput = styled(TextInput)`
  background-color: #f8f8f8;
`;

const StyledTextArea = styled(TextArea)`
  background-color: #f8f8f8;
`;

const AdminOrdersEdit = ()  => {
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

    const StatusField = ({ name, control, text }) => {
        const [ selectItem, setSelectItem ] = useState(getValues("status"));

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
                            options={["Pending","Rejected","Accepted","Completed"]}
                            value={selectItem}
                            closeOnChange
                            plain={false}
                            onChange={({ option }) => {
                                setSelectItem(option)
                                onChange(option)
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
            description: details.description,
            price: details.price,
            status: details.status,
            contactNo: details.contactNo,
        },
    });
    
    const onSave = () => {
        const updateData = getValues();
        patchOrder({ ...updateData })
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
                Edit Order
            </Heading>
            <Main margin={{ top: "2em", left: "10%", right: "10%" }} gap="medium">
                <EditField name="description" control={control} text="Description" textArea />
                <EditField name="contactNo" control={control} text="Contact No" />
                <EditField name="price" control={control} text="Price" />
                <StatusField name="status" control={control} text="Status of Order" />
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

export default AdminOrdersEdit;