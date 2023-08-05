import { X } from 'react-feather';
import { Button } from '../Button';
import {
  ModalBackground,
  ModalContainer,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from './styles';
import { ModalProps } from './types';

export const Modal = ({
  isOpen,
  onClose,
  primaryButton,
  secondaryButton,
  title,
  children,
  className = '',
  ...rest
}: ModalProps) => (
  <ModalContainer
    className={`${className} ${isOpen ? '' : 'closed'}`}
    {...rest}
  >
    <ModalBackground role="presentation" onClick={() => onClose()} />

    <ModalContent>
      <ModalHeader>
        <strong>{title}</strong>

        <button type="button" onClick={() => onClose()}>
          <X />
        </button>
      </ModalHeader>

      {children}

      <ModalFooter>
        {secondaryButton && <Button {...secondaryButton} />}

        {primaryButton && <Button {...primaryButton} />}
      </ModalFooter>
    </ModalContent>
  </ModalContainer>
);
