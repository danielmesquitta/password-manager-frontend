import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ButtonProps } from '../Button/types';

export interface ModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
}
