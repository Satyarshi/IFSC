import React from "react";
import { Typography, Card } from "antd";

const { Title, Paragraph } = Typography;

const SacStructure = () => (
  <div id="sacCodeStructure" className="sacCodeStructureBlock">
    <div className="container-fluid">
      <div className="textHolder">
        <Title level={2}>Services Accounting Code (SAC) in GST</Title>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          Services, much like goods, require uniform classification for
          recognition, measurement, and taxation purposes. These classifications
          are known as Services Accounting Codes (SAC).
        </Paragraph>

        <div className="sacCodeExample">
          <img
            src="/assets/sac infographics.png"
            alt="SAC Code Structure Example"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </div>

        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          Legal documentation and certification services related to patents,
          copyrights, and other intellectual property rights are classified
          under 998213.
        </Paragraph>
        <ul style={{ fontSize: "16px", color: "#9092A3", paddingLeft: "20px" }}>
          <li>The first two digits (99) are common for all services.</li>
          <li>
            The next two digits (82) denote the major category of the service,
            in this case, legal services.
          </li>
          <li>
            The last two digits (13) specify the detailed nature of the service,
            such as legal documentation for patents.
          </li>
        </ul>

        <Title level={2}>HSN Worldwide</Title>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          The Harmonized System of Nomenclature (HSN) plays a crucial role in
          the global trade ecosystem by:
        </Paragraph>
        <ul style={{ fontSize: "16px", color: "#9092A3", paddingLeft: "20px" }}>
          <li>Ensuring consistent classification of goods across borders.</li>
          <li>Providing a standardized foundation for customs tariffs.</li>
          <li>
            Facilitating the collection of international trade statistics.
          </li>
        </ul>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          While the HSN codes are globally standardized, some countries may
          implement slight modifications to account for specific national
          requirements.
        </Paragraph>

        <Title level={2}>HSN in India</Title>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          As a member of the World Customs Organization (WCO) since 1971, India
          initially adopted the 6-digit HSN codes for Customs and Central Excise
          purposes. To achieve greater accuracy in classification, India later
          extended these codes to an 8-digit format, allowing for more detailed
          categorization of goods.
        </Paragraph>

        <Title level={2}>HSN Codes in GST</Title>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          HSN (Harmonized System of Nomenclature) codes are critical under the
          GST regime, used for the systematic classification of goods.
        </Paragraph>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          HSN Codes to be Declared (Up to March 31, 2021):
        </Paragraph>
        <ul style={{ fontSize: "16px", color: "#9092A3", paddingLeft: "20px" }}>
          <li>Turnover up to ₹1.5 crore: No HSN digits required.</li>
          <li>
            Turnover between ₹1.5 crore and ₹5 crore: 2 HSN digits required.
          </li>
          <li>Turnover above ₹5 crore: 4 HSN digits required.</li>
        </ul>
      </div>
    </div>
  </div>
);

export default SacStructure;
