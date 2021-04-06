import "../css/Dashboard.css";
import { Divider, Layout, Avatar, Menu, Breadcrumb, Button } from "antd";
import { WalletOutlined } from "@ant-design/icons";
import Title from "antd/lib/typography/Title";
import SubMenu from "antd/lib/menu/SubMenu";
import WalletsMetric from "./WalletsMetric";
import AddWalletForm from "./AddWalletForm";
import WalletList from "./WalletList";
import HashChart from "./charts/HashChart";
import MetricsContainer from "./charts/MetricsContainer";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { logoutUser } from "../services/magic";

const { Header, Footer, Sider, Content } = Layout;

function Dashboard() {
  const { email } = useContext(UserContext);
  const history = useHistory();
  const handleLogOut = async () => {
    try {
      await logoutUser();
      history.replace("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Dashboard">
      <Layout>
        <Header style={{ padding: 15 }}>
          <Avatar style={{ float: "right" }} src="./eth-logo.svg" />
          <Title style={{ color: "white" }} level={3}>
            Mining Stats
          </Title>
        </Header>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <Menu defaultSelectedKeys={["Overview"]} mode="inline">
              <Menu.Item key="Overview">Overview</Menu.Item>
              <SubMenu
                title={
                  <span>
                    <WalletOutlined />
                    <span>Addresses</span>
                  </span>
                }
              >
                <Menu.ItemGroup key="Addressses">
                  <Menu.Item key="Wallet1">Wallet 1</Menu.Item>
                  <Menu.Item key="Wallet2">Wallet 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
            <div>
              <h1 style={{ color: "white" }}>User: {email}</h1>
              <Button variant="primary" onClick={handleLogOut} span={24}>
                Sign Out
              </Button>
            </div>
          </Sider>
          <Layout>
            <Content style={{ padding: "0 10px" }}>
              <Breadcrumb style={{ margin: "12px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Overview</Breadcrumb.Item>
              </Breadcrumb>
              {/* <AddWalletForm /> */}
              <div style={{ background: "#fff", padding: 24, minHeight: 580 }}>
                {/* <WalletsMetric /> */}
                <Divider orientation="center">Current Statistics</Divider>
                <MetricsContainer />
                <Divider orientation="center">Hashrate</Divider>
                <HashChart title="Hashrate" dataType="hash" />
                <Divider orientation="center">Workers</Divider>
                <HashChart title="Workers" dataType="workers" />
                <WalletList />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Donation Address: 0x724f46a8c10023D505567FbCed4bBfc636009e9f
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default Dashboard;
