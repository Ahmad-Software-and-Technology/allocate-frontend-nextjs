import styled from "styled-components";

export const WelcomeColumn = styled.div`
  position: relative;
  max-width: 100%;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 20px;
  border: 2px solid #c8c8c8;
  background: var(--gray-250);

  @media (min-width: 768px) {
    padding: 45px 40px;
  }
  @media (min-width: 992px) {
    max-width: 510px;
    padding: 75px 40px;
  }

  .logo-box {
    width: 200px;
    margin: 0;

    @media (min-width: 768px) {
      width: 362px;
    }

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  .title {
    display: block;
    font-size: 20px;
    line-height: 25px;
    font-weight: 600;
    text-transform: capitalize;
    margin: 0 0 20px;

    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 30px;
      margin: 0 0 30px;
    }
  }
`;
