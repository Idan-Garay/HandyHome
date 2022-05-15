import React, { useState, setState } from "react";
import { Form, Box, Heading, FileInput, Button, Table, TableHeader, TableRow, TableCell } from "grommet";
import axios from "axios";
import './style.css';

const AdminFeedback = () => {

  return (
    <Box alignContent="center" margin={{bottom:"25%"}} pad="0.5%">
      <Heading alignSelf={"center"} margin={{bottom:"large"}}>Feedback</Heading>
      <Table align="center">
        <TableHeader>
          <TableRow>
            <TableCell align="middle" border={{ color: 'brand'}}>Id</TableCell>
            <TableCell align="middle" border={{ color: 'brand'}}>Type</TableCell>
            <TableCell align="middle" border={{ color: 'brand'}}>Description</TableCell>
            <TableCell align="middle" border={{ color: 'brand'}}>Communication</TableCell>
            <TableCell align="middle" border={{ color: 'brand'}}>Service</TableCell>
            <TableCell align="middle" border={{ color: 'brand'}}>Recommend</TableCell>
          </TableRow>
        </TableHeader>
      </Table>
    </Box>
  );
};

export default AdminFeedback;
