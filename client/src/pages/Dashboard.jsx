import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="dashboard">
      <h1>dasboard</h1>
      {user ? <h3>{user.name}</h3> : <p>Loading user data...</p>}
    </div>
  );
};

export default Dashboard;
