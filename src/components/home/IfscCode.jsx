import React, { useState } from "react";
import axios from "axios";
import SearchTabs from "../common/SearchTabs";
import IntroSection from "../common/IntroSection";
import WorkSection from "../common/WorkSection";
import HeroVideoDialog from "../common/HeroVideoDialog";
import IfscTable from "../common/IfscTable";
import { Spin, Alert } from "antd";

const IfscCode = () => {
  const [searchOption, setSearchOption] = useState(
    "Search by Bank and Branch Name"
  );
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (params) => {
    const { ifsc_code, bank, branch } = params;
    console.log(ifsc_code);

    setError("");
    setSearchResults([]);

    if (searchOption === "Search by Bank and Branch Name") {
      if (!bank || !branch) {
        setError("Please enter both the bank name and branch name.");
        return;
      }
    } else if (searchOption === "Search by IFSC Code" && !ifsc_code) {
      setError("Please enter the IFSC code.");
      return;
    }

    setLoading(true);

    try {
      let response;
      if (searchOption === "Search by Bank and Branch Name") {
        response = await axios.get("/api/banks", {
          params: {
            bank: bank,
            branch: branch,
          },
        });
        if (response.data && response.data.length > 0) {
          setSearchResults(response.data);
        } else {
          setError("An error occurred while fetching the data.");
        }
      } else if (searchOption === "Search by IFSC Code") {
        response = await axios.get(`ifsccode/${ifsc_code}`);
        const data = response.data;
        setSearchResults([
          {
            bank: data.BANK,
            branch: data.BRANCH,
            ifsc: data.IFSC,
            address: data.ADDRESS,
            contact: data.CONTACT,
          },
        ]);
      }
    } catch (error) {
      console.error(error); // Log error details
      setError("An error occurred while fetching the data.");
    }

    setLoading(false);
  };

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
            <SearchTabs
              onSearchOptionChange={setSearchOption}
              onSearch={handleSearch}
            />
          </div>
          {loading && (
            <div
              style={{
                marginTop: "40px",
                marginLeft: "50%",
                marginBottom: "40px",
              }}
            >
              <Spin size="large" />
            </div>
          )}

          {/* Display error message */}
          {error && !loading && (
            <Alert message={error} type="error" style={{ marginTop: "20px" }} />
          )}

          {/* Display search results */}
          {!loading && searchResults.length > 0 && (
            <IfscTable data={searchResults} />
          )}

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
