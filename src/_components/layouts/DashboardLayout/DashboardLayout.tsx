import React, {ReactNode} from 'react';
import {Row, Col} from 'antd';
import styles from './DashboardLayout.module.scss';
import {Header} from 'containers/Dashboard/Components/Header/Header';
import {onChangeModalVisibility} from 'cpackages/OnChangeHandler';
import {JobModal} from 'containers/Dashboard/Components/JobModal/JobModal';
import {ProfileModal} from 'containers/Dashboard/Components/ProfileModal/ProfileModal';

interface PropTypes {
  children: any;
  hideProfileModal: () => void;
  hideJobModal: () => void;
  showProfileModal: () => void;
  showJobModal: () => void;
  profileModalVisible: boolean;
  jobModalVisible: boolean;
}

export class DashboardLayout extends React.Component<PropTypes> {
  render(): ReactNode {
    const {
      hideProfileModal,
      hideJobModal,
      children,
      showJobModal,
      showProfileModal,
      profileModalVisible,
      jobModalVisible,
    } = this.props;

    return (
      <React.Fragment>
        <Row className={styles['headerContainer']}>
          <Col className={styles['menuCol']} lg={18}>
            <Header
              onViewProfile={showProfileModal}
              onEditProfile={showProfileModal}
              onAddNewJob={showJobModal}
              onLogout={showProfileModal}
            />
          </Col>
        </Row>
        <Row className={styles['contentLayout']}>
          <Col className={styles['contentContainer']} xs={24} md={18} lg={18}>
            <JobModal hideModal={hideJobModal} modalVisible={jobModalVisible} />
            <ProfileModal
              hideModal={hideProfileModal}
              modalVisible={profileModalVisible}
            />
            {children}
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
