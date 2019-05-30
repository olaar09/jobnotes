import {Modal} from 'antd';
import React, {ReactNode} from 'react';
import './FullScreen.module.scss';
import {FormattedMessage} from 'react-intl';

interface FullscreenModal {
  handleOk?: () => void;
  visible: boolean;
  handleCancel: () => void;
  title: React.ReactElement;
  children: ReactNode;
}

export const FullScreenModal = (props: FullscreenModal) => {
  return (
    <Modal
      title={props.title}
      visible={props.visible}
      onCancel={props.handleCancel}
      mask={false}
      width="80%"
      footer={[]}
      bodyStyle={{
        height: '70vh',
      }}
    >
      {props.children}
    </Modal>
  );
};
