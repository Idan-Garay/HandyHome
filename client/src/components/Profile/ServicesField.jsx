import React, { useState } from "react";
import { Box, Text, CheckBoxGroup } from "grommet";
import { Controller } from "react-hook-form";

export default function ServicesField({ control, name, text }) {
  const [checkBox, setCheckbox] = useState([]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => (
        <Box>
          <Text alignSelf="start" margin={{ bottom: "10px" }}>
            {text}
          </Text>
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
