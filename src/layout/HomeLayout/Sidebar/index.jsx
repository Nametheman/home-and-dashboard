import React from 'react';
import { FaTimes } from 'react-icons/fa';
// import { BtnFilled, BtnOutline } from '../Navbar/styles';
import Container, {
  NavLink,
  CloseBtn,
  NavMenu,
  Logout,
  UserInfo,
} from './styles';
// import { FaTh } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../../../redux/reducers/sidebar';
import { dropdownLinks } from '../Navbar';
import { clearState } from '../../../redux/reducers/auth/login';
import { useNavigate } from 'react-router-dom';
import { LANDING_PAGE } from '../../../services/route';
import { PlaceholderAvatar } from '../../../assets/images';

const Index = (props) => {
  const user = JSON.parse(localStorage.getItem('user'));

  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const handleTabClick = () => {
    dispatch(toggleSidebar());
  };

  const handleLogout = () => {
    dispatch(clearState());
    localStorage.clear();
    dispatch(toggleSidebar());
    Navigate(LANDING_PAGE.home);
  };

  return (
    <Container showSidebar={props.showSidebar}>
      <CloseBtn onClick={props.toggleSidebar}>
        <FaTimes />
      </CloseBtn>
      <UserInfo>
        <img src={PlaceholderAvatar} alt='' />
        <div className='user__info'>
          <p>{user && user?.name}</p>
          <span>{user && user?.email}</span>
        </div>
      </UserInfo>
      <hr />
      <NavMenu>
        {dropdownLinks.slice(0, 5).map((item) => {
          const { key, icon, text, link } = item;
          return (
            <NavLink key={key} onClick={handleTabClick} to={link}>
              {icon}
              {text}
            </NavLink>
          );
        })}
      </NavMenu>
      <hr />
      {dropdownLinks.slice(-1).map((item) => {
        const { key, icon, text } = item;
        return (
          <Logout key={key} onClick={handleLogout}>
            {icon}
            {text}
          </Logout>
        );
      })}
      <div className='overlay' onClick={props.toggleSidebar} />
    </Container>
  );
};

export default Index;
