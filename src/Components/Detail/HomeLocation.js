import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Division from './Division';
import Checkbox from '../Global/Checkbox';
import Button from '../Global/Button';
import HomeMapContainer from '../../Containers/Detail/HomeMapContainer';
import { setScrollLocationY } from '../../Modules/home';

const HomeLocation = ({ home }) => {
  const [check, setCheck] = useState(false);
  const [zoom, setZoom] = useState(15);
  const ref = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setScrollLocationY('locationRef', ref.current));
  }, []);

  const onToggle = e => setCheck(e.target.checked);
  return (
    <Division title="위치" sentRef={ref}>
      <HomeMapContainer zoom={zoom}>
        <StScaleBtn>
          <Button onClick={() => setZoom(zoom + 1)}>
            <svg viewBox="0 0 16 16" focusable="false">
              <path d="M7 1a1 1 0 0 1 2 0v14a1 1 0 1 1-2 0V1z"></path>
              <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"></path>
            </svg>
          </Button>
          <Button onClick={() => setZoom(zoom - 1)}>
            <svg viewBox="0 0 16 16" focusable="false">
              <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"></path>
            </svg>
          </Button>
        </StScaleBtn>
        <StCheckbox value checked={check} onChange={onToggle}>
          대중교통
        </StCheckbox>
        <StNotice>정확한 위치는 예약 완료 후에 표시됩니다.</StNotice>
      </HomeMapContainer>
      <StH4>{home.address}</StH4>
      <div dangerouslySetInnerHTML={{ __html: home.addressDescription }} />
      <Button padding="13px 23px;" transition>
        자세한 위치 정보
      </Button>
    </Division>
  );
};

const StCheckbox = styled(Checkbox)`
  position: absolute;
  top: 24px;
  right: 82px;
  padding: 0.5rem 0.8rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  border-radius: 8px;
  white-space: nowrap;
  background-color: ${({ theme }) => theme.color.white};

  &:hover {
    background-color: ${({ theme }) => theme.lightGray};
  }

  span:nth-of-type(1) {
    background-color: ${({ theme }) => theme.color.white};
  }

  span:last-child {
    padding-left: 8px;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
  }
`;

const StScaleBtn = styled.div`
  width: 40px;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 24px;
  right: 24px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;

  button {
    border: none;
    padding: 0%;
    border-radius: 0;

    &:nth-of-type(2) {
      display: flex;
      flex-direction: column;

      &::before {
        content: '';
        width: 80%;
        min-width: 80%;
        height: 1px;
        background-color: rgba(0, 0, 0, 0.1);
      }
    }

    svg {
      margin: 12px;
      width: 16px;
      height: 16px;
      font-size: 16px;
      color: #222;
      height: 16;
      width: 16;
      fill: currentColor;
    }
  }
`;

const StNotice = styled.div`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 18px;
  background-color: ${({ theme }) => theme.color.white};
`;

const StHomeIconWapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  transform: translate(-50%, -50%);
  background-color: #000;
  border-radius: 50%;
  z-index: 10;
  color: ${({ theme }) => theme.color.white};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 0px 1px inset,
    rgba(0, 0, 0, 0.18) 0px 1px 2px;

  svg:nth-of-type(1) {
    height: 28px;
    width: 28px;
    fill: currentcolor;
  }
  svg:nth-of-type(2) {
    position: absolute;
    top: -1px;
    right: 0;
    fill: ${({ theme }) => theme.color.main};
    height: 16px;
    width: 16px;
    stroke: ${({ theme }) => theme.color.white};
    stroke-width: 8;
    overflow: visible;
    paint-order: stroke;
  }
`;

const StH4 = styled.h4`
  margin-top: 32px;
  margin-bottom: 16px;
  line-height: 20px;
  font-weight: 600;

  & + div span {
    width: 92%;
    overflow: hidden;
    margin-bottom: 48px;
    line-height: 24px;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
  }
`;

export default HomeLocation;
