import React from 'react';
import {Input, Select, Icon, Button} from 'antd';
import styles from './CButton.module.scss';
interface PropTypes {
  text: string;
}

export const CButton = (props: PropTypes) => {
  return (
    <div>
      <Button className={styles.button}> {props.text} </Button>
    </div>
  );
};
