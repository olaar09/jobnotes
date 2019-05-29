import {Row, Col, Menu} from 'antd';
import {MenuButton} from '_components/Buttons/MenuButton/MenuButton';
import {DropdownBtn} from '_components/Buttons/MenuButton/DropdownBtn';
import React from 'react';
import {cssmodulejoin} from 'cssmodulejoin';
import {FullScreenModal} from '_components/Modals/FullScreen/FullscreenModal';

interface ProfileModal {
  modalVisible: boolean;
  hideModal: () => void;
}

export const ProfileModal = (props: ProfileModal) => {
  return (
    <FullScreenModal
      visible={props.modalVisible}
      handleCancel={props.hideModal}
      title="Your Profile"
    >
      <h1>Hello</h1>
    </FullScreenModal>
  );
};
