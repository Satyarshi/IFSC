// components/HowItWorksSection.js
import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const WorkSection = () => (
  <div>
    <Title level={2} style={{ marginBottom: "20px", marginTop: "40px" }}>
      How IFSC Code Lookup Works
    </Title>
    <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
      <span className="para">
        Search by IFSC Code or Search by Bank and Branch Name.
      </span>
    </Paragraph>
    <ul style={{ fontSize: "16px", color: "#9092A3", paddingLeft: "30px" }}>
      <li>
        Enter IFSC Code: Input the IFSC code directly into the search box to get
        detailed information about the bank branch.
      </li>
    </ul>
    <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
      <span className="para">
        Once you enter the IFSC code or select the bank and branch name, our
        system will retrieve and display the following:
      </span>
    </Paragraph>
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
);

export default WorkSection;
