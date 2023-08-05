import { ButtonContainer } from './styles';
import { ButtonProps } from './types';

export const Button = ({
  children,
  appearance = 'primary',
  className = '',
  ...props
}: ButtonProps) => (
  <ButtonContainer {...props} className={`${className}  ${appearance}`}>
    {children}
  </ButtonContainer>
);
