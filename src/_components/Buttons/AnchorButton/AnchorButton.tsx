import React from 'react';
import {Input, Select, Icon, Button} from 'antd';
import styles from './AnchorButton.module.scss';
import {FormattedMessage} from 'react-intl';
import {WithFortmattedText} from 'interfaces/PropTypesInterface';

interface PropTypes extends WithFortmattedText {
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
