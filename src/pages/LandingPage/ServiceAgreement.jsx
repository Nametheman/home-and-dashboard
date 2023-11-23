import React from "react";
import styled from "styled-components";
import { MarketplaceHero } from "../../assets/images";
import { HomeLayout } from "../../layout";

const Index = () => {
  return (
    <HomeLayout
      content={
        <Container>
          <HeroContainer>
            <div className="text__group">
              <h1>Service Agreement</h1>
            </div>
            <img src={MarketplaceHero} alt={MarketplaceHero} className="hero" />
          </HeroContainer>
          <InfoCard>
            <div className="getting_started">
              <h2>Lorem ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="getting_started">
              <h3>Lorem ipsum</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?
              </p>
            </div>
            <div className="getting_started">
              <h3>Lorem ipsum</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?
              </p>
            </div>
            <div className="getting_started">
              <h3>Lorem ipsum</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?
              </p>
            </div>
            <div className="getting_started">
              <h3>Lorem ipsum</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?
              </p>
            </div>
            <div className="getting_started">
              <h3>Lorem ipsum</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?
              </p>
            </div>
          </InfoCard>
        </Container>
      }
    />
  );
};

export default Index;

const Container = styled.div`
  min-height: calc(100vh - 80px);
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
      font-size: 2.7rem;
      font-weight: 500;
      letter-spacing: 0.1rem;

      @media screen and (max-width: 768px) {
        font-size: 2.4rem;
      }

      @media screen and (max-width: 450px) {
        font-size: 2rem;
      }

      a {
        text-decoration: none;
        font-weight: 600;
        color: #28d1ff;
      }
    }

    p {
      color: #677788;
      font-size: 1.02rem;
    }
  }

  .hero {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const InfoCard = styled.div`
  border-radius: 5px;
  border: 1px solid #e5e5e5;
  padding: 2rem;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  div {
    h2 {
      font-size: 2.1rem;
      font-weight: 500;
      letter-spacing: 0.1rem;

      @media screen and (max-width: 768px) {
        font-size: 2rem;
      }

      @media screen and (max-width: 450px) {
        font-size: 1.7rem;
      }
    }
    h3 {
      margin: 2rem 0 0.5rem !important;
      font-size: 1.7rem;
      font-weight: 500;

      @media screen and (max-width: 768px) {
        font-size: 1.4rem;
      }

      @media screen and (max-width: 450px) {
        font-size: 1.25rem;
      }
    }
    p {
      font-size: 1.1rem;
      font-weight: 400;
      color: #677788;
      text-align: justify;
      line-height: 2rem;

      @media screen and (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }
`;
