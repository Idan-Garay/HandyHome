import { TextInput } from "grommet";
import React, { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const InputGroup = ({ label, name, onChange, value }) => {
  return (
    <Box>
      <label>
        {label}
        <TextInput onChange={onChange} name={name} value={value} />
      </label>
    </Box>
  );
};

const SequelizeTest = () => {
  const [address, setAddress] = useState({
    street: "street1",
    city: "city1",
    area: "area1",
  });

  const onChange = (e) => {
    const { name, value } = e.target.name;
    const newAddress = { ...address };
    newAddress[name] = value;
    setAddress(newAddress);
  };

  const [result, setResult] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      credential: true,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(address),
    };
    let res = await fetch("http://localhost:3501/addresses", options);
    res = await res.json();
    console.log("res: ", res);
    setResult(res);
  };
  return (
    <Box>
      <Box>
        <form onSubmit={handleSubmit}>
          <InputGroup
            label="Street"
            name="street"
            value={address.street}
            onChange={onChange}
          />
          <InputGroup
            label="City"
            name="city"
            value={address.city}
            onChange={onChange}
          />
          <InputGroup
            label="Area"
            name="area"
            value={address.area}
            onChange={onChange}
          />
          <button type="submit">Submit</button>
        </form>
      </Box>
      <Box> Result:{JSON.stringify(result)}</Box>
    </Box>
  );
};

export default SequelizeTest;
