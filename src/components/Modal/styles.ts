import { styled } from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;

  &.closed {
    display: none;
  }
`;

export const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50vw;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors['gray-100']};
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  max-height: 80vh;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 80vw;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: calc(100vw - 2rem);
  }
`;

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border: none;
    background-color: transparent;
    line-height: 1;
  }
`;

export const ModalFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;
