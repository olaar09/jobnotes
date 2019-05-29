import React, {Component, ReactNode, ChangeEvent} from 'react';
import {DashboardLayout} from '_components/layouts/DashboardLayout/DashboardLayout';
import {Header} from './Components/Header/Header';
import {
  onChangeModalVisibility,
  onChangeInputHandler,
} from 'cpackages/OnChangeHandler';
import {ProfileModal} from './Components/ProfileModal/ProfileModal';
import {JobModal} from './Components/JobModal/JobModal';

class Dashboard extends Component {
  state = {
    email: undefined,
    password: undefined,
    profileModalVisible: false,
    jobModalVisible: false,
  };

  hideProfileModal = () => {
    onChangeModalVisibility('profileModalVisible', false, this);
  };

  hideJobModal = () => {
    onChangeModalVisibility('jobModalVisible', false, this);
  };

  showProfileModal = () => {
    onChangeModalVisibility('profileModalVisible', true, this);
  };

  showJobModal = () => {
    onChangeModalVisibility('jobModalVisible', true, this);
  };

  onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeInputHandler('email', event, this);
  };

  onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeInputHandler('password', event, this);
  };

  render(): ReactNode {
    const {profileModalVisible, jobModalVisible} = this.state;
    return (
      <DashboardLayout>
        <Header
          onViewProfile={this.showProfileModal}
          onEditProfile={this.showProfileModal}
          onAddNewJob={this.showJobModal}
          onLogout={this.showProfileModal}
        />
        <JobModal
          hideModal={this.hideJobModal}
          modalVisible={jobModalVisible}
        />
        <ProfileModal
          hideModal={this.hideProfileModal}
          modalVisible={profileModalVisible}
        />
      </DashboardLayout>
    );
  }
}

export default Dashboard;
