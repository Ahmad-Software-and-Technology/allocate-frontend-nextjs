import styled from "styled-components";

export const TabSetContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const TabList = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 17px;
  font-weight: 600;
  text-align: center;
  border-bottom: 1px solid var(--gray-300);

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
    text-align: left;
  }
`;

export const Tab = styled.div`
  position: relative;
  padding: 10px 20px;
  cursor: pointer;
  color: var(--gray-50);
  color: ${(props) => (props.isActive ? "#000" : "none")};

  &:after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -2px;
    width: 55px;
    height: 3px;
    border-radius: 50px;
    background: ${(props) => (props.isActive ? "var(--blue)" : "none")};
  }

  &:hover {
    &:after {
      background: var(--blue);
    }
  }
`;

export const TabPanel = styled.div`
  padding: 30px 0 20px;
`;
