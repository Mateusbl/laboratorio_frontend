import React from "react";
import styled from "styled-components";

function Trusted() {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Empresas parceiras</h3>
        <div className="brand-section-slider">
          <div className="slide">
            <img
              src={`${process.env.PUBLIC_URL}/images/3.jpeg`}
              alt="trusted-brands"
              style={{ borderRadius: '50%' }}
            />
          </div>
          <div className="slide">
            <img
              src={`${process.env.PUBLIC_URL}/images/4.jpeg`}
              alt="trusted-brands"
              style={{ borderRadius: '50%' }}
            />
          </div>
          <div className="slide">
            <img
              src={`${process.env.PUBLIC_URL}/images/5.jpeg`}
              alt="trusted-brands"
              style={{ borderRadius: '50%' }}
            />
          </div>
          <div className="slide">
            <img
              src={`${process.env.PUBLIC_URL}/images/6.jpeg`}
              alt="trusted-brands"
              style={{ borderRadius: '50%' }}
            />
          </div>
          <div className="slide">
            <img
              src={`${process.env.PUBLIC_URL}/images/7.jpeg`}
              alt="trusted-brands"
              style={{ borderRadius: '50%' }}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 8rem;
    height: 8rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      text-align: center;
    }
  }
`;

export default Trusted;
