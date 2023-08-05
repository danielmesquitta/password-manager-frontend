import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors['gray-200']};
  background-color: ${({ theme }) => theme.colors['gray-100']};
  z-index: 10;
`;

export const HeaderContainer = styled.div`
  margin: auto;
  max-width: 72rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem 0;

  > a {
    padding: 1rem;
    margin-left: -1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    > img {
      height: 2.5rem;
    }

    span {
      font-weight: 700;
      color: ${({ theme }) => theme.colors['gray-800']};
    }
  }

  > nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    > a:last-child {
    }
  }
`;
