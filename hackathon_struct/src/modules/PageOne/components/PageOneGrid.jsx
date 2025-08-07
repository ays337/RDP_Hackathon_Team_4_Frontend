import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllTimes } from "store/thunks/pageOne-thunk";

const PageOneGrid = ({ onRemoveTime }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTimes());
  }, [dispatch]);

  const handleNavigateHome = () => {
    navigate("/");
  };
  const handleNavigatePageTwo = () => {
    navigate("/page-two");
  };
  return (
    <div className="home-grid">
      <h1 className="home-title">Remove Time (Page One)</h1>
      <div className="button-grid three-btn">
        <div className="button-with-label">
          <button className="action-button" onClick={handleNavigateHome}>
            Home Page
          </button>
        </div>
        <div className="button-with-label">
          <button className="action-button" onClick={onRemoveTime}>
            Remove Last Time
          </button>
          <p className="button-label">Please Click to Remove a Time</p>
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

export default PageOneGrid;
