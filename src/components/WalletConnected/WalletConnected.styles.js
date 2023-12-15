import styled from "styled-components";

export const WalletColumn = styled.div`
  position: relative;
  max-width: 100%;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 20px;
  text-align: center;
  border: 2px solid #c8c8c8;
  background: var(--gray-250);

  @media (min-width: 768px) {
    padding: 45px 40px;
  }
  @media (min-width: 992px) {
    max-width: 510px;
  }

  .icon-box {
    width: 75px;
    margin: 0 auto 10px;
  }

  .title {
    display: block;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    text-transform: capitalize;
    margin: 0 0 15px;
  }

  p {
    margin: 0 0 20px;

    a {
      color: var(--primary);
      text-decoration: underline;
    }
  }

  .btn-holder {
    padding-top: 40px;

    button {
      width: 200px;
    }
  }
`;
