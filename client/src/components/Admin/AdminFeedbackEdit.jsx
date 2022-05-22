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
import { patchFeedback } from "../../API/admin";
import styled from "styled-components";

const StyledTextInput = styled(TextInput)`
  background-color: #f8f8f8;
`;

const StyledTextArea = styled(TextArea)`
  background-color: #f8f8f8;
`;

const AdminFeedbackEdit = ()  => {
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

    const { control, reset, getValues } = useForm({
        defaultValues: {
            id: details.id,
            description: details.description,
            rates: details.rates,
            OrderId: details.OrderId,
        },
    });
    
    const onSave = () => {
        const updateData = getValues();
        patchFeedback({ ...updateData })
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
                Edit Feedback
            </Heading>
            <Main margin={{ top: "2em", left: "10%", right: "10%" }} gap="medium">
                <EditField name="description" control={control} text="Description" textArea />
                <EditField name="rates" control={control} text="Rates" />
                <EditField name="OrderId" control={control} text="Order ID" />
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

export default AdminFeedbackEdit;