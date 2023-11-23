import React from "react";
// import { Dropdown, Menu } from 'antd';
import styled from "styled-components";
// import { ReactComponent as Notification } from '../../assets/images/icons/notification.svg';
// import { ReactComponent as ChevronDown } from '../../assets/images/icons/chevron-down.svg';
import { Logo as logo, PlaceholderAvatar } from "../../assets/images";
// import logout from '../../assets/images/icons/logout.svg';
import { useNavigate } from "react-router-dom";
import { LANDING_PAGE } from "../../services/route";
// import { clearState } from '../../redux/reducers/auth/login';
import { useDispatch } from "react-redux";
import { FaBars } from "react-icons/fa";
import { toggleSidebar } from "../../redux/reducers/sidebar";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const Navigate = useNavigate();
  // const signout = () => {
  //   localStorage.clear();
  //   dispatch(clearState());
  //   Navigate('/login');
  // };
  // const menu = (
  //   <Menu>
  //     <Menu.Item onClick={signout}>
  //       <img className='logout' src={logout} alt='Icon' />
  //       <span
  //         style={{ marginLeft: '1rem', color: '#28d1ff', fontSize: '1rem' }}
  //       >
  //         Log out
  //       </span>
  //     </Menu.Item>
  //   </Menu>
  // );
  return (
    <Container>
      <Logo
        style={{ cursor: "pointer" }}
        src={logo}
        onClick={() => Navigate(LANDING_PAGE.home)}
      />
      <NavMenu className="desktop_nav">
        {/* <NotificationIcon /> */}
        <Avatar className="avatar" src={PlaceholderAvatar} alt="Avatar" />
        <UserProfile>
          <p>{user?.name ?? "Client Name"}</p>
          {/* <span>Client</span> */}
        </UserProfile>
        {/* <Dropdown overlay={menu}>
          <ArrowDown />
        </Dropdown> */}
      </NavMenu>
      <FaBars
        onClick={() => dispatch(toggleSidebar())}
        className="toggle_icon mobile_nav"
      />
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  position: fixed;
  height: 60px;
  width: 100vw;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  z-index: 999;

  .toggle_icon {
    color: #28d1ff;
    cursor: pointer;
    font-size: 1.2rem;

    :hover {
      opacity: 0.8;
    }
  }

  @media screen and (min-width: 768px) {
    .mobile_nav {
      display: none;
    }
    .desktop_nav {
      display: flex;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 1rem;
    .mobile_nav {
      display: block;
    }
    .desktop_nav {
      display: none;
    }
  }

  .avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }

  h4 {
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.005em;
    color: #28d1ff;
  }
`;

const Logo = styled.img`
  width: 120px;
  height: 90%;
  object-fit: contain;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

const UserProfile = styled.div`
  margin-right: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.001em;
    color: #000;
    margin-bottom: 0.4em;
  }
  span {
    font-style: normal;
    font-weight: normal;
    font-size: 0.9rem;
    line-height: 12px;
    text-align: center;
    letter-spacing: 0.015em;
    color: #28d1ff;
  }
`;

// const NotificationIcon = styled(Notification)`
//   margin-right: 2.5rem;
//   width: 2rem;
//   height: 2rem;
//   cursor: pointer;

//   :hover {
//     transform: scale(1.1);
//     transition: 0.2s all ease-in-out;
//   }
// `;

const Avatar = styled.img`
  margin-right: 0.5rem;
  width: 40px;
  height: 40px;
`;

// const ArrowDown = styled(ChevronDown)`
//   cursor: pointer;
//   width: 1rem;
//   height: 1rem;
//   :hover {
//     transform: scale(1.1);
//     transition: 0.2s all ease-in-out;
//   }
// `;
