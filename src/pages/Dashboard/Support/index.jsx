import React from 'react';
import Container, { Card } from './styles';
import Tab from './elements/Tab';
import { FaTicketAlt, FaHistory, FaListAlt } from 'react-icons/fa';
import { supportTabSelector } from '../../../redux/reducers/support/supportTab';
import { useSelector } from 'react-redux';
import NewTicket from './NewTicket';
import ActiveTicket from './ActiveTicket';
import OtherTicket from './OtherTickets';
import { DashboardLayout } from '../../../layout';

const Index = () => {
  const { activeTab } = useSelector(supportTabSelector);
  return (
    <DashboardLayout
      content={
        <Container>
          <h1>Support</h1>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <Card>
            <div className='tab_group'>
              {[
                { name: 'new ticket', icon: <FaTicketAlt /> },
                { name: 'active ticket', icon: <FaHistory /> },
                { name: 'all tickets', icon: <FaListAlt /> },
              ].map((item, index) => {
                return <Tab key={index} {...item} />;
              })}
            </div>
            <div className='tab_container'>
              {activeTab === 'new ticket' && <NewTicket />}
              {activeTab === 'active ticket' && <ActiveTicket />}
              {activeTab === 'all tickets' && <OtherTicket />}
            </div>
          </Card>
        </Container>
      }
    />
  );
};

export default Index;

export const tickets = [
  {
    id: '#376848',
    status: 'active',
    subject: 'Unable to login to account after subscription',
    message:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
    file: ['https://tmsaas.cloudinary.com/image.jpg'],
    createdAt: '2022-04-24T23:00',
    replies: [
      {
        sender: 'Abfat',
        message:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
        createdAt: '2022-04-24T23:00',
        file: '',
      },
      {
        sender: 'admin',
        message:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
        createdAt: '2022-04-24T23:20',
        file: '',
      },
      {
        sender: 'admin',
        message:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
        createdAt: '2022-04-24T23:20',
        file: '',
      },
      {
        sender: 'Abfat',
        message:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
        createdAt: '2022-04-24T23:00',
        file: '',
      },
    ],
  },
  {
    id: '#376848',
    status: 'inactive',
    subject: 'Unable to login to account after subscription',
    message:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
    file: ['https://tmsaas.cloudinary.com/image.jpg'],
    createdAt: '2022-04-24T23:00',
    replies: [
      {
        sender: 'Abfat',
        message:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
        createdAt: '2022-04-24T23:00',
        file: '',
      },
      {
        sender: 'admin',
        message:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
        createdAt: '2022-04-24T23:20',
        file: '',
      },
      {
        sender: 'admin',
        message:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
        createdAt: '2022-04-24T23:20',
        file: '',
      },
      {
        sender: 'Abfat',
        message:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
        createdAt: '2022-04-24T23:00',
        file: '',
      },
    ],
  },
];
