import React, { useState, setState } from "react";
import { Form, Box, Heading, FileInput, Button, Table, TableHeader, TableRow, TableCell } from "grommet";
import axios from "axios";
import './style.css';

const AdminRequests = () => {

  return (
    <Box alignContent="center" margin={{bottom:"25%"}} pad="0.5%">
      <Heading alignSelf={"center"} margin={{bottom:"large"}}>Requests</Heading>
      <Table align="center">
        <TableHeader>
          <TableRow>
            <TableCell align="middle" border={{ color: 'brand'}}>Id</TableCell>
            <TableCell align="middle" border={{ color: 'brand'}}>From</TableCell>
            <TableCell align="middle" border={{ color: 'brand'}}>Contact Number</TableCell>
            <TableCell align="middle" border={{ color: 'brand'}}>Description</TableCell>
            <TableCell align="middle" border={{ color: 'brand'}}>Minimum Rate</TableCell>
            <TableCell align="middle" border={{ color: 'brand'}}>Status</TableCell>
          </TableRow>
        </TableHeader>
      </Table>
    </Box>
  );
};

export default AdminRequests;
