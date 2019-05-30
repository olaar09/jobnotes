import React from 'react';
import {Input, Select, Icon, Button} from 'antd';
import styles from './MenuButton.module.scss';
import {FormattedMessage} from 'react-intl';
import {WithFortmattedText} from 'interfaces/PropTypesInterface';

interface PropTypes extends WithFortmattedText {
  icon: string;
  onClick: (event: any) => void;
}

export const MenuButton = (props: PropTypes) => {
  return (
    <div>
      <Button
        onClick={props.onClick}
        className={styles.button}
        shape="round"
        icon={props.icon}
      >
        {props.text}
      </Button>
    </div>
  );
};
