import React from "react";
import { Typography, Card, Image } from "antd";
const { Title, Paragraph } = Typography;
import HeroVideoDialog from "../common/HeroVideoDialog";

const HsnInfo = () => (
  <div id="hsninfo" className="hsnInfoBlock">
    <div className="container-fluid">
      <div className="textHolder">
        <Title level={2}>What is HSN Code?</Title>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          HSN stands for Harmonized System of Nomenclature, a globally
          recognized system for the systematic classification of goods. This
          6-digit uniform code, developed by the World Customs Organization
          (WCO) in 1988, categorizes over 5,000 products and is widely accepted
          across the world.
        </Paragraph>

        <HeroVideoDialog
          className="hidden dark:block rounded-video"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
          thumbnailAlt="Hero Video"
        />

        <Title level={2}>How does HSN code work?</Title>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          The HSN system is organized into approximately 5,000 commodity groups,
          each identified by a six-digit code. This legal and logical structure
          ensures uniform classification worldwide, supported by clearly defined
          rules.
        </Paragraph>

        <Title level={2}>Importance of HSN</Title>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          HSN's primary purpose is to standardize the classification of goods
          globally, promoting uniformity and facilitating international trade.
          The system is utilized by over 200 countries and covers more than 98%
          of merchandise in international trade.
        </Paragraph>
      </div>
    </div>
  </div>
);

export default HsnInfo;
