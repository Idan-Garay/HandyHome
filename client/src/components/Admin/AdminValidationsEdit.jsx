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
import { patchPayment } from "../../API/admin";
import styled from "styled-components";

const StyledTextInput = styled(TextInput)`
  background-color: #f8f8f8;
`;

const StyledTextArea = styled(TextArea)`
  background-color: #f8f8f8;
`;

const AdminValidationsEdit = ()  => {
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
        const [ selectItem, setSelectItem ] = useState(getValues("isAccepted").toString());

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
                                { status: "Accepted", id: "true"},
                                { status: "Not Accepted", id: "false"},
                            ]}
                            value={selectItem}
                            placeholder="Indicate Status of Payment"
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
            UserId: details.UserId.toString(),
            OrderId: details.OrderId.toString(),
            isAccepted: details.isAccepted,
        },
    });
    
    const onSave = () => {
        const updateData = getValues();
        patchPayment({ ...updateData })
        navigate(-1, { replace: true });
    }

    const onCancel = () => {
        console.log(getValues());
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
                Edit Payment
            </Heading>
            <Main margin={{ top: "2em", left: "10%", right: "10%" }} gap="medium">
                <EditField name="UserId" control={control} text="User ID" />
                <EditField name="OrderId" control={control} text="Order ID" />
                <SelectField name="isAccepted" control={control} text="Status" />
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

export default AdminValidationsEdit;