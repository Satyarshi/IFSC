import React from "react";
import { Typography, Card, Image } from "antd";

const { Title, Paragraph } = Typography;

const HsnDeclaration = () => (
  <div className="hsnDeclarationStructureBlock">
    <div className="container-fluid">
      <div className="textHolder">
        <Title level={2}>Declaration of HSN Codes for Goods and Services</Title>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          From April 1, 2021, the declaration requirements for HSN codes under
          GST were updated (as per CGST Notification No. 78/2020 dated October
          15, 2020):
        </Paragraph>
        <ul style={{ fontSize: "16px", color: "#9092A3" }}>
          <li>
            Turnover up to ₹5 crore:
            <ul>
              <li>B2B tax invoices: 4 HSN digits mandatory.</li>
              <li>B2C tax invoices: 4 HSN digits optional.</li>
            </ul>
          </li>
          <li>
            Turnover above ₹5 crore: 6 HSN digits mandatory for all invoices.
          </li>
        </ul>

        <Card
          style={{
            backgroundColor: "rgba(239, 254, 255, 1)",
            borderRadius: "8px",
            padding: "15px",
            margin: "20px 0",
            border: "2px solid",
            borderColor: "rgba(34, 211, 238, 1)",
          }}
        >
          <Paragraph style={{ fontSize: "16px", color: "#656565", margin: 0 }}>
            <strong>Note:</strong> The annual aggregate turnover for the
            previous financial year is referenced for reporting invoices in FY
            2021-22, which means the turnover of FY 2020-21 is considered.
          </Paragraph>
        </Card>

        <Title level={2}>Importance of HSN Codes under GST</Title>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          HSN codes streamline GST by eliminating the need for detailed
          descriptions of goods on tax invoices. This makes the filing process
          more efficient, as GST returns are automated.
        </Paragraph>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          Taxpayers, including dealers and service providers, must provide
          HSN/SAC-wise summaries of their sales in GSTR-1, based on the turnover
          slabs mentioned above.
        </Paragraph>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          For exports and imports under GST, declaring all 8 digits of the HSN
          code is mandatory.
        </Paragraph>
      </div>
    </div>
  </div>
);

export default HsnDeclaration;
