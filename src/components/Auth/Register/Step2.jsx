import React from "react";
import { LineBlue, LineGrey } from "../../../assets/icons/Auth";
import { InputField, Button } from "../../../reusables";
import Container, { Card } from "../styles";
import { useNavigate } from "react-router-dom";
import { FaChevronCircleLeft } from "react-icons/fa";
import styled from "styled-components";

const Register = () => {
  const Navigate = useNavigate();
  const sig = JSON.parse(localStorage.getItem("signupInfo"));

  React.useEffect(() => {
    if (sig === null || undefined) {
      Navigate("/register");
      localStorage.removeItem("signupInfo");
    }
  });

  const [logo, setLogo] = React.useState("");
  const [signupInfo, setSignupInfo] = React.useState({
    email: sig.email,
    name: sig.name,
    // appURL: "",
    // logo: `${logo.length > 1 ? `${logo}` : null}`,
    password: sig.password,
    repeat_password: sig.repeat_password,
    submitted: false,
  });
  return (
    <Container>
      <Card>
        <div className="steps">
          <h3>
            <GoBackArrow
              onClick={() => {
                Navigate(-1);
                localStorage.removeItem("signupInfo");
              }}
            />
            Step 2 of 3
          </h3>
          <div className="line__group">
            <img src={LineBlue} alt="" />
            <img src={LineBlue} alt="" />
            <img src={LineGrey} alt="" />
          </div>
        </div>
        <br />
        <p className="info">
          {" "}
          Application Logo is an additional info needed to specially customize
          user account. You are to supply an hosted URL pointing to your logo{" "}
          <b style={{ color: "#000" }}>
            {" "}
            e.g: https://www.example.com/our-logo.png
          </b>
          . This field is not compulsory. Click on the <b>Skip Button</b> if you
          do not want to add this.{" "}
        </p>
        <div className="input__group">
          <p className="info">
            Logo <span className="asterick">*(Optional)</span>
          </p>
          <InputField
            value={logo}
            onTextChange={(e) => {
              setLogo(e.target.value);
              // // if (logo.length > 1) {
              // //   signupInfo.logo = `${logo}`;
              // // }
            }}
            // onKeyPress={(e) => setLogo(e.target.value)}
            placeholder="Logo"
            fieldname="logo"
            inputType="text"
          />
        </div>
        <br />
        <br />
        <div className="btn__group">
          <Button
            primary
            text="Continue"
            onClick={() => {
              localStorage.setItem("logo", JSON.stringify(logo));
              localStorage.setItem("signupInfo", JSON.stringify(signupInfo));
              Navigate("/register/step-3");
            }}
          />
          <Button
            muted
            text="Skip"
            onClick={() => Navigate("/register/step-3")}
          />
        </div>
      </Card>
    </Container>
  );
};

export default Register;

export const GoBackArrow = styled(FaChevronCircleLeft)`
  font-size: 1rem;
  color: #28d1ff;
  cursor: pointer;
  margin: 0;
  padding: 0;

  :hover {
    transform: scale(1.1);
  }
`;
