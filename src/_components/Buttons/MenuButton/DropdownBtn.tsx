import React, {ComponentElement} from 'react';
import {Input, Select, Icon, Button, Dropdown, Menu} from 'antd';
import styles from './MenuButton.module.scss';
import {FormattedMessage} from 'react-intl';
import {WithFortmattedText} from '../../../interfaces/PropTypesInterface';

interface PropTypes extends WithFortmattedText {
  icon: string;
  menu: ComponentElement<Menu, any>;
}

export const DropdownBtn = (props: PropTypes) => {
  return (
    <div>
      <Dropdown overlay={props.menu} placement="bottomCenter">
        <Button className={styles.button} shape="round" icon={props.icon}>
          {props.text}
        </Button>
      </Dropdown>
    </div>
  );
};
