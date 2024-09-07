import React from "react";
import { Input, Space } from "antd";
const { Search } = Input;

const SearchBox = () => {
  return (
    <div className="searchBoxWrapper">
      <Space direction="vertical">
        <Search
          placeholder="Enter HSN/SSC Code or Keyword..."
          allowClear
          enterButton="Search"
        />
      </Space>
    </div>
  );
};

export default SearchBox;
