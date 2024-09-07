import React from "react";
import { Typography } from "antd";
const { Title, Paragraph } = Typography;

const IfscStructure = () => (
  <div id="ifscCodeStructure" className="ifscCodeStructureBlock">
    <div className="container-fluid">
      <div className="textHolder">
        {/* Title Section */}
        <Title level={2} style={{ marginBottom: "20px" }}>
          Why is IFSC Code Important?
        </Title>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          The IFSC code system plays a vital role in:
        </Paragraph>
        <ul style={{ fontSize: "16px", color: "#9092A3", paddingLeft: "30px" }}>
          <li>
            Ensuring Accuracy: Minimizing errors in financial transactions by
            providing unique identifiers for each branch.
          </li>
          <li>
            Facilitating Transfers: Enabling easy and quick electronic fund
            transfers between different banks.
          </li>
          <li>
            Supporting Compliance: Meeting regulatory requirements and ensuring
            proper financial tracking.
          </li>
        </ul>

        {/* IFSC Code Structure */}
        <Title level={2} style={{ marginBottom: "20px", marginTop: "40px" }}>
          Understanding IFSC Code Structure
        </Title>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          The Indian Financial System Code (IFSC) is a unique identifier
          assigned to each bank branch in India, facilitating electronic funds
          transfer and other banking operations. Here’s a breakdown of the IFSC
          code structure:
        </Paragraph>

        {/* Display Image */}
        <div className="ifscImageHolder">
          <img
            src="/assets/Ifsc.svg" // Update this path to match where your image is located
            alt="IFSC Code Structure"
            style={{
              maxWidth: "100%",
              borderRadius: "15px",
              margin: "20px 0",
            }}
          />
        </div>

        {/* Description of Code Breakdown */}
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          An IFSC code is an 11-character alphanumeric code, structured as
          follows:
        </Paragraph>
        <ol style={{ fontSize: "16px", color: "#9092A3" }}>
          <li>
            1. Bank Identifier (4 Characters):
            <ul>
              <li>
                The first four characters represent the bank code. It indicates
                the specific bank branch within the financial system.
              </li>
              <li>
                Example: For the code SBIN0001234, SBIN stands for State Bank of
                India.
              </li>
            </ul>
          </li>
          <li>
            2. Zero (1 Character):
            <ul>
              <li>
                The fifth character is always a zero (0). This digit is used as
                a control character and does not convey any specific information
                about the branch or bank.
              </li>
            </ul>
          </li>
          <li>
            3.Branch Code (6 Characters):
            <ul>
              <li>
                The last six characters denote the specific branch code. This
                segment uniquely identifies the branch within the bank.
              </li>
              <li>
                Example: In SBIN0001234, 0001234 specifies the branch of the
                State Bank of India.
              </li>
            </ul>
          </li>
        </ol>

        {/* Example Breakdown Section */}
        <Title level={2} style={{ marginBottom: "20px", marginTop: "40px" }}>
          Example Breakdown
        </Title>
        <Paragraph
          style={{ fontSize: "16px", color: "#9092A3", marginBottom: "0px" }}
        >
          Let’s break down an example IFSC code: HDFC0001234
        </Paragraph>
        <ul style={{ fontSize: "16px", color: "#9092A3", paddingLeft: "30px" }}>
          <li>HDFC: Bank Identifier - This represents HDFC Bank.</li>
          <li>0: Control Digit - Always zero.</li>
          <li>
            001234: Branch Code - This identifies the specific branch of HDFC
            Bank.
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default IfscStructure;
