import React from "react";
import { LineBlue, LineGrey } from "../../../assets/icons/Auth";
import { Link, useNavigate } from "react-router-dom";
import { InputField, Button } from "../../../reusables";
import Container, { Card } from "../styles";
import { isEmail } from "../../../services/helper";

const Register = () => {
  const Navigate = useNavigate();
  const storedData = JSON.parse(localStorage.getItem("signupInfo"));
  console.log(storedData);
  const [signupInfo, setSignupInfo] = React.useState({
    email: "",
    name: "",
    // appURL: "",
    // logo: '',
    password: "",
    repeat_password: "",
    submitted: false,
  });
  const [loading, setLoading] = React.useState(false);
  const { email, password, name, repeat_password, submitted } = signupInfo;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo({
      ...signupInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    console.log(signupInfo);
    e.preventDefault();
    setSignupInfo((prevState) => ({ ...prevState, submitted: true }));
    if (
      isEmail(email) &&
      name &&
      repeat_password.length >= 8 &&
      password.length >= 8
    ) {
      setLoading(true);
      await new Promise((res) => setTimeout(res, 1000));
      localStorage.setItem("signupInfo", JSON.stringify(signupInfo));
      setLoading(false);
      Navigate("/register/step-2");
    }
  };
  return (
    <Container>
      <Card onSubmit={handleSubmit}>
        <div className="steps">
          <h3>Step 1 of 3</h3>
          <div className="line__group">
            <img src={LineBlue} alt="" />
            <img src={LineGrey} alt="" />
            <img src={LineGrey} alt="" />
          </div>
        </div>
        <h1> Verify Email</h1>
        <p>Fill out the form to get started.</p>
        <div className="input__group">
          <p>Fullname</p>
          <InputField
            fieldname="name"
            value={name || storedData?.name}
            placeholder="Enter your fullname"
            onTextChange={handleChange}
          />
          {submitted && !name && (
            <p className="error-msg">Field cannot be blank</p>
          )}
        </div>
        <div className="input__group">
          <p>Email address</p>
          <InputField
            fieldname="email"
            placeholder="Enter your email"
            onTextChange={handleChange}
            value={email || storedData?.email}
          />
          {submitted && !email && (
            <p className="error-msg">Field cannot be blank</p>
          )}
          {submitted && email && !isEmail(email) && (
            <p className="error-msg">Invalid Email</p>
          )}
        </div>
        <div className="input__column">
          <div className="input__group">
            <p>Password</p>
            <InputField
              inputType="password"
              fieldname="password"
              placeholder="Password"
              onTextChange={handleChange}
            />
            {submitted && !password && (
              <p className="error-msg">Field cannot be blank</p>
            )}
            {submitted && password && password.length < 8 && (
              <p className="error-msg">
                Password should be at least 8 characters
              </p>
            )}
          </div>
          <div className="input__group">
            <p>Confirm password</p>
            <InputField
              inputType="password"
              fieldname="repeat_password"
              placeholder="Confirm password"
              onTextChange={handleChange}
              //  minLength={8}
            />
            {submitted && !repeat_password && (
              <p className="error-msg">Field cannot be blank</p>
            )}
            {submitted && repeat_password && password !== repeat_password && (
              <p className="error-msg">Password Mismatch</p>
            )}
          </div>
        </div>
        <p className="others">
          Already have an account?{" "}
          <a href="https://saasclient.tm30.net/">Login</a>{" "}
        </p>
        <Button loading={loading} primary text="Continue" />
      </Card>
    </Container>
  );
};

export default Register;
