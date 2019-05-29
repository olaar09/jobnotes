import React, {Component, ReactNode, ChangeEvent} from 'react';
import {Col, Row, Dropdown, Menu, Button} from 'antd';
import {DashboardLayout} from '_components/layouts/DashboardLayout/DashboardLayout';
import {MenuButton} from '_components/Buttons/MenuButton/MenuButton';
import {DropdownBtn} from '../../_components/Buttons/MenuButton/DropdownBtn';
import {Header} from './Components/Header/Header';

class Dashboard extends Component {
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
      <DashboardLayout>
        <Header />
      </DashboardLayout>
    );
  }
}

export default Dashboard;
