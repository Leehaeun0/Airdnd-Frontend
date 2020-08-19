import React from 'react';
import styled from 'styled-components';
import ChatMain from '../../Components/Message/ChatMain';
import MsgMain from '../../Components/Message/MsgMain';
import DetailCanceledMain from '../../Components/Message/DetailCanceledMain';
import DetailMain from './DetailMain';
import ChatFlagModal from './MessageModal';

const MessageMainWrapper = () => {
  const [canceled, setCanceled] = React.useState(false);
  console.log(setCanceled); // 전역 관리

  return (
    <MessageMainWrapperDiv>
      <ChatMain />
      <MsgMain />
      {canceled ? <DetailCanceledMain /> : <DetailMain />}
      <ChatFlagModal />
    </MessageMainWrapperDiv>
  );
};

const MessageMainWrapperDiv = styled.div`
  display: flex;
  position: relative;
  z-index: -1;
`;
export default MessageMainWrapper;
