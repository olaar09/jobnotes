import {Row, Col, Menu} from 'antd';
import React from 'react';
import {cssmodulejoin} from 'cssmodulejoin';
import {FullScreenModal} from '_components/Modals/FullScreen/FullscreenModal';
import {FormattedMessage} from 'react-intl';

interface ProfileModal {
  modalVisible: boolean;
  hideModal: () => void;
}

export const ProfileModal = (props: ProfileModal) => {
  return (
    <FullScreenModal
      visible={props.modalVisible}
      handleCancel={props.hideModal}
      title={
        <FormattedMessage
          id="profileModal.title"
          defaultMessage="Your profile"
        />
      }
    >
      <h1>Hello</h1>
    </FullScreenModal>
  );
};
