import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaChevronRight } from "react-icons/fa";
import { Button } from "../../reusables";
import { Tab } from "../../components/Dashboard/Subscription";
import { HomeLayout } from "../../layout";
import { useDispatch, useSelector } from "react-redux";
import { removeService } from "../../redux/actions/services/removeServices";
import {
  removeServicesSelector,
  clearState as addServiceClearState,
} from "../../redux/reducers/services/removeServices";
import { addNewService } from "../../redux/actions/services/addServices";
import {
  addServicesSelector,
  clearState as removeServiceClearState,
} from "../../redux/reducers/services/addServices";

const Index = () => {
  const Navigate = useNavigate();
  const test = "test";
  const dispatch = useDispatch();
  const activeServices = JSON.parse(localStorage.getItem("allowedServices"));
  const service = JSON.parse(localStorage.getItem("selectedService"));
  const active = activeServices?.filter((item) => item === service?.serviceKey);
  const [data] = React.useState({
    allowedServices: [service?.serviceKey],
  });
  const [contact, setContact] = useState("/");
  const {
    loading: removeServiceLoading,
    success: removeServiceSuccess,
    error: removeServiceError,
    errors: removeServiceErrors,
  } = useSelector(removeServicesSelector);
  const {
    loading: addServiceLoading,
    success: addServiceSuccess,
    error: addServiceError,
    errors: addServiceErrors,
  } = useSelector(addServicesSelector);
  console.log({ data });
  const [show, setShow] = useState(true);
  function clickModal(e) {
    alert();
  }
  return (
    <HomeLayout
      content={
        <Container>
          {service && (
            <>
              <Body>
                <div className="title">
                  <h2>{service?.name}</h2>
                  <div className="tag">{service?.category}</div>
                </div>
                <div className="subtitle">{service?.summary}</div>
                <TabGroup>
                  <Tab tab="info" text="API Info" />
                  <a
                    target="_blank"
                    className="link"
                    href="https://documenter.getpostman.com/view/15747651/2s93Xx1Pwt"
                  >
                    View Documentation
                  </a>
                  <a href="/#contact" className="link">
                    Pricing
                  </a>
                </TabGroup>
                {/* dangerouslySetInnerHTML={{__html:test}} */}

                <div className="paragraph">
                  <h4>What is {service?.name} service?</h4>
                  <p>{service?.description}</p>
                </div>
                <div className="paragraph">
                  <h4>How to use {service?.name} service?</h4>
                  <p>{service?.howTo}</p>
                </div>
                <div className="paragraph">
                  <h4>
                    <span>{service?.name} services</span> comprise the following
                    subservices
                  </h4>
                  <ul>
                    {service?.subService?.map((item) => {
                      return <li>{item}</li>;
                    })}
                  </ul>
                </div>
                {show && (
                  <dialog show>
                    <h1>hello</h1>
                  </dialog>
                )}
              </Body>
              <Sidebar>
                {activeServices && (
                  <div className="group button__group">
                    {active.length === 0 && (
                      <>
                        <Button
                          loading={addServiceLoading}
                          onClick={async () => {
                            dispatch(addServiceClearState());
                            dispatch(removeServiceClearState());
                            await new Promise((res) => setTimeout(res, 1000));
                            dispatch(addNewService(data));
                          }}
                          full
                          lightPrimary
                          text="Add Service"
                        />
                        {addServiceSuccess && (
                          <p className="msg text-success">
                            Service added successfully
                          </p>
                        )}
                        {addServiceError && (
                          <p className="msg text-danger">{addServiceErrors}</p>
                        )}
                      </>
                    )}
                    {active.length === 1 && (
                      <>
                        <Button
                          loading={removeServiceLoading}
                          onClick={async () => {
                            dispatch(addServiceClearState());
                            dispatch(removeServiceClearState());
                            await new Promise((res) => setTimeout(res, 1000));
                            dispatch(removeService(data));
                          }}
                          full
                          primary
                          text="Remove Service"
                        />
                        {removeServiceSuccess && (
                          <p className="msg text-success">
                            Service removed successfully
                          </p>
                        )}
                        {removeServiceError && (
                          <p className="msg text-danger">
                            {removeServiceErrors}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                )}
                {!activeServices && (
                  <>
                    <Button
                      onClick={() => Navigate("/")}
                      full
                      lightPrimary
                      text="Get Started"
                    />
                  </>
                )}
                <div className="category group">
                  <h4>Categories</h4>
                  <div className="tag__group">
                    <div className="tag">{service?.category}</div>
                    <div className="tag">Web</div>
                  </div>
                </div>
                <div className="category group">
                  <h4>Support Links</h4>
                  <Link to="/support">
                    <FaChevronRight className="icon" /> Support
                  </Link>
                  <Link to="/support">
                    <FaChevronRight className="icon" />
                    Privacy Policy
                  </Link>
                </div>
              </Sidebar>
            </>
          )}
        </Container>
      }
    />
  );
};

export default Index;

const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 1.5fr;
  gap: 1rem;
  padding: 40px 150px 100px;

  @media screen and (max-width: 1024px) {
    padding: 48px 50px;
  }

  @media screen and (max-width: 768px) {
    padding: 36px;
  }

  @media screen and (max-width: 450px) {
    padding: 16px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 20px;
  }

  .msg {
    font-size: 0.9em !important;
  }
  .active {
    color: #28d1ff !important;
  }

  .link {
    color: silver;
    font-weight: 500;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 1rem;

    :hover {
      color: #28d1ff;
    }
  }

  ul {
    margin: 1rem 0 0 2rem;
    display: flex;
    flex-direction: column;
    font-weight: bold;
    gap: 0.5rem;
  }

  a {
    text-decoration: none !important;
    color: #000000;
    font-size: 1.1rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;

    .icon {
      font-size: 0.8rem;
      color: #333;
    }
    :hover {
      color: #28d1ff;

      .icon {
        color: #28d1ff;
      }
    }
  }
`;

const Body = styled.div`
  padding: 0 1rem 0 0;
  border-right: 1px solid #e5e5e5;

  @media screen and (max-width: 768px) {
    border-right: none;
  }

  hr {
    border-bottom: 1px solid #e5e5e5;
  }
  .title {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;

    h2 {
      font-size: 2rem;
      text-transform: capitalize;
      letter-spacing: 0.05rem;

      @media screen and (max-width: 768px) {
        font-size: 1.7rem;
      }
    }

    .tag {
      background: #28d1ff;
      border-radius: 5px;
      padding: 0.2em 0.5em;
      font-size: 1.1rem;
      font-weight: 400;
      color: #fff;

      @media screen and (max-width: 768px) {
        font-size: 0.9rem;
      }
    }
  }

  .subtitle {
    color: #677788;
    font-size: 1.1rem;
    text-align: left;

    @media screen and (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  .paragraph {
    margin: 2rem 0;
    text-align: left;
    h4 {
      margin-bottom: 0.5em !important;
      font-size: 1.3rem;
      font-weight: 500;

      span {
        font-weight: 600;
        text-transform: capitalize;
        text-decoration: underline;
      }

      @media screen and (max-width: 768px) {
        font-size: 1.1rem;
      }
    }
    p {
      text-align: justify;
      font-size: 1.1rem;
      color: #677788;

      @media screen and (max-width: 768px) {
        font-size: 0.9rem;
      }
    }
  }

  .pricing {
    p {
      font-size: 1.1rem;
    }
  }
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 0 0 0 1rem;

  .group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h4 {
    font-size: 1.3rem;
    text-align: left;

    @media screen and (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  .tag__group {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .tag {
    background: #f1f3f5;
    border-radius: 5px;
    padding: 0.35rem 1rem;
    color: #677788;
    font-weight: 300;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    :hover {
      background: #677788;
      color: #f1f3f5;
    }
  }
`;

const TabGroup = styled.div`
  margin: 1rem 0;
  display: flex;
  width: 100%;
  //   padding: 0 0 1rem;
  border-bottom: 1px solid #e5e5e5;

  @media screen and (max-width: 768px) {
    a {
      font-size: 1rem !important;
    }
  }
`;
