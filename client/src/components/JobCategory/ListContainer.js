import { Box } from "grommet"
import { Link } from "react-router-dom";

const ListContainer = (props) => {
    return <Box direction="row-responsive" className="b-1" justify="start" border="all" width="80%">    
        <Link to={props.path}>{props.jobName}</Link> 
    </Box>
};

export default ListContainer;