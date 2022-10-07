import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import RegisterInput from "./RegisterInput";
import RegisterButton from "./RegisterButton";
import RegisterInputPassword from "./RegisterInputPassword";
import RegisterRequirements from "./RegisterRequirements";

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen ">
    <div style={{"zIndex": -1}} className=" flex flex-row-reverse rotate-80  fixed lg:block inset-0"> 
      <div className="bg-primaryColor w-1/2 h-full object-right-bottom absolute right-0 origin-bottom rotate-90">
        
      </div>
    </div>
      <div className="w-full h-full flex  gap-x-8 justify-center items-center lg:grid lg:grid-cols-2">
        <div className="w-full sm:w-2/4 lg:w-2/4 p-10 border rounded-3xl bg-red mx-auto" >
          <form action="">
            <RegisterInput />

            <RegisterInputPassword labelName="Password" />

            <div className="flex justify-center">
              <RegisterRequirements />
            </div>

            <RegisterInputPassword labelName="Re-Type" />
            <div className="mt-12 ">
              <RegisterButton />
            </div>
          </form>
        </div>

        <img className="hidden lg:block" src="/assets/undraw_register.svg" />
      </div>
    </div>
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
