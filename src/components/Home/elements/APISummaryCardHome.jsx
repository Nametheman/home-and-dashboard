import React from 'react';
import styled from 'styled-components';

const APISummaryCardHome = (props) => {
  const [expand, setExpand] = React.useState(false);
  return (
    <Container className='col-md-4 mb-4'>
      <div data-aos='zoom-in' className='services_card'>
        <div className='d-flex justify-content-center align-items-center'>
          <i className='bi bi-gear green'></i>
          <h4>
            <b className='text-success'>{props?.name} Service</b>
          </h4>
        </div>
        <div className='tag'>{props?.category}</div>
        {!expand && (
          <>
            <p className='text-muted'>
              {props?.description.substring(0, 100)}...
            </p>
            <div
              onClick={() => setExpand(true)}
              className='my-3 button text-success'
            >
              Read more
            </div>
          </>
        )}
        {expand && (
          <>
            <p>{props?.description}</p>
            <div
              onClick={() => setExpand(false)}
              className='my-3 button text-success'
            >
              Hide
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default APISummaryCardHome;

const Container = styled.div`
  .button {
    cursor: pointer;
    :hover {
      opacity: 0.8;
    }
  }

  .tag {
    border-radius: 5px;
    margin: 0 auto 1em;
    max-width: 150px;
    background: rgba(221, 255, 221, 1);
    color: green;
    display: flex;
    align-items: center;
    padding: 0.25em 2em;
    font-weight: 500;
    font-size: 14px;
  }
  h4 {
    text-transform: capitalize;
  }
  i {
    font-size: 2rem;
    margin-right: 1rem;
  }
`;
