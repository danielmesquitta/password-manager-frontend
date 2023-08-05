import { CardContainer } from './styles';
import { CardProps } from './types';

export const Card = ({
  title,
  primaryButton,
  secondaryButton,
  description,
}: CardProps) => (
  <CardContainer>
    <div>
      <strong>{title}</strong>

      <p>{description}</p>
    </div>

    <footer>
      {secondaryButton && <button {...secondaryButton} />}

      {primaryButton && <button {...primaryButton} />}
    </footer>
  </CardContainer>
);
