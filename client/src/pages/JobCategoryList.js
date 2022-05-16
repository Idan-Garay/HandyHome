import React, { useState, useEffect } from "react";
import ListContainer from "../components/JobCategory/ListContainer";
import { getJobs } from "../API/jobs";
import {Box, Grid, Image, Heading} from "grommet";
import imagesrc from "../../public/assets/tap.png"
import logo from "../../public/HandyHome.svg"

const JobCategoryList = () => {
    const [List, setList] = useState([])
    
    useEffect(()=> {
        getJobs().then(res => {
            setList(res);
            console.log(res);
        })
    }, []);
    
    return <Box>
        <Heading 
            alignSelf="center"
            margin={{bottom:"medium",top:"medium"}}
        >Job Categories</Heading>
        <Image src={imagesrc} alt="im an image" alignSelf="center" />
        <img src={logo} alt="another image" />
        {/* <Grid
            rows={['medium', 'medium']}
            columns={['medium', 'medium', 'medium']}
            gap="large"
            alignSelf="center"
            align="center"
            pad="large"
            areas={[
                {name: "Plumbing", start: [0, 0], end: [0, 0]},
                {name: "Carpentry", start: [1, 0], end: [1, 0]},
                {name: "Masonry", start: [2, 0], end: [2, 0]},
                {name: "Gardening", start: [0, 1], end: [0, 1]},
                {name: "Housekeeping", start: [1, 1], end: [1, 1]},
                {name: "Babysitting", start: [2, 1], end: [2, 1]},
            ]}
        >       
            {List.map(({jobName,path,img_src,jobType}, index) => 
                <ListContainer key={index} jobName={jobName} jobType={jobType} path={path} img_src={img_src} />
            )} 
        </Grid> */}



        {/* this is displaying the GET method */}
        {/* <Box>Hello here, border</Box>
        <Box className="b-1" direction="row">job input: <input onChange={e => setJob(e.target.value)} value={job} /><Button primary label="add job" onClick={addJob}/></Box> */}
    </Box>;

};

export default JobCategoryList;
