import React from 'react';
import styled from 'styled-components';

const Division = ({ children, title, border, padding, sentRef }) => {
  return (
    <StDivision border={border} padding={padding} ref={sentRef}>
      {title && <h3>{title}</h3>}
      {children}
    </StDivision>
  );
};

const StDivision = styled.div`
  padding: 48px 0;
  border-bottom: ${props => props.border || '1px solid #DDDDDD'};
  background-color: ${({ theme }) => theme.color.white};

  h3 {
    padding-bottom: ${props => props.padding || '2.4rem'};
    font-size: 2.2rem;
    font-weight: 600;
  }
`;

export default Division;
