import React from 'react';
import {Row, Col} from 'antd';
import styles from './AuthLayout.module.scss';

interface PropTypes {
  children: any;
  title: string;
}

export const AuthLayout = (props: PropTypes) => {
  return (
    <Row className={styles['layout']}>
      <Col className={styles['contentContainer']} xs={24} md={18} lg={8}>
        <h2 className={styles.title}>{props.title}</h2>
        {props.children}
      </Col>
    </Row>
  );
};
