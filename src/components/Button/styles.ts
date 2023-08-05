import { styled } from 'styled-components';

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  border-radius: 6px;
  height: 2.625rem;
  padding: 0 1rem;
  border: 0;
  background: ${({ theme }) => theme.colors['primary-500']};
  color: ${({ theme }) => theme.colors['white']};
  font-size: 0.875rem;

  &.secondary {
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors['primary-500']};
    color: ${({ theme }) => theme.colors['primary-500']};
  }

  &:focus {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors['primary-700']};
  }
`;
