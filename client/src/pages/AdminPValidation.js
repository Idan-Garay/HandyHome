import React, { useState, setState } from "react";
import { Form, Box, Heading, FileInput, Button, Table, TableHeader, TableRow, TableCell } from "grommet";
import axios from "axios";
import './style.css';

const AdminPValidation = () => {

  return (
    <Box alignContent="center" margin={{bottom:"25%"}} pad="0.5%">
      <Heading alignSelf={"center"} margin={{bottom:"large"}}>Profile Verification</Heading>
      <Table align="center">
        <TableHeader>
          <TableRow>
            <TableCell align="middle" border={{ color: 'brand'}}>Id</TableCell>
            <TableCell align="middle" border={{ color: 'brand'}}>Government Id</TableCell>
            <TableCell align="middle" border={{ color: 'brand'}}>Selife Verification</TableCell>
            <TableCell align="middle" border={{ color: 'brand'}}>Verificaiton Status</TableCell>
            <TableCell align="middle" border={{ color: 'brand'}}>Verify?</TableCell>
          </TableRow>
        </TableHeader>
      </Table>
    </Box>
  );
};

export default AdminPValidation;
