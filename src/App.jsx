import React from "react";
import AppHeader from "./components/common/AppHeader";
import Home from "./views/Home";
import "./App.css";
import { Layout } from "antd";
const { Header, Content, Footer } = Layout;
const App = () => {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <Home />
      </Content>
      <Footer></Footer>
    </Layout>
  );
};

export default App;
