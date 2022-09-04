import React from "react";
import BeautyList from "../components/BeautyStore/BeautyList";
import BeautyCartTable from "../components/BeautyStore/BeautyCartTable/index";

const HomePage = () => {
  return (
    <div>
      <BeautyList />
      <BeautyCartTable />
    </div>
  );
};

export default HomePage;
