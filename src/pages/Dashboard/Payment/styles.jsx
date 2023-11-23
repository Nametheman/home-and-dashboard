import styled from 'styled-components';

export default styled.div`
  position: relative;
  // top: 80px;
  width: 100%;
  min-height: calc(100vh - 80px) !important;
  text-align: center;
  color: #677788;
  padding: 20px 0 100px;
  margin: 20px 0;


  h1 {
    font-size: 2.5rem;
  }
`;

export const UserDetailsContainer = styled.div`
  display: flex;
  gap: 1rem;

  img {
    border-radius: 50%;
  }
`;
