import { Space } from 'antd';

export const columns = [
  {
    title: 'S/N',
    render: (item, record, index) => <b>{index + 1}</b>,
  },
  {
    title: 'Transaction ID',
    dataIndex: 'id',
    key: 'id',
    render: (_, record) => <Space>{record?.transactionId}</Space>,
  },
  {
    title: 'Service Name',
    dataIndex: 'description',
    key: 'description',
    render: (_, record) => <Space>{record?.serviceName}</Space>,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (text) => <Space>#{text.toLocaleString()}</Space>,
  },
 
  // {
  //   title: 'Commission',
  //   dataIndex: 'commission',
  //   key: 'commission',
  //   render: (text) => <Space>#{text.toLocaleString()}</Space>,
  // },
  {
    title: 'Date',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text) => (
      <Space>{text ? new Date(text).toLocaleDateString() : '------'}</Space>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (text) => (
      <Space
        style={{
          fontSize: 11,
          letterSpacing: '0.07rem',
          textAlign: 'center',
          textTransform: 'capitalize',
          color:
            text === 'success'
              ? '#19B729'
              : text === 'pending'
              ? '#FFAD33'
              : text === 'rejected'
              ? '#FF8282'
              : '',
        }}
      >
        <b>{text}</b>
      </Space>
    ),
  },
];

export const depositColumns = [
  {
    title: 'S/N',
    render: (_, record, index) => <b>{index + 1}</b>,
  },
  {
    title: 'Initiated By',
    dataIndex: 'meta',
    key: 'meta',
    render: (_, record) => <Space>{record?.by}</Space>,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    render: (text) => <Space>{text}</Space>,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (text) => <Space>{text.toLocaleString()}</Space>,
  },
  {
    title: 'Date',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text) => (
      <Space>{text ? new Date(text).toLocaleDateString() : '------'}</Space>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (text) => (
      <Space
        style={{
          fontSize: 11,
          letterSpacing: '0.07rem',
          textAlign: 'center',
          textTransform: 'capitalize !important',
          color:
            text === 'SUCCESS'
              ? '#19B729'
              : text === 'PENDING'
              ? '#FFAD33'
              : text === 'FAILED'
              ? '#FF8282'
              : '',
        }}
      >
        <b>{text}</b>
      </Space>
    ),
  },
];

export const transactionbillng = [
  {
    title: 'S/N',
    render: (_, record, index) => <b>{index + 1}</b>,
  },
  {
    title: 'Transaction ID',
    dataIndex: 'meta',
    key: 'meta',
    render: (_, record) => <Space>{record?.meta?.transactionId}</Space>,
  },
  {
    title: 'Service Name',
    dataIndex: 'description',
    key: 'description',
    render: (_, record) => <Space>{record?.serviceName}</Space>,
  },
  {
    title: 'Biller Name',
    dataIndex: 'description',
    key: 'description',
    render: (_, record) => <Space>{record?.meta?.biller}</Space>,
  },
  // {
  //   title: 'Service',
  //   dataIndex: 'description',
  //   key: 'description',
  //   render: (_, record) => <Space>{record?.meta?.routeDetails}</Space>,
  // },
  {
    title: 'NetValue',
    dataIndex: 'NetValue',
    key: 'amount',
    render: (_, record) => <Space>{record?.amount}</Space>,
  },
  {
    title: 'Amount',
    dataIndex: 'Amount',
    key: 'Amount',
    render: (_, record) => <Space>{record?.meta?.commission ? record?.amount + record?.meta?.commission : record?.amount}</Space>,
  },
  {
    title: 'Commission',
    dataIndex: 'commission',
    key: 'commission',
    render: (_, record) => <Space>{record?.meta?.commission}</Space>,
  },
  {
    title: 'Date',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text) => (
      <Space>{text ? new Date(text).toLocaleDateString() : '------'}</Space>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (text) => (
      <Space
        style={{
          fontSize: 11,
          letterSpacing: '0.07rem',
          textAlign: 'center',
          textTransform: 'capitalize !important',
          color:
            text === 'SUCCESS'
              ? '#19B729'
              : text === 'PENDING'
              ? '#FFAD33'
              : text === 'FAILED'
              ? '#FF8282'
              : '',
        }}
      >
        <b>{text}</b>
      </Space>
    ),
  },
];


export const bulkvend = [
  {
    title: 'S/N',
    render: (_, record, index) => <b>{index + 1}</b>,
  },
  {
    title: 'phoneNumber',
    dataIndex: 'meta',
    key: 'meta',
    render: (_, record) => <Space>{record?.phoneNumber}</Space>,
  },
  {
    title: 'network',
    dataIndex: 'description',
    key: 'description',
    render: (_, record) => <Space>{record?.network}</Space>,
  },
  {
    title: 'amount',
    dataIndex: 'description',
    key: 'description',
    render: (_, record) => <Space>{record?.amount}</Space>,
  }
 
];

export const head = [
  {
    Header: 'S/N',
    accessor: 'S/N',
    // render: (_, record, index) => <b>{index + 1}</b>,
  },
  {
    Header: 'Transaction ID',
    accessor: 'Transaction ID',
    // dataIndex: 'meta',
    // key: 'meta',
    // render: (_, record) => <Space>{record?.meta?.transactionId}</Space>,
  },
  {
    Header: 'Service Name',
    accessor: 'Service Name',
    // dataIndex: 'description',
    // key: 'description',
    // render: (_, record) => <Space>{record?.serviceName}</Space>,
  },
  {
    Header: 'Biller Name',
    accessor: 'Biller Name',
    // dataIndex: 'description',
    // key: 'description',
    // render: (_, record) => <Space>{record?.meta?.biller}</Space>,
  },
  // {
  //   Header: 'Service',
  //   accessor: 'Service',
  //   dataIndex: 'description',
  //   key: 'description',
  //   render: (_, record) => <Space>{record?.meta?.routeDetails}</Space>,
  // },
  {
    Header: 'NetValue',
    accessor: 'NetValue',
    // dataIndex: 'NetValue',
    // key: 'amount',
    // render: (_, record) => <Space>{record?.amount}</Space>,
  },
  {
    Header: 'Amount',
    accessor: 'Amount',
    // dataIndex: 'Amount',
    // key: 'Amount',
    // render: (_, record) => <Space>{record?.meta?.commission ? record?.amount + record?.meta?.commission : record?.amount}</Space>,
  },
  {
    Header: 'Commission',
    accessor: 'Commission',
    // dataIndex: 'commission',
    // key: 'commission',
    // render: (_, record) => <Space>{record?.meta?.commission}</Space>,
  },
  {
    Header: 'Date',
    accessor: 'Date',
    // dataIndex: 'createdAt',
    // key: 'createdAt',
    // render: (text) => (
    //   <Space>{text ? new Date(text).toLocaleDateString() : '------'}</Space>
    // ),
  },
  {
    Header: 'Status',
    accessor: 'Status',
    // dataIndex: 'status',
    // key: 'status',
    // render: (text) => (
    //   <Space
    //     style={{
    //       fontSize: 11,
    //       letterSpacing: '0.07rem',
    //       textAlign: 'center',
    //       textTransform: 'capitalize !important',
    //       color:
    //         text === 'SUCCESS'
    //           ? '#19B729'
    //           : text === 'PENDING'
    //           ? '#FFAD33'
    //           : text === 'FAILED'
    //           ? '#FF8282'
    //           : '',
    //     }}
    //   >
    //     <b>{text}</b>
    //   </Space>
    // ),
  },
];

export const transactions = [
  {
    transactionId: 'opo',
    description: 'Email Verification API - monthly sub',
    amount: 1.99,
    status: 'success',
    createdAt: new Date(),
  },
  {
    transactionId: 'Trx009278',
    description: 'Email Verification API - monthly sub',
    amount: 1.99,
    status: 'pending',
    createdAt: new Date(),
  },
  {
    transactionId: 'Trx009278',
    description: 'Email Verification API - monthly sub',
    amount: 1.99,
    status: 'success',
    createdAt: new Date(),
  },
  {
    transactionId: 'Trx009278',
    description: 'Email Verification API - monthly sub',
    amount: 1.99,
    status: 'success',
    createdAt: new Date(),
  },
  {
    transactionId: 'Trx009278',
    description: 'Email Verification API - monthly sub',
    amount: 1.99,
    status: 'rejected',
    createdAt: new Date(),
  },
  {
    transactionId: 'Trx009278',
    description: 'Email Verification API - monthly sub',
    amount: 1.99,
    status: 'success',
    createdAt: new Date(),
  },
  {
    transactionId: 'Trx009278',
    description: 'Email Verification API - monthly sub',
    amount: 1.99,
    status: 'pending',
    createdAt: new Date(),
  },
  {
    transactionId: 'Trx009278',
    description: 'Email Verification API - monthly sub',
    amount: 1.99,
    status: 'success',
    createdAt: new Date(),
  },
  {
    transactionId: 'Trx009278',
    description: 'Email Verification API - monthly sub',
    amount: 1.99,
    status: 'success',
    createdAt: new Date(),
  },
  {
    transactionId: 'Trx009278',
    description: 'Email Verification API - monthly sub',
    amount: 1.99,
    status: 'rejected',
    createdAt: new Date(),
  },
  {
    transactionId: 'Trx009278',
    description: 'Email Verification API - monthly sub',
    amount: 1.99,
    status: 'success',
    createdAt: new Date(),
  },
  {
    transactionId: 'Trx009278',
    description: 'Email Verification API - monthly sub',
    amount: 1.99,
    status: 'pending',
    createdAt: new Date(),
  },
  {
    transactionId: 'Trx009278',
    description: 'Email Verification API - monthly sub',
    amount: 1.99,
    status: 'success',
    createdAt: new Date(),
  },
  {
    transactionId: 'Trx009278',
    description: 'Email Verification API - monthly sub',
    amount: 1.99,
    status: 'success',
    createdAt: new Date(),
  },
  {
    transactionId: 'Trx009278',
    description: 'Email Verification API - monthly sub',
    amount: 1.99,
    status: 'rejected',
    createdAt: new Date(),
  },
  {
    transactionId: 'Trx009278',
    description: 'Email Verification API - monthly sub',
    amount: 1.99,
    status: 'success',
    createdAt: new Date(),
  },
  {
    transactionId: 'Trx009278',
    description: 'Email Verification API - monthly sub',
    amount: 1.99,
    status: 'pending',
    createdAt: new Date(),
  },
  {
    transactionId: 'Trx009278',
    description: 'Email Verification API - monthly sub',
    amount: 1.99,
    status: 'success',
    createdAt: new Date(),
  },
  {
    transactionId: 'Trx009278',
    description: 'Email Verification API - monthly sub',
    amount: 1.99,
    status: 'success',
    createdAt: new Date(),
  },
  {
    transactionId: 'Trx009278',
    description: 'Email Verification API - monthly sub',
    amount: 1.99,
    status: 'rejected',
    createdAt: new Date(),
  },
  {
    transactionId: 'Trx009278',
    description: 'Email Verification API - monthly sub',
    amount: 1.99,
    status: 'success',
    createdAt: new Date(),
  },
  {
    transactionId: 'Trx009278',
    description: 'Email Verification API - monthly sub',
    amount: 1.99,
    status: 'pending',
    createdAt: new Date(),
  },
  {
    transactionId: 'Trx009278',
    description: 'Email Verification API - monthly sub',
    amount: 1.99,
    status: 'success',
    createdAt: new Date(),
  },
  {
    transactionId: 'Trx009278',
    description: 'Email Verification API - monthly sub',
    amount: 1.99,
    status: 'success',
    createdAt: new Date(),
  },
  {
    transactionId: 'Trx009278',
    description: 'Email Verification API - monthly sub',
    amount: 1.99,
    status: 'rejected',
    createdAt: new Date(),
  },
];
