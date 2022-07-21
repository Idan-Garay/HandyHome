import React from "react";
import { Button, Nav } from "grommet";

export default function ShowButtons({ accountType = 0, menuOnClick }) {
  return (
    <Nav gap="small">
      <Button
        primary
        value={0}
        label="My Details"
        onClick={menuOnClick}
        key={`menu-0`}
      />
      {accountType === 1 && (
        <Button
          primary
          value={1}
          label="Team"
          onClick={menuOnClick}
          key={`menu-1`}
        />
      )}
      <Button
        primary
        value={2}
        label="Orders"
        onClick={menuOnClick}
        key={`menu-2`}
      />
      <Button
        primary
        value={3}
        label="Verify"
        onClick={menuOnClick}
        key={`menu-3`}
      />
    </Nav>
  );
}
