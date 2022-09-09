import React from "react";
import Background from "../../components/Background/background";
import EachOverview from "../../components/EachOverview/eachoverview";
const Dashboard = () => {
  return (
    <div>
      <Background />
      <EachOverview props="Dashboard" text="Transaction Overview" />
    </div>
  );
};

export default Dashboard;
