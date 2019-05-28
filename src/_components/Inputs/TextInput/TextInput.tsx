import React from 'react';
import {Input, Select, Icon} from 'antd';
import styles from './TextInput.module.scss';

export const TextInput = () => {
  return (
    <div className={styles.inputContainer}>
      <Input className={styles.input} />
    </div>
  );
};
