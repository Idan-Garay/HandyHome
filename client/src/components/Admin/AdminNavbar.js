import { Box } from "grommet";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const AdminNavbar = (props) => {
    const [ tabState, setTabState ] = useState(props.tabNumber);

    return (
        <Box
            
        >
            <Link 
                to="/requests/profile"
                className={tabState === 1 ? "active" : "not-active" }
                >Profile Validation
            </Link>
            <Link 
                to="/requests/profile"
                className={tabState === 2 ? "active" : "not-active" }
                >Payment Validation
            </Link>
        </Box>
    );
}


export default AdminNavbar;