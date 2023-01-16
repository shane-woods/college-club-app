import { useTheme } from "next-themes";
import React from "react";
import DashNavBar from "../../components/DashNavBar";


const Dashboard = () => {
  const {theme, setTheme} = useTheme();
  console.log(theme);
  return (
    <>
      <DashNavBar/>
      {/* Will need a side navbar
          Main page will show organizations
          Will allow you to add new organizations 
          */}
    </>
  )
};

export default Dashboard;