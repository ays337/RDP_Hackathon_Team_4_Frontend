import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllTimes } from "store/thunks/dashboardhome-thunk";
import { useNavigate } from "react-router-dom";
import "common/styles.css";

const DashboardHomeGrid = ({ onAddTime }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTimes());
  }, [dispatch]);

  const handleNavigatePageOne = () => {
    navigate("/page-one");
  };
  const handleNavigatePageTwo = () => {
    navigate("/page-two");
  };

  return (
    <div className="home-grid">
      <h1 className="home-title">Home Page</h1>
      <div className="button-grid three-btn">
        <div className="button-with-label">
          <button className="action-button" onClick={handleNavigatePageOne}>
            Remove Last Time Page
          </button>
        </div>
        <div className="button-with-label">
          <button className="action-button" onClick={onAddTime}>
            Add Current Time
          </button>
          <p className="button-label"> Click to add a time</p>
        </div>
        <div className="button-with-label">
          <button className="action-button" onClick={handleNavigatePageTwo}>
            Show All Times Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHomeGrid;
