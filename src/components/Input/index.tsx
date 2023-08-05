import { forwardRef } from 'react';
import { InputContainer, InputContent } from './styles';
import { InputProps } from './types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, error, icon, ...props }, ref) => (
    <InputContainer>
      {label && <label htmlFor={id}>{label}</label>}

      <InputContent>
        <input ref={ref} id={id} {...props} />

        {icon && <button {...icon} />}
      </InputContent>

      {error && <span>{error}</span>}
    </InputContainer>
  ),
);
