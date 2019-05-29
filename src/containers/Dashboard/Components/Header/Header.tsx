import {Row, Col, Menu} from 'antd';
import {MenuButton} from '_components/Buttons/MenuButton/MenuButton';
import {DropdownBtn} from '_components/Buttons/MenuButton/DropdownBtn';
import React from 'react';
import {cssmodulejoin} from 'cssmodulejoin';
import styles from './Header.module.scss';

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        Logout
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        View profile
      </a>
    </Menu.Item>
  </Menu>
);

export const Header = () => {
  return (
    <Row className={styles.headerContainer}>
      <Col className={styles.columnContainer} lg={12} xs={12} md={12}>
        <h3 className={styles.title}>TrakrJob</h3>
        <DropdownBtn icon="user" text="Agboola yusuf Ol.." menu={menu} />
      </Col>
      <Col
        className={cssmodulejoin(styles.columnContainer, styles.rightColumn)}
        lg={12}
        xs={12}
        md={12}
      >
        <MenuButton icon="edit" text="Edit profile" />
        <MenuButton icon="plus" text="New Application" />
      </Col>
    </Row>
  );
};
