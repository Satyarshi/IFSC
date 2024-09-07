import React from "react";
import { Typography, Tabs, Input, Select, Button } from "antd";
import SearchBox from "./SearchBox";
const { Title, Paragraph } = Typography;
const { Search } = Input;
import HeroVideoDialog from "../common/HeroVideoDialog";

// Function to handle tab changes (optional)
const onChange = (key) => {
  console.log("Tab changed to: ", key);
};

// Tab items for search by IFSC code or by bank and branch name
const items = [
  {
    key: "1",
    label: "Search by IFSC Code",
    children: (
      <Search
        placeholder="Enter IFSC Code"
        allowClear
        enterButton="Search"
        size="large"
        style={{ width: "100%", maxWidth: "900px", paddingLeft: "0px" }}
      />
    ),
  },
  {
    key: "2",
    label: "Search by Bank and Branch Name",
    children: (
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <Select
          style={{
            width: 180,
          }}
          showSearch
          placeholder="Select Bank Name"
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={[
            {
              value: "1",
              label: "State Bank of India",
            },
            {
              value: "2",
              label: "HDFC Bank",
            },
            {
              value: "3",
              label: "Bank of Baroda",
            },
          ]}
        />
        <Input style={{ width: "20%" }} placeholder="Enter IFSC Code" />
        <Button
          type="primary"
          htmlType="submit"
          style={{ backgroundColor: "#1677ff" }}
        >
          Submit
        </Button>
      </div>
    ),
  },
];

const IfscInfo = () => (
  <div id="ifscinfo" className="ifscInfoBlock">
    <div className="container-fluid">
      <div className="textHolder">
        {/* Tabs Section */}
        <div style={{ marginTop: "40px" }}>
          <Tabs
            centered
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
          />
        </div>
        {/* Introduction Section */}
        <Title level={2} style={{ marginBottom: "20px" }}>
          Introduction to IFSC Code System
        </Title>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          The Indian Financial System Code (IFSC) is a crucial system for:
        </Paragraph>
        <ul style={{ fontSize: "16px", color: "#9092A3", paddingLeft: "30px" }}>
          <li>
            Unique Identification: Assigning a unique code to each bank branch
            for electronic fund transfer.
          </li>
          <li>
            Transaction Processing: Facilitating seamless and error-free
            transactions across various banking channels.
          </li>
          <li>
            Financial Reporting: Streamlining financial operations and
            regulatory reporting.
          </li>
        </ul>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          Although IFSC codes are standardized across India, each code uniquely
          identifies a specific branch and bank, ensuring precision in
          electronic transactions.
        </Paragraph>

        {/* Video Section */}
        <HeroVideoDialog
          className="hidden dark:block rounded-video"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
          thumbnailAlt="Hero Video"
        />

        {/* Additional Information Section */}
        <Title level={2} style={{ marginBottom: "20px", marginTop: "40px" }}>
          How IFSC Code Lookup Works
        </Title>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          Search by IFSC Code or Search by Bank and Branch Name.
        </Paragraph>
        <ul style={{ fontSize: "16px", color: "#9092A3", paddingLeft: "30px" }}>
          <li>
            Enter IFSC Code: Input the IFSC code directly into the search box to
            get detailed information about the bank branch.
          </li>
        </ul>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          Once you enter the IFSC code or select the bank and branch name, our
          system will retrieve and display the following:
        </Paragraph>

        {/* Two-column layout */}
        <div className="columnWrapper">
          <ul className="columnList">
            <li>Bank Name</li>
            <li>Branch Name</li>
            <li>IFSC Code</li>
            <li>MICR Code</li>
          </ul>
          <ul className="columnList">
            <li>Address</li>
            <li>City</li>
            <li>State</li>
            <li>Contact Number</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default IfscInfo;
