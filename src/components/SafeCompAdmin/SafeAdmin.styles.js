import styled from "styled-components";
export const InputFilter = styled.div`
  .inputWrapper {
    max-width: 576px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #e1e1e1;
    padding: 14px 14px 14px 48px;
    position: absolute;
    .icon {
      position: absolute;
      left: 13px;
      top: 12px;
    }
    input {
      width: 100%;
      border: none;
      outline: none;
      color: var(--solid-gray);
      background: transparent;
      &::placeholder {
        color: var(--gray-50);
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
`;
export const AdminSafeWrapper = styled.div`
  position: relative;
`;
