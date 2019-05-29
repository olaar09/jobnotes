import React, {Component, ReactNode, ChangeEvent} from 'react';
import {DashboardLayout} from '_components/layouts/DashboardLayout/DashboardLayout';
import {Header} from './Components/Header/Header';
import {
  onChangeModalVisibility,
  onChangeInputHandler,
} from 'cpackages/OnChangeHandler';
import {JobView} from './Components/JobView/JobView';

class Dashboard extends Component {
  state = {
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
    console.log();
    let {profileModalVisible, jobModalVisible} = this.state;
    return (
      <DashboardLayout
        hideProfileModal={this.hideProfileModal}
        hideJobModal={this.hideJobModal}
        showProfileModal={this.showProfileModal}
        showJobModal={this.showJobModal}
        profileModalVisible={profileModalVisible}
        jobModalVisible={jobModalVisible}
      >
        <JobView />
      </DashboardLayout>
    );
  }
}

export default Dashboard;
