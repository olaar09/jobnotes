import React, {Component, ReactNode} from 'react';
import {Col, Row} from 'antd';
import {TextInput} from '_components/Inputs/TextInput/TextInput';
import {CButton} from '_components/Buttons/CButton';
import {AuthLayout} from '_components/layouts/AuthLayout/AuthLayout';

class Register extends Component {
  render(): ReactNode {
    return (
      <AuthLayout title="Register">
        <Row>
          <Col>
            
            <CButton />
          </Col>
        </Row>
      </AuthLayout>
    );
  }
}

export default Register;
