import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Box } from "grommet"
import { getProfiles } from "../API/profiles";
import ProfileCard from "../components/Discovery/ProfileCard";

const CategoryUserList = () => {
    const [ userList, setUserList ] = useState([]);
    const { state } = useLocation();
    const { jobType } = state;  

    // const filterUserList = (userList) => {
    //     userList.filter(category =>
    //         category.services    
    //     ).filter(jobCategory =>
    //         jobCategory === job    
    //     )
    // }

    useEffect(() => {
        getProfiles().then(res => {
            setUserList(res);
        });
        
    },[]);
    

    //console.log(userList);
    console.log(jobType);

    return <Box direction="column" align="center" wrap gap="small" margin="xlarge">
                {userList.length
                    ? userList.filter(category =>
                        category.services.includes(jobType)
                    ).map((profile, idx) => (
                        <ProfileCard profileData={profile} key={idx} />
                    ))
                    : null}
            </Box>
};

export default CategoryUserList;
