import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputField, Button } from "../../reusables";
import Container, { Card } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/auth/login";
import { loginSelector } from "../../redux/reducers/auth/login";
import { isEmail } from "../../services/helper";
import { LANDING_PAGE, USER_DASHBOARD } from "../../services/route";

const Login = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [loginInfo, setLoginInfo] = React.useState({
    email: "",
    password: "",
    submitted: false,
  });
  const { email, password, submitted } = loginInfo;
  const { loading, success, error, errors } = useSelector(loginSelector);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    delete loginInfo.submitted;
    setLoginInfo((prevState) => ({ ...prevState, submitted: true }));
    if (isEmail(email) && password) dispatch(loginUser(loginInfo));
  };

  React.useEffect(() => {
    if (success) Navigate(USER_DASHBOARD.dashboard);
  });

  return (
    <Container>
      <Card onSubmit={handleSubmit}>
        <h1>Welcome Back Ebuka</h1>
        <p>Login to manage your account</p>
        <div className="input__group">
          <p>Email address</p>
          <InputField
            value={email}
            onTextChange={handleChange}
            placeholder="Email address"
            fieldname="email"
            // inputType='email'
          />
          {submitted && !email && (
            <p className="error-msg">Email field cannot be blank</p>
          )}
          {submitted && email && !isEmail(email) && (
            <p className="error-msg">Invalid Email</p>
          )}
        </div>
        <div className="input__group">
          <div className="label_group">
            <p>Password</p>
            <Link to={LANDING_PAGE.forgot_password}>forgot password?</Link>{" "}
          </div>
          <InputField
            value={password}
            onTextChange={handleChange}
            inputType="password"
            placeholder="*********"
            fieldname="password"
          />
          {submitted && !password && (
            <p className="error-msg">Password field cannot be blank</p>
          )}
        </div>
        {error && errors && <p className="error-msg">{errors}</p>}
        <p className="others">
          Don't have an account? <Link to="/register">Signup</Link>{" "}
        </p>
        <Button loading={loading} primary text="Sign In" />
      </Card>
    </Container>
  );
};

export default Login;
