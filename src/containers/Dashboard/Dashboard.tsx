import React, {Component, ReactNode, ChangeEvent} from 'react';
import {DashboardLayout} from '_components/layouts/DashboardLayout/DashboardLayout';
import {Header} from './Components/Header/Header';

import {FullScreenModal} from '_components/Modals/FullScreen/FullscreenModal';
import {
  onChangeModalVisibility,
  onChangeInputHandler,
} from 'cpackages/OnChangeHandler';

class Dashboard extends Component {
  state = {
    email: undefined,
    password: undefined,
    profileModalVisible: false,
  };

  hideProfileModal = () => {
    onChangeModalVisibility('profileModalVisible', false, this);
  };

  showProfileModal = () => {
    onChangeModalVisibility('profileModalVisible', true, this);
  };

  onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeInputHandler('email', event, this);
  };

  onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeInputHandler('password', event, this);
  };

  render(): ReactNode {
    return (
      <DashboardLayout>
        <Header
          onViewProfile={this.showProfileModal}
          onEditProfile={this.showProfileModal}
          onAddNewJob={this.showProfileModal}
          onLogout={this.showProfileModal}
        />
        <FullScreenModal
          visible={this.state.profileModalVisible}
          handleCancel={this.hideProfileModal}
          title="Fullscreen"
        >
          <h1>Hello</h1>
        </FullScreenModal>
      </DashboardLayout>
    );
  }
}

export default Dashboard;
