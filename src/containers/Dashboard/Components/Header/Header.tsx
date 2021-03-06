import {Row, Col, Menu} from 'antd';
import {MenuButton} from '_components/Buttons/MenuButton/MenuButton';
import {DropdownBtn} from '_components/Buttons/MenuButton/DropdownBtn';
import React from 'react';
import {cssmodulejoin} from 'cssmodulejoin';
import styles from './Header.module.scss';
import {FormattedMessage} from 'react-intl';

interface HeaderProps {
  onEditProfile: (event: any) => void;
  onAddNewJob: (event: any) => void;
  onViewProfile: (event: any) => void;
  onLogout: (event: any) => void;
}

export const Header = (props: HeaderProps) => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a onClick={props.onLogout}>Logout</a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={props.onViewProfile}>View profile</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.headerContainerOut}>
      <Row className={styles.headerContainer}>
        <Col lg={4} sm={24} xs={24} md={24}>
          <h3 className={styles.title}>TrakJob</h3>
        </Col>
        <Col className={styles.columnContainer} lg={8} sm={24} xs={24} md={12}>
          <MenuButton
            onClick={props.onEditProfile}
            icon="edit"
            text={
              <FormattedMessage
                defaultMessage="Edit profile"
                id="header.menu.editprofile"
              />
            }
          />
          <MenuButton
            onClick={props.onAddNewJob}
            icon="plus"
            text={
              <FormattedMessage
                defaultMessage="New Application"
                id="header.menu.newapplicstion"
              />
            }
          />
        </Col>

        <Col
          className={cssmodulejoin(styles.columnContainer, styles.rightColumn)}
          lg={12}
          xs={12}
          md={12}
        >
          <DropdownBtn icon="user" text="Agboola yusuf Ol.." menu={menu} />
        </Col>
      </Row>
    </div>
  );
};
