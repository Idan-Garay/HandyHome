import React from 'react';
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

const data = [
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

const columns = [
  {
    property: 'id',
    header: 'Order Number',
    render: datum => <Text truncate="tip">{datum.id}</Text>,
    size: 'medium',
    align: 'center',
  },
  {
    property: 'desc',
    header: 'Job Description',
    render: datum => <Text truncate="tip">{datum.desc}</Text>,
    size: 'xlarge',
    align: 'center',
  },
  {
    property: 'date',
    header: 'Delivery Date',
    render: datum => <Text truncate="tip">{datum.date}</Text>,
    size: 'large',
    align: 'center',
  },
  {
    property: 'amount',
    header: 'Total Price',
    render: datum => <Text truncate="tip">{datum.amount}</Text>,
    size: 'small',
    align: 'center',
  },
  {
    property: 'rating',
    header: 'Rating',
    render: datum => <Text truncate="tip">{datum.rating}</Text>,
    size: 'small',
    align: 'center',
  },
];

export const JobHistory = () => {
  const size = React.useContext(ResponsiveContext);
  const [pageDetails, setPageDetails] = React.useState({});

  return !pageDetails.id ? (
    <>
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
      >
        Job Details
      </Heading>
      <Box margin={{ vertical: 'small', horizontal: 'large' }} gap="small">
        {pageDetails &&
          Object.entries(pageDetails).map(([key, value]) => (
            <DetailsPage
              key={key}
              orderDetails={key}
              orderPageDetails={value}
            />
          ))}
      </Box>
    </>
  );
};


export default JobHistory;
