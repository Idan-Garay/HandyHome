import React, { useState, useEffect } from "react";
import { Box } from "grommet"
import { getProfiles } from "../API/profiles";
import { useLocation } from "react-router-dom";
import ProfileCard from "../components/Discovery/ProfileCard";

const CategoryUserList = () => {
    const [ userList, setUserList ] = useState([]); 
    const { state } = useLocation();
    const { job } = state;

    useEffect(() => {
        getProfiles().then(res => {
            setUserList(res);
        });
    },[]);
    
    return <Box direction="row-responsive" wrap gap="small" margin="xlarge">
                {userList.length
                    ? userList.map((profile, idx) => (
                        <ProfileCard profileData={profile} key={idx} />
                        ))
                    : null}
            </Box>
};

export default CategoryUserList;
