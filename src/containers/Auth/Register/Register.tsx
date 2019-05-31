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
    cpassword: '',
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

  onChangeConfirmPassword = (event: ChangeEvent<HTMLInputElement>) => {
    this.onChangeHandler('cpassword', event);
  };

  onChangeFullname = (event: ChangeEvent<HTMLInputElement>) => {
    this.onChangeHandler('fullname', event);
  };

  onReg = () => {
    let {email, password, fullname} = this.state;
    this.props.doRegister({
      email,
      password,
      fullname,
    });
  };

  render(): ReactNode {
    const {email, password, cpassword, fullname} = this.state;
    console.log(this.props.userData);
    return (
      <AuthLayout title="Register New Account">
        <Row>
          <Col>
            <TextInput
              type={INPUT_TYPES.EMAIL}
              value={email}
              placeholder="Enter your email"
              onChange={this.onChangeEmail}
            />
            <TextInput
              type={INPUT_TYPES.TEXT}
              value={fullname}
              placeholder="Enter your fullname"
              onChange={this.onChangeFullname}
            />
            <TextInput
              type={INPUT_TYPES.PASSWORD}
              value={password}
              placeholder="Enter your password"
              onChange={this.onChangePassword}
            />
            <TextInput
              type={INPUT_TYPES.PASSWORD}
              value={cpassword}
              placeholder="Confirm password"
              onChange={this.onChangeConfirmPassword}
            />
            <div className={styles.actionsContainer}>
              <AnchorButton
                text={<FormattedMessage id="string.login_instead" />}
                link="login"
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
