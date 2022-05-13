import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Box, Heading } from "grommet"
import { getProfiles } from "../API/profiles";
import ProfileCard from "../components/Discovery/ProfileCard";

const CategoryUserList = () => {
    const [ userList, setUserList ] = useState([]);
    const { state } = useLocation();
    const { jobType } = state;  

    useEffect(() => {
        getProfiles().then(res => {
            res = res.filter(category => category.services.includes(jobType));
            setUserList(res);
        });
        
    },[]);

    return <Box direction="column" align="center" wrap gap="small" margin="xlarge">
                {userList.length
                    ? userList.map((profile, idx) => (
                        <ProfileCard profileData={profile} key={idx} />
                    ))
                    : <Heading 
                        alignSelf="center"
                        margin={{bottom:"medium",top:"medium"}}
                        >No Users under this Job Category
                    </Heading>}
            </Box>
};

export default CategoryUserList;
