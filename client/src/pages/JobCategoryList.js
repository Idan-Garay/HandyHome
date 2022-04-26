import React, { useState, useEffect } from "react";
import ListContainer from "../components/JobCategory/ListContainer";
import { getJobs } from "../API/jobs";
import {Box, Button} from "grommet"

const JobCategoryList = () => {
    const [List, setList] = useState([])
    const [job, setJob] = useState("");
    
    // const addJob = () => {
    //     console.log("I was here");
    //     const requestOptions = {
    //       method: "POST",
    //       credentials: "include",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({jobName: job}),
    //     };
      
    //     try {
    //       fetch("http://localhost:4000/jobs", requestOptions)
    //     } catch (err) {
    //       console.log(err);
    //     }
    // }
    
    useEffect(()=> {
        getJobs().then(res => {
            setList(res);
        })
    }, []);
    
    return <Box>

        <Box direction="row-responsive" className="b-1" justify="start" border="all" width="80%">
            {List.map(({jobName,path}, index) => 
                <ListContainer key={index} jobName={jobName} path={path} />)} </Box>



        {/* this is displaying the GET method */}
        {/* <Box>Hello here, border</Box>
        <Box className="b-1" direction="row">job input: <input onChange={e => setJob(e.target.value)} value={job} /><Button primary label="add job" onClick={addJob}/></Box> */}
    </Box>;

};

export default JobCategoryList;
