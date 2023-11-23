import React from 'react';
import { useNavigate } from 'react-router-dom';
import { InputField, Button } from '../../../reusables';
import Container, { Card } from '../styles';
import { isEmail } from '../../../services/helper';
import { getResetCode } from '../../../redux/actions/auth/forgotPassword';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPasswordSelector } from '../../../redux/reducers/auth/forgotPassword';
import { LANDING_PAGE } from '../../../services/route';

const Index = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [submit, setSubmit] = React.useState(false);
  const { getCodeLoading, getCodeError, getCodeErrors, getCodeSuccess } =
    useSelector(forgotPasswordSelector);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true);
    if (email && isEmail(email)) {
      console.log(email);
      dispatch(getResetCode(email));
    }
  };

  React.useEffect(() => {
    if (getCodeSuccess) {
      Navigate(LANDING_PAGE.forgot_password_verify);
    }
  });

  return (
    <Container>
      <Card onSubmit={handleSubmit}>
        <h1>Forgot Password?</h1>
        <p>Enter email to continue password recovery process.</p>
        <div className='input__group'>
          <p>Email</p>
          <InputField
            fieldname='email'
            placeholder='Enter your email'
            onTextChange={(e) => setEmail(e.target.value)}
          />
          {submit && !email && (
            <p className='error-msg'>Field cannot be blank</p>
          )}
          {submit && email && !isEmail(email) && (
            <p className='error-msg'>Invalid Email</p>
          )}
        </div>
        {getCodeError && <p className='error-msg'>{getCodeErrors}</p>}
        <Button loading={getCodeLoading} primary text='Submit' />
      </Card>
    </Container>
  );
};

export default Index;

