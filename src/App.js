import "./App.css";


import About from "./Components/About";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import { Menu } from "antd";
import { Flex, Layout } from "antd";
import { HomeOutlined } from "@ant-design/icons";


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
              < Link to="/Home"> <HomeOutlined spin = "true" />  Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/About">About</Link>
              </Menu.Item>
              
            </Menu>
          </Sider>
          <Content style={contentStyle}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/About" element={<About />} />
             
             
            </Routes>
          </Content>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
