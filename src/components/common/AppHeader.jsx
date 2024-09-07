import React, { useState, useEffect } from "react";
import { Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const AppHeader = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  // Handle screen resize events
  useEffect(() => {
    const handleResize = () => {
      const isMobileScreen = window.innerWidth <= 1015;
      if (!isMobileScreen) {
        setDrawerVisible(false); // Close the drawer when resizing to a larger screen
      }
      setIsMobile(isMobileScreen); // Update mobile state
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <figure className="logo">
            <a
              href="https://www.caclouddesk.com/"
              title="CA Cloud desk | Practice Management Software"
            >
              <img
                src="https://www.caclouddesk.com/wp-content/uploads/2024/03/Untitled-design-17.svg"
                alt="logo"
              />
            </a>
          </figure>
        </div>

        <div className="menu-container">
          {!isMobile && (
            <Menu mode="horizontal" className="header-menu">
              <Menu.Item key="1" className="custom-menu-item">
                GST Calculator
              </Menu.Item>
              <Menu.Item key="2" className="custom-menu-item">
                GST Search/Taxpayer Details
              </Menu.Item>
              <Menu.Item key="3" className="custom-menu-item">
                GST Filing Info
              </Menu.Item>
              <Menu.Item key="4" className="custom-menu-item">
                Infographics
              </Menu.Item>
              <Menu.Item key="5" className="custom-menu-item">
                Partner Login
              </Menu.Item>
              <Menu.Item key="6" className="custom-menu-item">
                Client Login
              </Menu.Item>
            </Menu>
          )}
          {isMobile && (
            <Button className="hamburger" type="primary" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
          )}
        </div>
        <Drawer
          title="Menu"
          placement="right"
          onClose={onClose}
          visible={drawerVisible}
        >
          <Menu mode="vertical" className="drawer-menu">
            <Menu.Item key="1">GST Calculator</Menu.Item>
            <Menu.Item key="2">GST Search/Taxpayer Details</Menu.Item>
            <Menu.Item key="3">GST Filing Info</Menu.Item>
            <Menu.Item key="4">Infographics</Menu.Item>
            <Menu.Item key="5">Partner Login</Menu.Item>
            <Menu.Item key="6">Client Login</Menu.Item>
          </Menu>
        </Drawer>
      </div>
    </div>
  );
};

export default AppHeader;
