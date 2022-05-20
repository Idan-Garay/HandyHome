import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AdminOrdersEdit = ()  => {
    const details = state;

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
            description: details.description,
            price: details.price,
            status: details.status.toString(),
            contactNo: details.contactNo,
        },
    });
    
    return (
        <>

        </>
    )
}

export default AdminOrdersEdit;