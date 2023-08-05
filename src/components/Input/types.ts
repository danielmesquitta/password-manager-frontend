import { ButtonProps } from '../Button/types';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  icon?: ButtonProps;
};
