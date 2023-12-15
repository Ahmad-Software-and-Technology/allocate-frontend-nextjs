import styled from "styled-components";

export const RequestBlock = styled.div`
  position: relative;
  width: 100%;
  padding: 20px 0;
`;

export const Header = styled.div`
  position: relative;
  padding: 0 150px 15px 0;
  margin: 0 0 30px;
  border-bottom: 1px solid var(--gray-300);

  button {
    display: block;
    min-width: 250px;
    padding: 11px;
    margin: 0 0 10px;
    border-radius: 10px;
    text-align: center;
    font-weight: 500;

    @media (min-width: 768px) {
      min-width: 122px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
    }
  }

  .subtitle {
    display: block;
    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
    margin: 0 0 15px;
    color: var(--blue);
  }

  .request-number {
    display: block;
    font-size: 24px;
    line-height: 28px;
    font-weight: 500;
    margin: 0 0 8px;
    color: var(--blue);
  }

  .date {
    display: block;
    font-size: 12px;
    line-height: 15px;
    font-weight: 500;
    color: var(--gray-50);
  }
`;

export const ContentWrap = styled.div`
  overflow: hidden;
  padding: 0 0 32px;

  .info-box {
    max-width: 570px;
    width: 100%;
    font-size: 14px;
    line-height: 18px;
    font-weight: 500;
    margin-bottom: 8px;
    border-radius: 5px;
    color: var(--gray-50);
    border: 1px solid var(--gray-300);

    @media (min-width: 768px) {
      display: flex;
    }

    .label-text {
      display: block;
      color: var(--primary);
      text-transform: capitalize;
      padding: 10px 12px;
      border-width: 0 0 1px;
      border-style: solid;
      border-color: var(--gray-300);

      @media (min-width: 768px) {
        padding: 15px 20px;
        border-width: 0 1px 0 0;
      }
    }

    .text {
      display: block;
      max-width: 570px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      padding: 15px 17px;
    }
  }
  .infoBoxwithButton {
    max-width: 750px;
    @media screen and (min-width: 768px) {
      display: flex;
      .transfer {
        margin: 20px 0 0 10px;
        color: var(--blue);
        text-decoration-line: underline;
        cursor: pointer;
      }
    }
    button {
      height: 49px;
      border-radius: 10px;
    }
  }
`;

export const TaxDocument = styled.div`
  position: relative;
  padding-top: 32px;

  .title {
    display: block;
    font-weight: 500;
    margin: 0 0 15px;
  }

  .document {
    display: inline-flex;
    align-items: center;
    font-weight: 500;
    gap: 10px;
    min-width: 209px;
    padding: 15px 20px;
    border-radius: 5px;
    color: var(--blue);
    border: 1px solid var(--gray-300);
  }
`;

export const Footer = styled.div`
  position: relative;
  padding-top: 30px;
  border-top: 1px solid var(--gray-300);

  .title {
    display: block;
    font-weight: 500;
    margin: 0 0 15px;
  }
`;

export const TimeStampList = styled.div`
  max-width: 705px;

  .list {
    font-size: 14px;
    line-height: 18px;
    color: var(--gray-50);
    margin: 0 0 15px;

    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      gap: 10px;
    }

    .text {
      display: block;
      margin: 0 0 5px;

      @media (min-width: 768px) {
        margin: 0;
      }

      strong {
        color: var(--blue);
        text-transform: uppercase;
      }
    }
  }
`;
