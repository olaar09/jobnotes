import React from 'react';
import {Input, Select, Icon, Button} from 'antd';
import styles from './AnchorButton.module.scss';

interface PropTypes {
  text: string;
  link: string;
  onClick: () => any;
}
export const AnchorButton = (props: PropTypes) => {
  return (
    <div>
      <a href={props.link} onClick={props.onClick} className={styles.link}>
        {' '}
        {props.text}{' '}
      </a>
    </div>
  );
};
