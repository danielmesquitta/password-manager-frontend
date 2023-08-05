import { NavLink } from 'react-router-dom';
import { HeaderContainer, HeaderWrapper } from './styles';

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <NavLink to="/">
          <img src="/password-manager.svg" />
          <span>Password Manager</span>
        </NavLink>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
