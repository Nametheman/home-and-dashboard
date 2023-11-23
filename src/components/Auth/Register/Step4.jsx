import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, OTPInputField } from '../../../reusables';
import Container, { Card } from '../styles';
import { useSelector, useDispatch } from 'react-redux';
import { inputFocus } from '../../../services/helper';
import { verifySelector } from '../../../redux/reducers/auth/verify';
import { verifyUser } from '../../../redux/actions/auth/verify';

const Register = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const signupInfo = JSON.parse(localStorage.getItem('signupInfo'));
  const { loading, success, error, errors } = useSelector(verifySelector);
  const [otp, setOtp] = React.useState({
    value1: '',
    value2: '',
    value3: '',
    value4: '',
  });
  const [submitted, setSubmitted] = React.useState(false);
  const { value1, value2, value3, value4 } = otp;
  let OtpCode = value1 + value2 + value3 + value4;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOtp((otp) => ({ ...otp, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (OtpCode && OtpCode.length === 4) dispatch(verifyUser(OtpCode));
  };

  React.useEffect(() => {
    if (signupInfo === null || undefined) {
      Navigate('/register');
    }
    if (success) Navigate('/login');
  });

  return (
    <Container>
      <Card onSubmit={handleSubmit}>
        <h1>OTP CODE</h1>
        <p>
          {' '}
          <span className='asterick'>*</span>Enter the 4-digit verification code
          sent to your email
        </p>
        <div className='code__wrapper'>
          <OTPInputField
            fieldname='value1'
            tabIndexValue='1'
            valueName={otp.value1}
            onTextChange={handleChange}
            onChangeKeyUp={(e) => inputFocus(e)}
          />
          <OTPInputField
            fieldname='value2'
            tabIndexValue='2'
            valueName={otp.value2}
            onTextChange={handleChange}
            onChangeKeyUp={(e) => inputFocus(e)}
          />
          <OTPInputField
            fieldname='value3'
            tabIndexValue='3'
            valueName={otp.value3}
            onTextChange={handleChange}
            onChangeKeyUp={(e) => inputFocus(e)}
          />
          <OTPInputField
            fieldname='value4'
            tabIndexValue='4'
            valueName={otp.value4}
            onTextChange={handleChange}
            onChangeKeyUp={(e) => inputFocus(e)}
          />
        </div>
        <br />
        {submitted && !otp && <p className='error-msg'>OTP cannot be blank</p>}
        {submitted && otp && otp.length !== 4 && (
          <p className='error-msg'>Invalid OTP! OTP must be 4 digits</p>
        )}
        {error && errors && <p className='error-msg'>{errors}</p>}
        <p className='others'>
          Didn't get a code? Click on <b>Resend</b> button to get a new code
        </p>
        <div className='code__btn__group'>
          <Button full loading={loading} primary text='Submit' />
          <Button full disabled={true} muted text='Resend' />
        </div>
      </Card>
    </Container>
  );
};

export default Register;
