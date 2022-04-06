import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <body>
      <div className="header">
        <div className="header-right">
          <Link className="navBarLink" to="/add-photo">
            Add Photo
          </Link>
          <Link className="navBarLink" to="/view-photo">
            View Photo
          </Link>
        </div>
      </div>
    </body>
  );
}
