import React from 'react';
import {Input, Select, Icon, Button} from 'antd';
import styles from './MenuButton.module.scss';

interface PropTypes {
  text: string;
  icon: string;
}

export const MenuButton = (props: PropTypes) => {
  return (
    <div>
      <Button className={styles.button} shape="round" icon={props.icon}>
        {props.text}
      </Button>
    </div>
  );
};
