import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { GrNext } from 'react-icons/gr';

const ReservationHeader = () => {
  const { home } = useSelector(state => state.home.homeState);
  const homeId = home ? home.id : '';

  return (
    <StHeader>
      <h1>
        <Link to="/">
          <StLogo
            viewBox="0 0 1000 1000"
            role="presentation"
            aria-hidden="true"
            focusable="false"
          >
            <path d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"></path>
          </StLogo>
        </Link>
      </h1>
      <StNav>
        <ol>
          <li>
            <NavLink
              to={`/Reservation/HouseRules/${homeId}`}
              activeClassName="active"
            >
              1. 숙소 이용규칙 확인
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/Reservation/GuestInfo/${homeId}`}
              activeClassName="active"
            >
              <GrNext />
              2. 게스트 정보 입력
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/Reservation/Payment/${homeId}`}
              activeClassName="active"
            >
              <GrNext />
              3. 확인 및 결제
            </NavLink>
          </li>
        </ol>
      </StNav>
    </StHeader>
  );
};

const StHeader = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 36px;
`;

const StLogo = styled.svg`
  height: 34px;
  width: 34px;
  margin: 22px;
  fill: ${({ theme }) => theme.color.main};
`;

const StNav = styled.nav`
  display: inline-block;
  margin-left: 48px;
  font-size: 14px;

  li {
    display: inline-flex;
    align-items: center;

    a {
      color: ${({ theme }) => theme.color.darkGray};
    }

    .active {
      color: ${({ theme }) => theme.color.black};
    }

    svg {
      margin: 0 16px;
      vertical-align: -1.5px;

      polyline {
        stroke: ${({ theme }) => theme.color.darkGray};
      }
    }
  }
`;

export default ReservationHeader;
