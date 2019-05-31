import React, {Component, ReactNode, ChangeEvent, Suspense} from 'react';
import {DashboardLayout} from '_components/layouts/DashboardLayout/DashboardLayout';
import {
  onChangeModalVisibility,
  onChangeInputHandler,
} from 'cpackages/OnChangeHandler';
import {Spin} from 'antd';
import {Redirect, withRouter, RouteComponentProps} from 'react-router';
import {isAuthenticated} from 'cpackages/utils';
import {initializeGetUserReq} from 'store/auth/authActions';
import {RouterProps} from 'interfaces/RouterParamTypes';
import {connect} from 'react-redux';

interface DashboardProps extends RouterProps {
  getUser: () => any;
  userData: any;
}

class Dashboard extends Component<DashboardProps> {
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

  componentDidMount() {
    this.props.getUser();
  }

  render(): ReactNode {
    let {profileModalVisible, jobModalVisible} = this.state;
    const JobView = React.lazy(() => import('./Components/JobView/JobView'));

    console.log(this.props.userData);

    const isAuth: boolean = isAuthenticated();
    return !isAuth ? (
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

const mapStateToProps = (state: any) => {
  return {
    userData: state.auth,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getUser: () => dispatch(initializeGetUserReq()),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard)
);
