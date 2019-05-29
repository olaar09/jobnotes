import React, {ChangeEvent, FocusEvent} from 'react';
import {Input} from 'antd';
import styles from './TextInput.module.scss';

interface InputParams {
  placeholder: string;
  type: string;
  defaultValue?: string;
  onFocus?: (event: FocusEvent<Element>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string | number | undefined;
}

export const TextInput = (props: InputParams) => {
  return (
    <div className={styles.inputContainer}>
      <Input
        placeholder={props.placeholder}
        onChange={props.onChange}
        onFocus={props.onFocus}
        type={props.type}
        defaultValue={props.defaultValue}
        className={styles.input}
        value={props.value}
      />
    </div>
  );
};
