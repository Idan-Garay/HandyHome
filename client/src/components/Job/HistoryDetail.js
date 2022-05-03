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
    {
      property: 'contact',
      header: 'Contact No.',
      render: datum => <Text truncate="tip">{datum.contactNo}</Text>,
      size: 'medium',
      align: 'center',
    },
    {
      property: 'rating',
      header: 'Rating',
      render: datum => <Text truncate="tip">{datum.rating}</Text>,
      size: 'medium',
      align: 'center',
    },
  ];

const HistoryDetail = ({element}) => {
    const size = React.useContext(ResponsiveContext);

    
  return (
    <>
    <Box overflow="auto">
        <DataTable
          aria-describedby="orders-heading"
          data={element}
          columns={[
            {
              pin: ['xsmall', 'xsmall'].includes(size),
            },
            ...columns,
          ]}
          pin={['xsmall', 'small'].includes(size)}
        />
      </Box>
    </>
  );
};


export default HistoryDetail;
