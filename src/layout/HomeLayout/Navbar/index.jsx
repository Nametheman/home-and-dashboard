import React from "react";
import {
  FaUserAlt,
  FaPowerOff,
  FaInfo,
  FaListAlt,
  FaWallet,
  FaGlobe,
} from "react-icons/fa";
import { Menu, Dropdown } from "antd";
import { AvatarContainer, DropDownInfo } from "./styles";
import { Logo, PlaceholderAvatar } from "../../../assets/images";
import { Link, useNavigate } from "react-router-dom";
import { LANDING_PAGE, USER_DASHBOARD } from "../../../services/route";
import { Button } from "../../../reusables";
import { useDispatch } from "react-redux";
import { clearState } from "../../../redux/reducers/auth/login";

const Index = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    dispatch(clearState());
    localStorage.clear();
    Navigate(LANDING_PAGE.home);
  };

  const DropdownMenu = (
    <Menu style={{ padding: "1.5rem 0", width: "250px", zIndex: 20000 }}>
      <DropDownInfo>
        <img src={PlaceholderAvatar} alt="" />
        <div className="user__info">
          <p>{user && user?.name}</p>
          <span>{user && user?.email}</span>
        </div>
      </DropDownInfo>
      <hr />
      <div className="px-2 mx-1 text-center">
        <p className="mb-2">Click to visit your dashboard</p>
        <Button
          full
          text="Goto Dashboard"
          primary
          onClick={() => Navigate(USER_DASHBOARD.dashboard)}
        />
        <div className="mb-2" />
        <Button full text="Logout" secondary onClick={handleLogout} />
      </div>
    </Menu>
  );

  return (
    <nav className="navbar_style navbar navbar-expand-lg navbar-fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img className="logo_image" src={Logo} alt="" />
        </a>
        {user && (
          <AvatarContainer
            className="mobile-avatar"
            src={PlaceholderAvatar}
            alt={PlaceholderAvatar}
            onClick={() => {
              console.log(USER_DASHBOARD.dashboard);
              Navigate(USER_DASHBOARD.dashboard);
            }}
          />
        )}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="bi bi-list"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll justify-content-center"
            style={{ position: "relative !important" }}
          >
            <li className="nav-item">
              <a
                onClick={() => Navigate("/#home")}
                className="nav-link"
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => Navigate("/#about")}
                className="nav-link"
                href="#about"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => Navigate("/#how-it-work")}
                className="nav-link"
                href="#how-it-works"
              >
                How It Works
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => Navigate("/#contact")}
                className="nav-link"
                href="#contact"
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => Navigate("/#blog")}
                className="nav-link"
                href="#blog"
              >
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                target="_blank"
                href="https://documenter.getpostman.com/view/15747651/2s93Xx1Pwt"
                rel="noreferrer"
              >
                Documentation
              </a>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            {user ? (
              <Dropdown overlay={DropdownMenu}>
                <AvatarContainer
                  className="avatar"
                  src={PlaceholderAvatar}
                  alt={PlaceholderAvatar}
                  onClick={() => {
                    localStorage.setItem("tab", "Overview");
                    Navigate(USER_DASHBOARD.dashboard);
                  }}
                />
              </Dropdown>
            ) : (
              <>
                <Link style={{ marginRight: "2rem !important" }} to="/login">
                  <button type="button" className="btn btn-link">
                    <i className="bi bi-person"></i> Login
                  </button>
                </Link>

                <a style={{ marginLeft: "2rem !important" }} href="/register">
                  <button type="button" className="btn btn-primary">
                    Sign-up
                  </button>
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Index;

const { account, services, support, wallet, marketplace } = USER_DASHBOARD;

export const dropdownLinks = [
  { key: 1, icon: <FaListAlt />, text: "Services", link: services },
  { key: 2, icon: <FaGlobe />, text: "Marketplace", link: marketplace },
  { key: 3, icon: <FaUserAlt />, text: "Account", link: account },
  { key: 4, icon: <FaWallet />, text: "Wallet", link: wallet },
  // { key: 5, icon: <FaCreditCard />, text: 'Payment methods', link: payment },
  { key: 6, icon: <FaInfo />, text: "Support", link: support },
  { key: 7, icon: <FaPowerOff />, text: "Log out" },
];
