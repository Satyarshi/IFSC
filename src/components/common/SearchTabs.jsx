import React, { useState, useEffect } from "react";
import { Tabs, Input, Select, Button, Dropdown } from "antd";

const { Search } = Input;

const SearchTabs = ({ onSearchOptionChange, onSearch }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 428);
  const [activeKey, setActiveKey] = useState("1");
  const [bankName, setBankName] = useState("");
  const [branchName, setBranchName] = useState("");
  const [ifscCode, setIfscCode] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 428);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleTabChange = (key) => {
    setActiveKey(key);
    onSearchOptionChange(
      key === "1" ? "Search by Bank and Branch Name" : "Search by IFSC Code"
    );
  };
  const handleSearchSubmit = () => {
    if (activeKey === "1") {
      onSearch({ bank: bankName, branch: branchName });
    } else {
      onSearch({ ifsc_code: ifscCode });
    }
  };
  const handleMenuClick = (e) => {
    handleTabChange(e.key);
  };

  const dropdownItems = [
    {
      label: "Search by Bank and Branch Name",
      key: "1",
    },
    {
      label: "Search by IFSC Code",
      key: "2",
    },
  ];

  const menuProps = {
    items: dropdownItems,
    onClick: handleMenuClick,
  };

  const items = [
    {
      key: "1",
      label: "Search by Bank and Branch Name",
      children: (
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
          className="responsiveContainer"
        >
          <Select
            size="large"
            style={{
              width: 350,
              fontWeight: "500",
            }}
            showSearch
            placeholder="Select Bank Name"
            onChange={(value) => setBankName(value)}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: "State Bank of India", label: "State Bank of India" },
              { value: "HDFC Bank", label: "HDFC Bank" },
              { value: "Bank of Baroda", label: "Bank of Baroda" },
            ]}
          />
          <Input
            style={{ width: "35%", fontWeight: "500", height: "40px" }}
            placeholder="Enter Branch Name"
            onChange={(e) => setBranchName(e.target.value)}
          />
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{ backgroundColor: "#1677ff" }}
            onClick={handleSearchSubmit}
          >
            Submit
          </Button>
        </div>
      ),
    },
    {
      key: "2",
      label: "Search by IFSC Code",
      children: (
        <Search
          placeholder="Enter IFSC Code"
          allowClear
          enterButton="Search"
          size="large"
          style={{
            width: "100%",
            maxWidth: "900px",
            paddingLeft: "0px",
            fontWeight: "500",
          }}
          value={ifscCode}
          onChange={(e) => setIfscCode(e.target.value)}
          onSearch={handleSearchSubmit}
        />
      ),
    },
  ];

  return isMobile ? (
    <>
      <Dropdown.Button menu={menuProps} placement="bottomCenter">
        <span style={{ fontWeight: 500 }}>
          {dropdownItems.find((item) => item.key === activeKey)?.label}
        </span>
      </Dropdown.Button>
      {/* Render the content for the selected dropdown option */}
      <div style={{ marginTop: "20px" }}>
        {items.find((item) => item.key === activeKey)?.children}
      </div>
    </>
  ) : (
    <Tabs
      centered
      activeKey={activeKey} // Use activeKey state correctly
      onChange={handleTabChange} // Correct onChange handler
      items={items}
    />
  );
};

export default SearchTabs;
