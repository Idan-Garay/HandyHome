import React , { useState,useEffect }from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  DataTable,
  Heading,
  Text,
  ResponsiveContext,
  Button,
} from 'grommet';
import { FormPrevious } from 'grommet-icons';
import HistoryDetail from "./HistoryDetail";

const DetailsPage = ({ orderDetails, orderPageDetails, ...rest }) => (
  <Box direction="row" align="start" {...rest}>
    <Box width="small">
      <Text size="small">{orderDetails}</Text>
    </Box>
    <Text color="text-strong">{orderPageDetails}</Text>
  </Box>
);

DetailsPage.propTypes = {
  orderDetails: PropTypes.string,
  orderPageDetails: PropTypes.string,
};



const columns = [
  {
    property: 'id',
    header: 'ID',
    render: datum => <Text truncate="tip">{datum.id}</Text>,
    size: 'small',
    align: 'center',
  },
  {
    property: 'name',
    header: 'Name',
    render: datum => <Text truncate="tip">{datum.name}</Text>,
    size: 'medium',
    align: 'center',
  },
  {
    property: 'services',
    header: 'Services',
    render: datum => <Text truncate="tip">{datum.services}</Text>,
    size: 'medium',
    align: 'center',
  },
];

export const JobHistory = () => {
  const size = React.useContext(ResponsiveContext);
  const [pageDetails, setPageDetails] = React.useState({});

  const [data, setData] = useState(null);
  useEffect(()=>{
    fetch('http://localhost:4000/profiles')
    .then(res=>{
      return res.json();
    })
    .then(element=>{
      setData(element);
    });
  },[]);

  return !pageDetails.id ? (
    <><p>aaa</p>
      <Heading
        id="orders-heading"
        level={3}
        margin={{ bottom: 'small', top: 'none' }}
        alignSelf='center'
      >
        Job History
      </Heading>
      <Box overflow="auto">
        <DataTable
          aria-describedby="orders-heading"
          data={data}
          columns={[
            {
              pin: ['xsmall', 'xsmall'].includes(size),
            },
            ...columns,
          ]}
          onClickRow={({ datum }) => setPageDetails(datum)}
          pin={['xsmall', 'small'].includes(size)}
          alignSelf='center'
        />
      </Box>
    </>
  ) : (
    <>
      <Button
        onClick={() => {
          setPageDetails({});
        }}
        alignSelf="start"
        icon={<FormPrevious />}
        label="Orders"
      />
      <Heading
        size="small"
        level={2}
        margin={{ horizontal: 'large', top: 'large', bottom: 'medium' }}
        alignSelf='center'
      >
        Detail
      </Heading>
      <HistoryDetail element={pageDetails} alignSelf='center'/>
    </>
  );
};


export default JobHistory;
