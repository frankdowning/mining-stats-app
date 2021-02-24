import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';
import GlobalStatistics from './GlobalStatistics.js';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

const wallets = [
  "0x3933357c21a5858358895902605758b650e63c78",
  "0x1ad5e3fec6c5bf6d3d3073273f0b987a428314aa",
  "0x92B649957a1faDE32C05038070aC4517fd3e1990"
]


const SiderDemo = () => {
  const [collapsed, setCollapsed] = useState(false);


  const toggle = () => {  setCollapsed(!collapsed)  };
  
    return (
      <Router>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}
          style={{overflow:'auto', height:'100vh', left:0,}}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />} to="/">
              Global Statistics
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Wallets">
              {wallets.map((wallet, index) => (<Menu.Item key={index+1}>{wallet}</Menu.Item>))}
            </SubMenu>
            <Menu.Item key="3" icon={<UploadOutlined />} to="/settings">
              Settings
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              overflow: 'initial'
            }}
          >
            <Switch>
              <Route path="/">
                <GlobalStatistics/>
              </Route>
              <Route path="/workers">
                Worker page
              </Route>
              <Route path="/settings">
                Settings page
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
      </Router>
    );
}

ReactDOM.render(<SiderDemo />, document.getElementById('container'));