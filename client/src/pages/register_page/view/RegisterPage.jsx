import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <form action="">
      <div>
        <div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-secondary w-full max-w-xs"
          />
        </div>
      </div>
    </form>
    // <Form onSubmit={handleSubmit(onSubmit)}>
    //   <Box margin="auto" width={{ min: "medium", max: "50%" }}>
    //     <Box gap="medium">
    //       <ControllerFields
    //         fieldsControllers={fieldsControllers.map((fieldData) => {
    //           fieldData.errorMessage = errors[fieldData.name]?.message;
    //           return fieldData;
    //         })}
    //         control={control}
    //       />
    //       {result.email || result.username ? (
    //         <ErrorLabel>Username or email already exists.</ErrorLabel>
    //       ) : null}
    //     </Box>
    //     <TypeButtons accType={accType} handleAccType={handleAccType} />
    //     <Box
    //       tag="footer"
    //       margin={{ top: "medium" }}
    //       direction="row"
    //       justify="end"
    //     >
    //       <Button type="submit" primary label="Register" />
    //     </Box>
    //   </Box>
    // </Form>
  );
};
export default RegisterPage;
