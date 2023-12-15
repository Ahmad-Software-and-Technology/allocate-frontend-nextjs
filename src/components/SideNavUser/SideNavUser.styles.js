import styled from "styled-components";

export const MainSideBar = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  transform: translateX(-100%);
  width: 255px;
  padding: 15px 12px 30px;
  border-right: 2px solid var(--gray-300);
  background: var(--gray-250);
  box-sizing: border-box;
  transition: all ease-in-out 0.3s;
  z-index: 99;

  .nav-active & {
    transform: translateX(0);
  }

  @media (min-width: 992px) {
    transform: none;
  }

  .logo {
    width: 185px;
    margin: 0 auto 25px;
  }
`;

export const Nav = styled.div`
  min-height: calc(100vh - 135px);
  overflow: auto;
  margin: 0 -12px 0 0;
  padding: 0 10px 0 0;

  .main-nav {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 19px;
    text-transform: capitalize;
    font-weight: 600;

    li {
      margin: 0 0 2px;
      &.active {
        a {
          background: var(--blue-dark);
        }
      }
    }

    a {
      display: block;
      padding: 16px 22px;
      color: var(--primary);
      border-radius: 10px;

      &:hover {
        background: var(--blue-dark);
      }
    }
  }
`;

export const UserController = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 12px;
  line-height: 15px;

  .icon-box {
    flex-shrink: 0;
    width: 22px;
    height: 22px;
    border-radius: 50px;
  }

  .btn {
    display: block;
    font-family: var(--base-font-family);
    padding: 5px 10px;
    border-radius: 50px;
    color: var(--white);
    background: var(--primary);
  }
`;