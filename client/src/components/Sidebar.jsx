import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <Link to="/" className="side-links">
          Home
        </Link>
      </div>
      <div>
        <Link to="/" className="side-links">
          lectures
        </Link>
      </div>
      <div>
        <Link to="/" className="side-links">
          assignments
        </Link>
      </div>
      <div>
        <Link to="/" className="side-links">
          course details
        </Link>
      </div>
      <div>
        <Link to="/" className="side-links">
          Assignment due
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
