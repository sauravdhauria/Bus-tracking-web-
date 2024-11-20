import "./App.css";

import About from "./Components/About";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import { Menu } from "antd";
import { Flex, Layout } from "antd";
import { HomeOutlined,SettingOutlined  } from "@ant-design/icons";
import UpdatedTimeTable from "./Components/UpdatedTimeTable";
import Language from "./Components/Language";
import ChangeCity from "./Components/ChangeCity";
import ClearRecentSearch from "./Components/ClearRecentSearch";
import RateUs from "./Components/RateUs";
import ReportIssue from "./Components/ReportIssue";
import Setting from "./Components/Setting";
import ShareApp from "./Components/ShareApp";
import SuggestAFeature from "./Components/SuggestAFeature";
import ViewAllAlert from "./Components/ViewAllAlert";
import TaskOne from "./Components/TaskOne";
import TaskTwo from "./Components/TaskTwo";

const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#ffff",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};
const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "calc(100% - 8px)",
  maxWidth: "calc(100% - 8px)",
};
function App() {
  return (
    <div>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>Header</Header>
        <Layout>
          <Sider width="25%" style={siderStyle}>
            <Menu>
              <Menu.Item key="1">
                <Link to="/Home"><HomeOutlined spin="true" /> Home
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/About">About</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/UpdatedTimeTable">UpdatedTimeTable</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/ChangeCity">ChangeCity</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/ClearRecentSearch">ClearRecentSearch</Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/RateUs">RateUs</Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to="/ReportIssue">ReportIssue</Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link to="/Setting"><SettingOutlined /> Setting</Link>
              </Menu.Item>
              <Menu.Item key="9">
                <Link to="/ShareApp">ShareApp</Link>
              </Menu.Item>
              <Menu.Item key="10">
                <Link to="/SuggestAFeature">SuggestAFeature</Link>
              </Menu.Item>
              <Menu.Item key="10">
                <Link to="/Language">Language</Link>
              </Menu.Item>
              <Menu.Item key="11">
                <Link to="/TaskOne">TaskOne</Link>
              </Menu.Item>
              <Menu.Item key="12">
                <Link to="/TaskTwo">TaskTwo</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content style={contentStyle}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/UpdatedTimeTable" element={<UpdatedTimeTable />} />
              <Route path="/ChangeCity" element={<ChangeCity />} />
              <Route path="/ClearRecentSearch" element={<ClearRecentSearch />} />
              <Route path="/RateUs" element={<RateUs />} />
              <Route path="/ReportIssue" element={<ReportIssue />} />
              <Route path="/Setting" element={<Setting />} />
              <Route path="/ReportIssue" element={<ReportIssue />} />
              <Route path="/ShareApp" element={<ShareApp />} />
              <Route path="/SuggestAFeature" element={<SuggestAFeature />} />
              <Route path="/ViewAllAlert" element={<ViewAllAlert />} />
              <Route path="/Language" element={<Language />} />
              <Route path="/TaskOne" element={<TaskOne />} />
              <Route path="/TaskTwo" element={<TaskTwo />} />
            </Routes>
          </Content>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
