import HeroVideoDialog from "./common/HeroVideoDialog";
import React from "react";

const Test = () => {
  return (
    <HeroVideoDialog
      className="hidden dark:block "
      animationStyle="from-center"
      videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
      thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
      thumbnailAlt="Hero Video"
    />
  );
};

export default Test;
