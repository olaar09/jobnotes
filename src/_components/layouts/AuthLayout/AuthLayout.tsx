import React from 'react';
import {Input, Select, Icon, Row, Col} from 'antd';
import styles from './AuthLayout.module.scss';

export const AuthLayout = ({
  title,
  children,
}: {
  title: string;
  children: any;
}) => {
  return (
    <Row className={styles['layout']}>
      <Col className={styles['contentContainer']} xs={24} md={18} lg={8}>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </Col>
    </Row>
  );
};
