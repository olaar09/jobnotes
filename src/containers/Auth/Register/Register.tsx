import React, {Component, ReactNode, ChangeEvent} from 'react';
import {Col, Row} from 'antd';
import {TextInput} from '_components/Inputs/TextInput/TextInput';
import {CButton} from '_components/Buttons/CButton/CButton';
import {AuthLayout} from '_components/layouts/AuthLayout/AuthLayout';
import INPUT_TYPES from 'html-inputtypes';
import styles from '../auth.module.scss';
import {AnchorButton} from '_components/Buttons/AnchorButton/AnchorButton';

class Register extends Component {
  state = {
    email: undefined,
    password: undefined,
  };

  onChangeHandler = (field: string, event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [field]: event.target.value,
    });
  };

  onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    this.onChangeHandler('email', event);
  };

  onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    this.onChangeHandler('password', event);
  };

  render(): ReactNode {
    const {email, password} = this.state;
    return (
      <AuthLayout title="Register New Account">
        <Row>
          <Col>
            <TextInput
              type={INPUT_TYPES.TEXT}
              value={email}
              placeholder="Enter your email"
              onChange={this.onChangeEmail}
            />
            <TextInput
              type={INPUT_TYPES.PASSWORD}
              value={password}
              placeholder="Enter your password"
              onChange={this.onChangePassword}
            />
            <TextInput
              type={INPUT_TYPES.PASSWORD}
              value={password}
              placeholder="Confirm password"
              onChange={this.onChangePassword}
            />
            <div className={styles.actionsContainer}>
              <AnchorButton
                text="Forgot password"
                link="https://www.google.com"
                onClick={() => {}}
              />
              <CButton text="Login" />
            </div>
          </Col>
        </Row>
      </AuthLayout>
    );
  }
}

export default Register;
