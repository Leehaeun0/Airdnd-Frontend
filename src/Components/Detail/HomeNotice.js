import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineRight } from 'react-icons/ai';
import { MdCheckCircle } from 'react-icons/md';
import Division from './Division';
import icons from '../../lib/icons';
import Modal from '../Global/Modal';

const HomeNotice = ({ home }) => {
  const { rules, safeties } = home.notice;
  const [modalState, setModalState] = useState(false);

  const renderRules = () =>
    rules.map((rule, i) => {
      const iconObj = icons.find(v => rule.name.includes(v.name));
      return (
        <StNotice key={i}>
          {iconObj ? (
            <svg
              viewBox={iconObj.viewBox || '0 0 22 22'}
              fill="currentColor"
              dangerouslySetInnerHTML={{ __html: iconObj.icon }}
            />
          ) : (
            <MdCheckCircle />
          )}
          {rule.name}
        </StNotice>
      );
    });

  return (
    <Division title="알아두어야 할 사항" border="none">
      <StWrapper>
        <strong>숙소 이용규칙</strong>
        <ul>{renderRules()}</ul>
        <StButton onClick={() => setModalState(true)}>
          모두 보기 <AiOutlineRight />
        </StButton>
      </StWrapper>
      <StModal
        modalState={modalState}
        setModalState={setModalState}
        header
        width="78rem"
        height="80rem"
      >
        <StModalWrapper>
          <h4>숙소 이용 규칙</h4>
          {renderRules()}
          <strong>추가 이용 규칙</strong>
          <span>
            모든 객실의 비품과 가구, 또 가구 위치 등은 사진과 다를수 있으면
            계절과 상황에 따라 비품과 가구 , 가구의 위치 등은 항상 변할수
            있습니다. 사진은 예시에 불과합니다. <br />
            <br /> 본 객실은 1인 세팅이 기본으로 1인 이상 인원 추가시 인당
            추가요금이 붙습니다. 인당 추가요금은 에어비앤비 상에서 예약시,
            정확한 인원을 선택하시면 자동으로 요금이 추가 되실겁니다. 인당 추가
            되는 금액은 상황에 따라 조금씩 변동이 있으나, 에어비앤비 상에서만
            정확한 인원 선택하시면 자동으로 예약 요금에 반영 되오니 편하게
            이용하세요~ 예를 들어 , 1명 예약하심 방에 딱 한분만 입실가능하세용.
            방에 다른분 방문도 힘들고 중간에 인원변경도 힘들어서요. 처음부터
            최대 방문인원으로 예약하셔야해요.
            <br />
            <br /> 건물 내 모든 구역에서 금연이며, 애완동물은 동반 불가합니다.
            <br /> 차량 렌트 시에는 가급적 주차타워 이용이 가능한 높지 않은
            승용차로 렌트 해 주시고, 기계식 주차가 불가한 경우나 주차장이 만차인
            경우 주변 유무료 주차장에 주차 하셔야 합니다. 차량 만차인 경우 외,
            주차장의 수리 ,공사 등으로 주차장 이용이 불가시 주차장 이용이
            불가하실수 있고, 차를 가져오시면 꼭 미리 말씀해주셔야 합니다.
            주차타워 이용 가능한 차량의 최대 크기는 아래 개시하였습니다. 주차는
            서비스로 제공해드리고 있으므로 의무적으로 주차장을 제공해드리지는
            않고 있습니다.
            <br /> 기본적으로 데우기 정도는 가능하지만 냄새가 나거나 연기가 나는
            음식, 기름지거나 기름이 튀는 음식 , 고기나 생선류 등을 구워 드시면
            큰 문제가 될 수 있으니 절대 금지 부탁 드립니다. 다음과 같은 경우에는
            부득이하게 추가 비용을 청구합니다:
            <br />
            <br /> - 예약된 인원보다 초과되어 시설을 이용하는 경우
            <br /> - 타월이나 비치된 물품을 가져가신 경우
            <br />
            - 비품이나 집기 등이 파손되거나 침구류 등이 오염되어 수리,
            세탁하거나 재구매 해야 하는 경우 <br />
            건물 내에서는 모든 구역이 금연이시고, 실내에서 떠들거나 민원이
            들어오시지 않도록 부탁드리며 항상 주위에 피해가 가지 않도록 주의
            부탁 드립니다. <br />
            <br />
            No smoking inside of the room or building, No pets are allowed.
            <br />
            If you want to rent a car, please rent a sedan. You need to find a
            parking space nearby when all the parking spaces are taken or when
            you rent a RV(SUV) car which cannot be parked in our car lift. You
            can cook inside of the room but it could be a big problem if you
            make a barbeque or smelly food. We have to charge you extra cost in
            following cases:
            <br />
            <br /> - When the actual number of guests exceeding the number of
            guests reserved.
            <br /> - When you take away our towels or any other amenities.
            <br /> - When extra cost is required for fixing or purchase due to
            an amenity/equipment/bedding is (partially)broken or stained Please
            always be careful not to make loud voice or sound.
            <br />
            <br />
          </span>
        </StModalWrapper>
      </StModal>
      <StWrapper>
        <strong>건강과 안전</strong>
        <ul>
          {safeties.map((safety, i) => (
            <StNotice key={i}>
              <MdCheckCircle />
              {safety.name}
            </StNotice>
          ))}
        </ul>
        <StButton>
          모두 보기 <AiOutlineRight />
        </StButton>
      </StWrapper>
      <StWrapper>
        <strong>환불 정책</strong>
        <span>체크인 30일 전까지 취소하시면 전액이 환불됩니다.</span>
        <StButton>
          자세한 정보 <AiOutlineRight />
        </StButton>
      </StWrapper>
    </Division>
  );
};

const StWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 32%;
  margin-right: 2%;
  padding-right: 1rem;

  &:last-child {
    margin-right: 0;
    padding-right: 0;
  }

  strong {
    display: block;
    margin-bottom: 12px;
  }
`;

const StNotice = styled.li`
  display: flex;
  align-items: baseline;
  margin-bottom: 8px;

  svg {
    display: inline-block;
    min-height: 17px;
    min-width: 17px;
    margin-right: 12px;
    font-size: 17px;
  }
`;

const StModal = styled(Modal)`
  header {
    border: none;
  }
`;

const StModalWrapper = styled.div`
  padding: 24px;
  padding-top: 10px;
  width: 100%;
  height: calc(100% - 64px);
  overflow: scroll;

  h4 {
    font-weight: 600 !important;
    font-size: 22px !important;
    line-height: 26px !important;
    margin-bottom: 32px !important;
  }

  strong {
    display: block;
    margin-top: 40px;
    margin-bottom: 20px;
    font-weight: 600 !important;
    font-size: 18px;
  }

  span {
    line-height: 2.4rem;
  }
`;

const StButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  margin-top: 24px;
  border: none;
  font-size: 1.6rem;
  font-weight: 600;
  text-decoration: underline;
  color: ${({ theme }) => theme.color.darkGray};
  outline: none;

  &:hover {
    color: #222;
  }

  svg {
    margin-left: 8px;
  }
`;

export default HomeNotice;
