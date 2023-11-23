import React from "react";
import Container, {
  Copyright,
  ColumnGroupWrapper,
  Columns,
  FooterLink,
  SocialWrapper,
  SocialIcon,
} from "./styles";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Logo } from "../../../assets/images";
import { FOOTER, SOCIALMEDIALINKS } from "../../../services/route";
import styled from "styled-components";

const Index = () => {
  return (
    <Container>
      <ColumnGroupWrapper>
        <Columns>
          <img src={Logo} alt={Logo} />
          <p>
            <b>Address:</b> No. 29A, Beckley Street, Onikan, Lagos, Nigeria.
          </p>
          <a className="link" href="mail:support@tm30.net">
            <b>Mail:</b> tmsaas@tm30.net
          </a>
          <a className="link" href="tel:+2348105921590">
            <b>Tel:</b> +2348182504430
          </a>
        </Columns>
        <Columns>
          <div className="title">Our Products</div>
          <Aref
            href="https://paymybills.ng/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PayMyBills
          </Aref>
          <Aref
            href="https://mybackupcash.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            BackupCash
          </Aref>
          <Aref
            href="https://www.edusponsor.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            EduSponsor
          </Aref>
          <Aref
            href="https://saas.tm30.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TMSaaS
          </Aref>
        </Columns>
        <Columns>
          <div className="title">Quick Links</div>
          {companyColumnData.map((item) => {
            const { key, text, link } = item;
            return (
              <FooterLink key={key} to={link}>
                {text}
              </FooterLink>
            );
          })}
        </Columns>
        <Columns>
          <div className="title">Follow Us</div>
          <SocialWrapper>
            {socialLinkData.map((item) => {
              const { key, link, icon } = item;
              return (
                <SocialIcon key={key} href={link}>
                  {icon}
                </SocialIcon>
              );
            })}
          </SocialWrapper>
        </Columns>
      </ColumnGroupWrapper>
      <br />
      <br />
      <Copyright>© 2022 TMSaaS. All Rights Reserved.</Copyright>
    </Container>
  );
};

export default Index;

const socialLinkData = [
  { key: 1, link: SOCIALMEDIALINKS.twitter, icon: <FaTwitter /> },
  { key: 2, link: "/", icon: <FaFacebook /> },
  { key: 3, link: SOCIALMEDIALINKS.instagram, icon: <FaInstagram /> },
  { key: 4, link: SOCIALMEDIALINKS.linkedin, icon: <FaLinkedin /> },
];

const companyColumnData = [
  { key: 1, link: FOOTER.legal, text: "Legal" },
  { key: 2, link: FOOTER.tandc, text: "Terms & Conditions" },
  { key: 3, link: FOOTER.privacy_policy, text: "Privacy Policy" },
  { key: 4, link: FOOTER.service_agreement, text: "Service Agreement" },
  { key: 5, link: FOOTER.faq, text: "FAQ" },
];

const Aref = styled.a`
  border-radius: 50%;
  color: #000;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
