import { ButtonHTMLAttributes } from 'react';

export interface CardProps {
  title: string;
  description: string;
  primaryButton?: ButtonHTMLAttributes<HTMLButtonElement>;
  secondaryButton?: ButtonHTMLAttributes<HTMLButtonElement>;
}
