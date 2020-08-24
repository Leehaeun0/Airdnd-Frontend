import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { Airbnb } from '@styled-icons/boxicons-logos/Airbnb';

const WishlistsHeader = () => {
  return (
    <WishlistsHeaderWrapper>
      <Header>
        <Airbnb size="4.5rem" />
      </Header>
    </WishlistsHeaderWrapper>
  );
};

const WishlistsHeaderWrapper = styled.div`
  position: fixed;
  z-index: 1;
  background: ${({ theme }) => theme.color.white};
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => darken(0.1, theme.color.lightGray)};
  box-shadow: 1px 0 0.4rem ${({ theme }) => theme.color.shadow};
  padding-left: 7.5rem;
  color: ${({ theme }) => theme.color.main};
  height: 8rem;
`;

export default WishlistsHeader;
