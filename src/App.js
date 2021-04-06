import "./App.css";
import { Layout, Avatar, Menu, Breadcrumb } from "antd";
import { WalletOutlined } from "@ant-design/icons";
import Title from "antd/lib/typography/Title";
import SubMenu from "antd/lib/menu/SubMenu";
import WalletsMetric from "./components/WalletsMetric";
import AddWalletForm from "./components/AddWalletForm";
import WalletList from "./components/WalletList";
import HashChart from "./components/charts/HashChart";
import MetricsContainer from "./components/charts/MetricsContainer";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
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
                <MetricsContainer />
                <HashChart title="Hashrate" dataType="hash" />
                <HashChart title="Workers" dataType="workers" />
                <WalletList />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Donation Address: XXXXXX
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
