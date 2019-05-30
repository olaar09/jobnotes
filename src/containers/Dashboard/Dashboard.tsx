import React, {Component, ReactNode, ChangeEvent, Suspense} from 'react';
import {DashboardLayout} from '_components/layouts/DashboardLayout/DashboardLayout';
import {
  onChangeModalVisibility,
  onChangeInputHandler,
} from 'cpackages/OnChangeHandler';
import {Spin} from 'antd';
import {Redirect, withRouter, RouteComponentProps} from 'react-router';

type PathParamsType = {
  history: string;
};

// Your component own properties
type PropsType = RouteComponentProps<PathParamsType> & {};

class Dashboard extends Component<PropsType> {
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
    let {profileModalVisible, jobModalVisible} = this.state;
    const JobView = React.lazy(() => import('./Components/JobView/JobView'));

    return true ? (
      <Redirect to="/login" />
    ) : (
      <DashboardLayout
        hideProfileModal={this.hideProfileModal}
        hideJobModal={this.hideJobModal}
        showProfileModal={this.showProfileModal}
        showJobModal={this.showJobModal}
        profileModalVisible={profileModalVisible}
        jobModalVisible={jobModalVisible}
      >
        <Suspense
          fallback={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Spin />
            </div>
          }
        >
          <JobView />
        </Suspense>
      </DashboardLayout>
    );
  }
}

export default withRouter(Dashboard);
