import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <div
      className="bg-dark text-light d-flex justify-content-center align-items-center"
      style={{ height: "8vh" }}
    >
      Copyright &copy; {date.getFullYear()}
    </div>
  );
};

export default Footer;
