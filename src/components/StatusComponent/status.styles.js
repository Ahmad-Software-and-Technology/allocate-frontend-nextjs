import styled from "styled-components";
export const StatusModal = styled.div`
  width: 390px;
  border: 1px solid var(--gray-300);
  border-radius: 5px;
  position: relative;
  background: var(--white);
  .icon {
    position: absolute;
    right: 10px;
    top: 17px;
  }
  .itemWrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 20px;
    button {
      margin: 23px auto 3px auto;
    }
  }
  .detectedNftHEading {
    color: var(--solid-gray);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    position: relative;
    padding: 21px;

    &::before {
      content: "";
      position: absolute;
      height: 1px;
      background: var(--gray-300);
      top: 54px;
      left: 0;
      right: 0;
    }
  }
`;
export const Item = styled.div`
  border-radius: 5px;
  border: 1px solid
    ${({ color }) => (color ? "var(--blue)" : "var(--gray-300)")};
  padding: 16px 18px;
  color: ${({ color }) => (color ? "var(--blue)" : "var(--gray-50)")};
`;
