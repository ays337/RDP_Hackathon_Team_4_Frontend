import RemoveTimeResult from "./components/AddTimeResult";
import DashboardHomeGrid from "../../modules/DashboardHome/components/DashboardHomeGrid";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentTime } from "store/thunks/dashboardhome-thunk";
import { getAllTimes } from "store/thunks/dashboardhome-thunk";
import "common/styles.css";

const DashboardHome = () => {
  const dispatch = useDispatch();
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    dispatch(getAllTimes());
  }, [dispatch]);

  const handleAddTime = () => {
    const currentTime = new Date().toLocaleTimeString();
    dispatch(addCurrentTime(currentTime));
    setShowAdd(true);
  };

  const currentTime = useSelector(
    (state) => state.dashboardHome?.currentTime || ""
  );

  return (
    <div className="home-container">
      <DashboardHomeGrid onAddTime={handleAddTime} />
      <RemoveTimeResult showAdd={showAdd} currentTime={currentTime} />
    </div>
  );
};

export default DashboardHome;
