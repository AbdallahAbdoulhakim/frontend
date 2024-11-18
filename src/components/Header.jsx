import React from "react";
import Nav from "./Nav";

const Header = ({ search, setSearch }) => {
  return (
    <>
      <Nav search={search} setSearch={setSearch} />
    </>
  );
};

export default Header;
