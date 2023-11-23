import React from 'react';
import { UserAvatar } from '../../../assets/images';
import { Button, InputField } from '../../../reusables';
import Container from './styles';
import { UserDetailsWrapper } from './styles';

const Home = () => {
  return (
    <Container>
      <h1>API MarketPlace</h1>
      <p>
        {' '}
      
      </p>
      <br />
      <UserDetailsWrapper>
        <div className='details__group'>
          <img src={UserAvatar} alt={UserAvatar} />
          <InputField placeholder='Fullname' value='Ishaq Abdulfatahi' />
          <InputField placeholder='User Type' value='Premium' />
          <InputField
            readOnly={true}
            placeholder='Email'
            value='abfatahi.iaf@gmail.com'
          />
          <Button full text='Save' primary />
        </div>
        <div className='auth__group'>
          <div className='wrapper'>
            <h2>Change Your Password</h2>
            <InputField placeholder='Old Password' inputType='password' />
            <InputField placeholder='New Password' inputType='password' />
            <Button full text='Save' primary />
          </div>
          <hr
            style={{
              width: '100%',
              borderBottom: '1px solid #000000 !important',
            }}
          />
          <div className='wrapper'>
            <h2>Your Client ID</h2>
            <p>
              Use this key for each request. Please consult documents for more
              information
            </p>
            <div className='copy__group'>
              <InputField placeholder='client-id-938793693678378' />
              <Button copy text='Copy' />
            </div>
          </div>
        </div>
      </UserDetailsWrapper>
    </Container>
  );
};

export default Home;
