import React from "react";
import ResponsiveAppBar from "./AppBar/Navbar";
import TopBg from "./TopBg/TopBg";
import BasicTable from "./Table/Table";

function User() {
  return (
    <div>
      <ResponsiveAppBar />
      <TopBg />
      <BasicTable />
    </div>
  );
}

export default User;
