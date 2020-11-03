import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import Division from './Division';
import Button from '../Global/Button';
import { setScrollLocationY } from '../../Modules/home';

const Amenities = ({ home, isScreenMedium }) => {
  const ref = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setScrollLocationY('amenitiesRef', ref.current));
  }, []);

  return (
    <Division title="편의시설" sentRef={ref}>
      <StAmenityList>
        {home.amenities.map((amenity, i) => {
          if (isScreenMedium && i > 4) return;
          const noIcon = amenity.icon === 'None';

          return (
            <StAmenity key={i} noIcon={noIcon}>
              <svg
                aria-hidden="true"
                role="presentation"
                focusable="false"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                // dangerouslySetInnerHTML={{
                //   __html: `<path d="${amenity.icon}"></path>`,
                // }}
              >
                <path
                  d={
                    !noIcon
                      ? amenity.icon
                      : 'M25 2a5 5 0 0 1 4.995 4.783L30 7v18a5 5 0 0 1-4.783 4.995L25 30H7a5 5 0 0 1-4.995-4.783L2 25V7a5 5 0 0 1 4.783-4.995L7 2zm0 2H7a3 3 0 0 0-2.995 2.824L4 7v18a3 3 0 0 0 2.824 2.995L7 28h18a3 3 0 0 0 2.995-2.824L28 25V7a3 3 0 0 0-2.824-2.995zM11.1 17a5.006 5.006 0 0 0 3.9 3.9v2.03A7.005 7.005 0 0 1 9.071 17zm9.8 0l2.029.001a7.005 7.005 0 0 1-5.928 5.928v-2.03A5.006 5.006 0 0 0 20.9 17zM16 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm1.001-5.929A7.005 7.005 0 0 1 22.929 15H20.9A5.006 5.006 0 0 0 17 11.1zm-2.001 0v2.03A5.006 5.006 0 0 0 11.1 15H9.07A7.005 7.005 0 0 1 15 9.07zM23 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z'
                  }
                />
              </svg>
              <span>{!noIcon ? amenity.name : '일산화탄소 경보기'}</span>
            </StAmenity>
          );
        })}
      </StAmenityList>
      <Button padding="13px 23px" transition>
        편의시설 모두 보기
      </Button>
    </Division>
  );
};

const StAmenityList = styled.ul`
  margin-bottom: 24px;
  @media ${({ theme }) => theme.size.medium} {
    max-height: 200px;
    overflow: hidden;
  }
`;

const StAmenity = styled.li`
  display: inline-flex;
  align-items: center;
  width: calc(50% - 2rem);
  margin-right: 2rem;
  padding-bottom: 16px;

  @media ${({ theme }) => theme.size.medium} {
    width: 100%;
    margin-right: 0;
  }

  svg {
    display: block;
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
    margin-right: 16px;
    fill: currentcolor;
  }

  ${({ noIcon }) =>
    noIcon &&
    css`
      svg {
        fill: ${({ theme }) => theme.color.gray};
      }
      span {
        text-decoration: line-through;
      }
    `}
`;

export default Amenities;
