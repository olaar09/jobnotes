import React from 'react';
import {Button} from 'antd';
import styles from './CButton.module.scss';
import {WithFortmattedText} from 'interfaces/PropTypesInterface';

interface PropTypes extends WithFortmattedText {
  onClick: () => void;
}

export const CButton = (props: PropTypes) => {
  return (
    <div>
      <Button onClick={props.onClick} className={styles.button}>
        {' '}
        {props.text}{' '}
      </Button>
    </div>
  );
};
