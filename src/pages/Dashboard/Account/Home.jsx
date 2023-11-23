import React from 'react';
import { PlaceholderAvatar } from '../../../assets/images';
import { Button, InputField } from '../../../reusables';
import Container from './styles';
import { UserDetailsWrapper } from './styles';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [copied, setCopied] = React.useState(false);
  const handleCopyClientId = () => {
    setCopied(true);
    navigator.clipboard.writeText(user?.clientId);
  };
  return (
    <Container>
      <h1>Account Settings</h1>
      <p> </p>
      <br />
      <UserDetailsWrapper>
        <div className='details__group'>
          <img
            src={user?.avatar ?? PlaceholderAvatar}
            alt={PlaceholderAvatar}
          />
          <div className='text_group'>
            <h3>Client Name:</h3>
            <p>{user?.name}</p>
          </div>
          <div className='text_group'>
            <h3>Email:</h3>
            <p>{user?.email}</p>
          </div>
          <div className='text_group'>
            <h3>Phone Number:</h3>
            <p>{user?.phoneNumber ?? '+234-XXX-XXXX-XXX'}</p>
          </div>
          <div className='text_group'>
            <h3>App Logo:</h3>
            <p>{user?.logo}</p>
          </div>
          <div className='text_group'>
            <h3>App URL:</h3>
            <p>{user?.appURL}</p>
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
              <InputField value={user?.clientId} readOnly={true} />
              <Button
                onClick={handleCopyClientId}
                copy
                text={copied ? 'Copied' : 'Copy'}
              />
            </div>
          </div>
        </div>
        <div className='auth__group'>
          <h2>Change Your Password</h2>
          <InputField placeholder='Old Password' inputType='password' />
          <InputField placeholder='New Password' inputType='password' />
          <Button full text='Save' primary />
        </div>
      </UserDetailsWrapper>
    </Container>
  );
};

export default Home;
