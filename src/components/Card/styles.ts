import { styled } from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors['white']};
  border-radius: 0.5rem;
  padding: 1rem;
  flex-direction: column;
  overflow: hidden;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  footer {
    display: flex;
    align-self: flex-end;
    gap: 0.5rem;

    button {
      border: none;
      background-color: transparent;
      line-height: 1;

      svg {
        color: ${({ theme }) => theme.colors['primary-500']};
      }
    }
  }
`;
