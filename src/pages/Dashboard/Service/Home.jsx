import React from 'react';
import { Rate } from 'antd';
import { SubscribedPlanCard } from '../../../components/Dashboard/Subscription';
import { Button, TextArea } from '../../../reusables';
import Container, { Wrapper } from './styles';
import { FaHistory, FaTicketAlt } from 'react-icons/fa';
import Tab from './Tab';
import { serviceTabSelector } from '../../../redux/reducers/services/serviceTab';
import { useSelector } from 'react-redux';

const Home = () => {
  // const user = JSON.parse(localStorage.getItem('user'));
  const services = JSON.parse(localStorage.getItem('allowedServices'));
  const { activeTab } = useSelector(serviceTabSelector);

  return (
    <Container>
      <h1>Services</h1>
      <p> </p>
      <Wrapper>
        <div className='tab_group'>
          {[
            { name: 'my services', icon: <FaTicketAlt /> },
            { name: 'rate our service', icon: <FaHistory /> },
          ].map((item, index) => {
            return <Tab key={index} {...item} />;
          })}
        </div>
        {/* <div className="bg-success">Hello</div> */}
        <div className='tab_container'>
          {activeTab === 'my services' && (
            <>
              {' '}
              <div className='services'>
                <p className='text-left mb-4'>
                  This is a list of all your active services
                </p>
                {services?.map((service, index) => {
                  return <SubscribedPlanCard key={index} name={service} />;
                })}
              </div>
            </>
          )}
          {activeTab === 'rate our service' && (
            <div className='rating_container'>
              <h4>Rate our service</h4>
              <Rate style={{ color: '#455afe' }} />
              <br />
              <div className='input_group mt-3'>
                <p>Comment</p>
                <TextArea placeholder='Type your issue here' />
              </div>
              <br />
              <Button text='Rate' primary />
            </div>
          )}
        </div>
      </Wrapper>
    </Container>
  );
};

export default Home;
