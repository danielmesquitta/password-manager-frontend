import { styled } from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors['gray-700']};
  }

  span {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors['error-300']};
  }
`;

export const InputContent = styled.div`
  display: flex;
  width: 100%;
  background: ${({ theme }) => theme.colors['white']};
  border: 1px solid ${({ theme }) => theme.colors['gray-400']};
  border-radius: 4px;

  button {
    background-color: transparent;
    border: none;
    line-height: 1;
    padding: 0 1rem;

    svg {
      color: ${({ theme }) => theme.colors['gray-700']};
    }
  }

  input {
    flex: 1;
    height: 2.625rem;
    padding: 0 0.75rem;
    border: none;

    &:disabled {
      cursor: not-allowed;
    }
  }
`;
