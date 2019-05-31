import React, {Component, ReactNode, ChangeEvent} from 'react';
import {Col, Row} from 'antd';
import {TextInput} from '_components/Inputs/TextInput/TextInput';
import {CButton} from '_components/Buttons/CButton/CButton';
import {AuthLayout} from '_components/layouts/AuthLayout/AuthLayout';
import INPUT_TYPES from 'html-inputtypes';
import styles from '../auth.module.scss';
import {AnchorButton} from '_components/Buttons/AnchorButton/AnchorButton';
import {FormattedMessage} from 'react-intl';
import {withRouter} from 'react-router';
import {RouterProps} from 'interfaces/RouterParamTypes';
import {goForward} from 'cpackages/cnavigator';
import {IRegisterData} from 'interfaces/MultiUseTypes';
import {initializeRegister} from 'store/auth/authActions';
import {connect} from 'react-redux';

interface RegisterProps extends RouterProps {
  doRegister: (payload: IRegisterData) => any;
  userData: any;
}

class Register extends Component<RegisterProps> {
  state = {
    email: '',
    password: '',
    phone: '',
    fullname: '',
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

  onReg = () => {
    let {email, password, phone, fullname} = this.state;
    this.props.doRegister({
      email,
      password,
      phone,
      fullname,
    });
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
                text={<FormattedMessage id="string.forgot_password" />}
                link="https://www.google.com"
                onClick={() => {}}
              />
              <CButton
                onClick={this.onReg}
                text={<FormattedMessage id="string.register" />}
              />
            </div>
          </Col>
        </Row>
      </AuthLayout>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    userData: state.auth,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    doRegister: (registerData: IRegisterData) =>
      dispatch(initializeRegister(registerData)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Register)
);
