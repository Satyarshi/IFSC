import React from "react";
import { Typography, Card } from "antd";

const { Title, Paragraph } = Typography;

const HsnStructure = () => (
  <div id="hsnCodeStructure" className="hsnCodeStructureBlock">
    <div className="container-fluid">
      <div className="textHolder">
        <Title level={2}>Understanding HSN Code Structure</Title>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          The HSN structure includes:
        </Paragraph>
        <ul style={{ fontSize: "16px", color: "#9092A3", paddingLeft: "20px" }}>
          <li>21 Sections</li>
          <li>99 Chapters</li>
          <li>1,244 Headings</li>
          <li>5,224 Subheadings</li>
        </ul>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          Each section is divided into chapters, which are further broken down
          into headings and subheadings, describing goods in increasing detail.
        </Paragraph>

        <div className="hsnCodeExample">
          <img
            src="public/assets/hsn infographic.png"
            alt="HSN Code Structure Example"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </div>

        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          Wooden chairs are classified under HSN 94.01.40:
        </Paragraph>
        <ul style={{ fontSize: "16px", color: "#9092A3", paddingLeft: "20px" }}>
          <li>
            94: Chapter for Furniture; Bedding, Mattresses, Mattress Supports,
            Cushions, and Similar Stuffed Furnishings.
          </li>
          <li>
            01: Heading for Seats (other than those of heading 94.02), whether
            or not convertible into beds, and parts thereof.
          </li>
          <li>40: Product code for wooden chairs.</li>
        </ul>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          India further refines this classification with an additional two
          digits. For instance, wooden chairs designed for dining purposes are
          classified as 94.01.40.10.
        </Paragraph>
      </div>
    </div>
  </div>
);

export default HsnStructure;
