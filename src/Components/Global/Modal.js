import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { GrClose } from 'react-icons/gr';

// header를 보이게 하고 싶으면 header를 전달하세요.
// footer를 보이게 하고 싶으면 ModalFooter를 따로 불러서 사용하세요.
// modalState에 불리언 값을 전달해서 모달을 켜고 끄세요.
const Modal = ({
  children,
  width,
  height,
  header,
  title,
  modalState,
  setModalState,
  cleanup,
  ...rest
}) => {
  const [animate, setAnimate] = useState(false);
  const [visible, setVisible] = useState(modalState);

  useEffect(() => {
    if (visible && !modalState) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setVisible(modalState);
    return () => {
      cleanup && cleanup();
    };
  }, [modalState, visible]);

  if (!visible && !animate) return '';

  const onDelete = e => {
    if (typeof e.target.className !== 'string') return;
    if (!e.target.className.includes('dimmed')) return;
    setModalState(false);
  };

  const onBtnDelete = () => setModalState(false);

  return (
    <StModalDimmed
      modalState={modalState}
      onClick={onDelete}
      className="dimmed"
      animate={animate}
    >
      <StModalDiv width={width} height={height} animate={animate} {...rest}>
        <StModalCloseBtn type="button" onClick={onBtnDelete}>
          <StCloseIcon />
        </StModalCloseBtn>
        {header && <StModalHeader>{title && <h2>{title}</h2>}</StModalHeader>}
        {children}
      </StModalDiv>
    </StModalDimmed>
  );
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const StModalDimmed = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.53);
  animation-name: ${fadeIn};
  animation-duration: 0.4s;
  animation-fill-mode: forwards;

  ${({ animate }) =>
    animate &&
    css`
      animation-name: ${fadeOut};
    `}
`;

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: none;
  }
`;

const slideDown = keyframes`
  0% {
    transform: none;
  }
  100% {
    transform: translateY(100%);
  }
`;

const StModalDiv = styled.div`
  background-color: #fff;
  position: fixed;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: ${props => props.width || '70rem'};
  height: ${props => props.height || '40rem'};
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px;
  overflow: hidden;
  animation-name: ${slideUp};
  animation-duration: 0.4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  ${({ animate }) =>
    animate &&
    css`
      animation-name: ${slideDown};
    `}
`;

const StModalCloseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  width: 32px;
  height: 32px;
  padding: 7.8px 7px;
  text-align: center;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0);
  cursor: pointer;
  outline: 0;
  background: transparent;
  &:hover {
    background-color: ${({ theme }) => theme.color.lightGray};
  }
  &:focus {
    border: 2px solid #181818;
  }
`;

const StCloseIcon = styled(GrClose)`
  & > path {
    /* stroke: red; */
    stroke-width: 2.5;
  }
`;

const area = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 24px;
  padding-right: 24px;
  width: 100%;
  min-height: 64px;
  font-size: 1.6rem;
`;

const StModalHeader = styled.header`
  ${area};
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
  font-weight: 600;
`;

export default React.memo(Modal);
