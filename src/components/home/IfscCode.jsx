import React, { useState } from "react";
import SearchTabs from "../common/SearchTabs";
import IntroSection from "../common/IntroSection";
import WorkSection from "../common/WorkSection";
import HeroVideoDialog from "../common/HeroVideoDialog";
const IfscCode = () => {
  const [searchOption, setSearchOption] = useState("Search by IFSC Code");

  return (
    <div id="ifscinfo" className="ifscInfoBlock">
      <div className="container-fluid">
        <div className="textHolder">
          <div
            style={{
              marginTop: "-20px",
              marginBottom: "35px",
              fontWeight: "700",
            }}
          >
            <SearchTabs onSearchOptionChange={setSearchOption} />
          </div>

          <IntroSection />
          <HeroVideoDialog
            className="hidden dark:block rounded-video"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
            thumbnailAlt="Hero Video"
          />
          <WorkSection />
        </div>
      </div>
    </div>
  );
};

export default IfscCode;
