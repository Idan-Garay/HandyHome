import React, { useState, setState } from "react";
import { Form, Box, Heading, FileInput, Button, Table, TableHeader, TableRow, TableCell } from "grommet";
import axios from "axios";
import './style.css';

const AdminProfiles = () => {

  return (
    <Box alignContent="center" margin={{bottom:"25%"}} pad="0.5%">
      <Heading alignSelf={"center"} margin={{bottom:"large"}}>Profiles</Heading>
      <Table align="center">
        <TableHeader>
          <TableRow>
            <TableCell align="middle" border={{ color: 'brand'}}>Id</TableCell>
            <TableCell align="middle" border={{ color: 'brand'}}>Name</TableCell>
            <TableCell align="middle" border={{ color: 'brand'}}>Services</TableCell>
            <TableCell align="middle" border={{ color: 'brand'}}>Contact Number</TableCell>
            <TableCell align="middle" border={{ color: 'brand'}}>Address</TableCell>
            <TableCell align="middle" border={{ color: 'brand'}}>Coworkers</TableCell>
          </TableRow>
        </TableHeader>
      </Table>
    </Box>
  );
};

export default AdminProfiles;
