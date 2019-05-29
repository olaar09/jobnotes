import React from 'react';
import {Row, Col} from 'antd';
import styles from './DashboardLayout.module.scss';

interface PropTypes {
  children: any;
}

export const DashboardLayout = (props: PropTypes) => {
  return (
    <Row className={styles['layout']}>
      <Col className={styles['contentContainer']} xs={24} md={18} lg={18}>
        {props.children}
      </Col>
    </Row>
  );
};
