import {Row, Col, Menu} from 'antd';
import {MenuButton} from '_components/Buttons/MenuButton/MenuButton';
import {DropdownBtn} from '_components/Buttons/MenuButton/DropdownBtn';
import React from 'react';
import {cssmodulejoin} from 'cssmodulejoin';
import {FullScreenModal} from '_components/Modals/FullScreen/FullscreenModal';
import {FormattedMessage} from 'react-intl';

interface JobModalProps {
  modalVisible: boolean;
  hideModal: () => void;
}

export const JobModal = (props: JobModalProps) => {
  return (
    <FullScreenModal
      visible={props.modalVisible}
      handleCancel={props.hideModal}
      title={<FormattedMessage id="string.addnewjob" />}
    >
      <h1>Hello</h1>
    </FullScreenModal>
  );
};
