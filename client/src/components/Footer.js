import React from "react";
import "./footer.css";

export default function Footer() {
  const date = new Date();

  return <p className="footer">Copyright{" " + date.getFullYear()}</p>;
}
