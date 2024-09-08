// components/IntroductionSection.js
import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const IntroSection = () => (
  <div>
    <Title level={2} style={{ marginBottom: "20px" }}>
      Introduction to IFSC Code System
    </Title>
    <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
      <span className="para">
        The Indian Financial System Code (IFSC) is a crucial system for:
      </span>
    </Paragraph>
    <ul style={{ fontSize: "16px", color: "#9092A3", paddingLeft: "30px" }}>
      <li>
        Unique Identification: Assigning a unique code to each bank branch for
        electronic fund transfer.
      </li>
      <li>
        Transaction Processing: Facilitating seamless and error-free
        transactions across various banking channels.
      </li>
      <li>
        Financial Reporting: Streamlining financial operations and regulatory
        reporting.
      </li>
    </ul>
    <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
      <span className="para">
        Although IFSC codes are standardized across India, each code uniquely
        identifies a specific branch and bank, ensuring precision in electronic
        transactions.
      </span>
    </Paragraph>
  </div>
);

export default IntroSection;
