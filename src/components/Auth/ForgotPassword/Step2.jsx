import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { InputField, Button } from '../../../reusables';
import Container, { Card, SuccessCard } from '../styles';
import { setNewPassword } from '../../../redux/actions/auth/forgotPassword';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPasswordSelector } from '../../../redux/reducers/auth/forgotPassword';
import { LANDING_PAGE } from '../../../services/route';

const Register = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const email = sessionStorage.getItem('email');
  const [body, setBody] = React.useState({
    type: 'email',
    value: email ?? '',
    code: '',
    password: '',
  });
  const [submitted, setSubmitted] = React.useState(false);
  const { code, password } = body;

  const { loading, error, errors, success, getCodeSuccess } = useSelector(
    forgotPasswordSelector
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBody({
      ...body,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (code && password) {
      dispatch(setNewPassword(body));
    }
  };

  React.useEffect(() => {
    if (!getCodeSuccess) {
      Navigate(LANDING_PAGE.forgot_password);
    }
  });

  return (
    <Container>
      {success && (
        <SuccessCard>
          <FaCheckCircle className='check' />
          <h1>Password reset successful.</h1>
          <p>Click the button below to proceed to login.</p>
          <div className='btn_wrapper'>
            <Button
              text='Proceed to Login'
              full
              primary
              onClick={() => Navigate(LANDING_PAGE.login)}
            />
          </div>
        </SuccessCard>
      )}
      {!success && (
        <Card onSubmit={handleSubmit}>
          <h1> Set New Password</h1>
          <p>Enter a new password with the reset code sent to your email</p>
          <div className='input__group'>
            <p>Code</p>
            <InputField
              fieldname='code'
              value={code}
              placeholder='Enter reset code'
              onTextChange={handleChange}
            />
            {submitted && !code && (
              <p className='error-msg'>Field cannot be blank</p>
            )}
          </div>
          <div className='input__group'>
            <p>New Password</p>
            <InputField
              inputType='password'
              fieldname='password'
              placeholder='Set new password'
              onTextChange={handleChange}
            />
            {submitted && !password && (
              <p className='error-msg'>Field cannot be blank</p>
            )}
          </div>
          {error && <p className='error-msg'>{errors}</p>}
          <Button loading={loading} primary text='Continue' />
        </Card>
      )}
    </Container>
  );
};

export default Register;
