import React from "react";
import { LineBlue } from "../../../assets/icons/Auth";
import { InputField, Button } from "../../../reusables";
import Container, { Card } from "../styles";
import { GoBackArrow } from "./Step2";
import { useNavigate } from "react-router-dom";
import { registerSelector } from "../../../redux/reducers/auth/register";
import { registerUser } from "../../../redux/actions/auth/register";
import { useSelector, useDispatch } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const signupInfo = JSON.parse(localStorage.getItem("signupInfo"));
  const logo = JSON.parse(localStorage.getItem("logo"));
  const [appURL, setAppURL] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const { loading, success, error, errors } = useSelector(registerSelector);

  if (logo) {
    signupInfo.logo = `${logo}`;
    localStorage.setItem("signupInfo", JSON.stringify(signupInfo));
  }
  if (appURL) {
    // Object.assign(signupInfo, { appURL });

    signupInfo.appURL = `${appURL}`;
    localStorage.setItem("signupInfo", JSON.stringify(signupInfo));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    delete signupInfo.submitted;

    setTimeout(() => {
      dispatch(registerUser(signupInfo));
    }, 2000);
  };

  React.useEffect(() => {
    if (signupInfo === null || undefined) {
      Navigate("/register");
    }
    if (success) {
      Navigate("/register/verify");
    }
  });
  return (
    <Container>
      <Card onSubmit={handleSubmit}>
        <div className="steps">
          <h3>
            <GoBackArrow onClick={() => Navigate(-1)} />
            Step 3 of 3
          </h3>
          <div className="line__group">
            <img src={LineBlue} alt="" />
            <img src={LineBlue} alt="" />
            <img src={LineBlue} alt="" />
          </div>
        </div>
        <br />
        <p className="info">
          {" "}
          Application URL is an additional info needed to specially customize
          user account. You are to supply an active URL to your application
          <b style={{ color: "#000" }}> e.g: https://www.example.com</b>. This
          field is not compulsory. Click on the <b>Skip Button</b> if you do not
          want to add this.{" "}
        </p>
        <div className="input__group">
          <p>
            Application URL <span className="asterick">*(Optional)</span>
          </p>
          <InputField
            value={appURL}
            onTextChange={(e) => {
              setAppURL(e.target.value);
              if (e.target.value.length > 1) {
                signupInfo.appURL = `${e.target.value}`;
              }
            }}
            placeholder="URL"
            fieldname="appURL"
          />
          {/* {submitted && !appURL && (
            <p className="error-msg">Field cannot be blank</p>
          )} */}
        </div>
        {error && errors && <p className="error-msg">{errors}</p>}
        <br />
        <br />
        <div className="btn__group">
          {/* <Button text='Skip' /> */}
          <Button loading={loading} primary text="Submit" />
        </div>
      </Card>
    </Container>
  );
};

export default Register;
 