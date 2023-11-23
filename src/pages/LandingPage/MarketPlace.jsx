import React from "react";
import styled from "styled-components";
import { MarketplaceHero } from "../../assets/images";
import { Searchbar } from "../../reusables";
import { HomeLayout } from "../../layout";
import APISummaryCard from "../../components/Home/elements/APISummaryCard";
// import { services } from '../../services/dummyData';
import { useDispatch, useSelector } from "react-redux";
import { getServicesSelector } from "../../redux/reducers/services/getServices";
import { getServices } from "../../redux/actions/services/getServices";

const Index = () => {
  const dispatch = useDispatch();
  const { services } = useSelector(getServicesSelector);
  console.log({ services });
  React.useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  const [newServices, setNewServices] = React.useState([]);

  React.useEffect(() => {
    setNewServices(services);
  }, [services]);

  const handleSearch = (e) => {
    const { value } = e.target;
    const filterServices = [...services].filter((obj) =>
      Object.keys(obj).some((key) =>
        String(obj[key]).toLowerCase().includes(value.toLowerCase())
      )
    );
    setNewServices(filterServices);
  };

  const exploreData = [
    { key: 1, text: "All", value: services.length },
    // {
    //   key: 2,
    //   text: 'Web Services',
    //   value: services?.filter((service) => service?.category === 'Web Services')
    //     .length,
    // },
  ];

  const handleFilterByCategory = (category) => {
    if (category !== "All") {
      const results = services.filter(
        (service) => service.category === category
      );
      setNewServices(results);
    } else {
      setNewServices(services);
    }
  };

  return (
    <HomeLayout
      content={
        <Container>
          <HeroContainer>
            <div className="text__group">
              <h1>API Marketplace</h1>
              <p>
                {/* See our APIs and app backends. All APIs have a <b>free plan</b>.
                <br /> No credit card required. */}
                Explore our API
              </p>
              <Searchbar full onTextChange={(e) => handleSearch(e)} />
            </div>
            <img src={MarketplaceHero} alt={MarketplaceHero} className="hero" />
          </HeroContainer>
          <ListContainer>
            <CategoryListWrapper>
              <div className="category__group">
                <h2>Explore</h2>
                {exploreData.map((item) => {
                  const { key, text, value } = item;
                  return (
                    <CategoryText
                      onClick={() => handleFilterByCategory(text)}
                      key={key}
                    >
                      <p>{text}</p>
                      <div className="value">{value}</div>
                    </CategoryText>
                  );
                })}
              </div>
            </CategoryListWrapper>
            <APIListWrapper>
              <h3>
                Explore all our <b>{services.length} APIs</b> to get started
              </h3>
              {/* <br /> */}
              <h4> Featured & Bestsellers</h4>
              <div className="card__wrapper">
                {newServices.map((service) => {
                  return <APISummaryCard {...service} />;
                })}
              </div>
            </APIListWrapper>
          </ListContainer>
        </Container>
      }
    />
  );
};

export default Index;

const Container = styled.div`
  min-height: calc(100vh - 80px) !important;
  padding: 20px 150px 100px;

  @media screen and (max-width: 1024px) {
    padding: 48px 50px;
  }

  @media screen and (max-width: 768px) {
    padding: 36px;
  }

  @media screen and (max-width: 450px) {
    padding: 16px;
  }
`;

const HeroContainer = styled.div`
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .text__group {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;

    h1 {
      color: #28d1ff;
      font-size: 2.7rem;
      font-weight: 500;
      letter-spacing: 0.1rem;

      @media screen and (max-width: 768px) {
        font-size: 2rem;
      }
    }

    p {
      color: #677788;
      font-size: 0.9rem;
    }
  }

  .hero {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 4fr;
  gap: 1rem;
  min-height: 50vh;
  margin: 0 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CategoryListWrapper = styled.div`
  border-right: 1px solid #e5e5e5;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }
  .category__group {
    margin-bottom: 2.5rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const APIListWrapper = styled.div`
  padding: 0 1rem 2rem;

  h3 {
    font-size: 1.5rem;
    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 2rem 0 0.5rem !important;

    @media screen and (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 2rem 0 0.5rem !important;

    @media screen and (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  .card__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;

const CategoryText = styled.div`
  width: 100%;
  margin: 1rem 0;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: #677788;

  :hover {
    color: #28d1ff !important;

    p {
      color: #28d1ff !important;
    }
  }

  .value {
    border-radius: 20px;
    border: 1px solid #e5e5e5;
    padding: 0.05em 0.75em;
  }
`;
