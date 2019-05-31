import React, {Component, ReactNode, ChangeEvent} from 'react';
import {Col, Row} from 'antd';
import {TextInput} from '_components/Inputs/TextInput/TextInput';
import {CButton} from '_components/Buttons/CButton/CButton';
import {AuthLayout} from '_components/layouts/AuthLayout/AuthLayout';
import INPUT_TYPES from 'html-inputtypes';
import {AnchorButton} from '_components/Buttons/AnchorButton/AnchorButton';
import styles from '../auth.module.scss';
import {FormattedMessage} from 'react-intl';
import {withRouter} from 'react-router';
import {RouterProps} from 'interfaces/RouterParamTypes';
import {goBack, replace} from 'cpackages/cnavigator';
import {goForward} from '../../../cpackages/cnavigator';
import {connect} from 'react-redux';
import {ILoginData} from 'interfaces/MultiUseTypes';
import {initializeLogin} from 'store/auth/authActions';

interface IloginState extends ILoginData {
  emailValidationError: string | undefined;
  passwordValidationError: string | undefined;
}

interface LoginProps extends RouterProps {
  doLogin: (payload: ILoginData) => any;
}

class Login extends Component<LoginProps> {
  state: IloginState = {
    email: '',
    password: '',
    emailValidationError: undefined,
    passwordValidationError: undefined,
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

  onClickLogin = () => {
    let {email, password} = this.state;
    this.props.doLogin({
      email,
      password,
    });
  };

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
            <div className={styles.actionsContainer}>
              <AnchorButton
                text={<FormattedMessage id="string.forgot_password" />}
                link="https://www.google.com"
                onClick={() => {}}
              />
              <CButton
                onClick={this.onClickLogin}
                text={<FormattedMessage id="string.login" />}
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
    doLogin: (loginData: ILoginData) => dispatch(initializeLogin(loginData)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
