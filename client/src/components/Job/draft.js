import React, { useState, useEffect } from 'react';
import {
    Table, TableBody, TableCell, TableHeader, TableRow,
    Page, PageContent, Paragraph,
  } from 'grommet';
import ReactDOM from "react-dom";
import { Button, grommet, Grommet, Box } from "grommet";
import { deepMerge } from "grommet/utils";
  

const JobHistory = () => {
    const customHover = deepMerge(grommet, {
        global: {
          hover: {
            background: {
              color: "pink"
            },
            color: {
              dark: "white",
              light: "white"
            }
          }
        }
      });

    let job = [
        {
          id: 1, desc: 'Cut the grass of a 14-acre field', date: 'Feb 27, 1:04 AM', amount: 3775, rating: 4,
        },
        {
          id: 2, desc: 'Cut the grass of a 14-acre field', date: 'Mar 27, 4:04 PM', amount: 1200, rating: 5,
        },
        {
          id: 3, desc: 'Cut the grass of a 14-acre field', date: 'Jan 30, 1:04 AM', amount: 3000, rating: 4,
        },
      ];

      
      //fetching data from database. Data is stored in "users" as array
    // const[job, setJob]=useState([]);
    // useEffect(()=>{
    //   fetch('/job')
    //   .then(response=>response.json())
    //   .then(response=>{
    //     console.log(response);
    //     setJob(response)  
    //   })
    // },[])


    //console.log(job[0].id);
      
      let TOTAL = 0;
      job.forEach((datum) => { TOTAL += datum.amount; });
      
  return (
      <>
    <Page kind="wide">
    <PageContent background="light-3">
     
      
    <Table caption='Job History'>
        <TableHeader>
            <TableRow >
                <TableCell scope="col" border="bottom">
                    <strong>Order Number</strong>
                </TableCell>
                <TableCell scope="col" border="bottom">
                    <strong>Job Description</strong>
                </TableCell>
                <TableCell scope="col" border="bottom">
                <strong>Delivery Date</strong>
                </TableCell>
                <TableCell scope="col" border="bottom">
                    <strong>Total Price</strong>
                </TableCell>
                <TableCell scope="col" border="bottom">
                    <strong>Rating</strong>
                </TableCell>
            </TableRow>
        </TableHeader>
  
    <TableBody>
        {job.map((v) => (
            <TableRow hoverIndicator={{
                dark: { color: "light-4", opacity: "1" },
                light: { color: "dark-5", opacity: "1" }
              }}>
                <TableCell scope="row">
                    { v.id }
                </TableCell>
                <TableCell scope="row">
                    { v.desc }
                </TableCell>
                <TableCell scope="row">
                    { v.date }
                </TableCell>
                <TableCell scope="row">
                    { v.amount }
                </TableCell>
                <TableCell scope="row">
                    { v.rating }
                </TableCell>
              
            </TableRow>))} 
            <p>total: {TOTAL}</p>
    </TableBody>
    </Table>
    
    </PageContent>
  </Page>
  </>
  );
}

export default JobHistory;
