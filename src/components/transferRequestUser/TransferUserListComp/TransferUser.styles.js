import styled from "styled-components";

export const TransferUserListStyle = styled.div`
  *::-webkit-scrollbar {
    width: 2px;
  }
`;
export const FilterBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 33px;
  .inputWrapper {
    position: relative;
    border: 1px solid var(--gray-300);
    border-radius: 5px;
    max-width: 576px;
    width: 100%;
    color: var(--solid-gray);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 14px 14px 14px 46px;
    .icon {
      position: absolute;
      left: 14px;
    }
    input {
      background: transparent;
      width: 100%;
      border: none;
      outline: none;
      &::placeholder {
        color: var(--gray-50);
      }
    }
  }
`;
export const TransferListWrapper = styled.div`
  max-width: 891px;
  width: 100%;
  max-height: 650px;
  overflow-y: auto;
`;
export const TransferList = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 50px;
  padding: 20px;
  border: 1px solid var(--gray-300);
  border-radius: 5px;
  margin-bottom: 23px;
  .wrapper {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
  }
  .id,
  .amount {
    color: var(--blue);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .userID,
  .date {
    color: var(--gray-50);
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 5px;
  }
  .date {
    &:last-child {
      margin-bottom: 0px;
    }
  }
  .status {
    border-radius: 5px;
    background: #d6ecff;
    color: var(--blue);
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 6px 30px;
  }
  .projectName {
    color: var(--solid-gray);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .program {
    color: var(--solid-gray);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
