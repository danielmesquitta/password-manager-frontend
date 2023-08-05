import styled from 'styled-components';
import { InputContainer } from '~/components/Input/styles';

export const HomeContainer = styled.div``;

export const HomeHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;

  > div {
    display: flex;
    gap: 1rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;

    > div,
    ${InputContainer} {
      width: 100%;
    }
  }
`;

export const HomeContent = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  & > * {
    &:nth-of-type(3) {
      grid-column: span 2;
    }

    &:nth-of-type(4) {
      grid-column: span 2;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: flex;
    flex-direction: column;
  }
`;
