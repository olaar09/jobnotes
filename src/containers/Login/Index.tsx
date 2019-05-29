import React, {Component, ReactNode} from 'react';
import {Col, Row} from 'antd';
import {TextInput} from '_components/Inputs/TextInput/TextInput';
import {CButton} from '_components/Buttons/CButton';
import {AuthLayout} from '_components/layouts/AuthLayout/AuthLayout';
import INPUT_TYPES from 'html-inputtypes';

class Login extends Component {
  state = {
    email: 'default',
    password: '****',
  };
  onChangeEmail = () => {};

  onChangePassword = () => {};

  render(): ReactNode {
    const {email, password} = this.state;
    return (
      <AuthLayout title="Login">
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
            <CButton />
          </Col>
        </Row>
      </AuthLayout>
    );
  }
}

export default Login;
