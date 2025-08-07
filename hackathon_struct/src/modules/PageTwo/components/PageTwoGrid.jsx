import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllTimes } from "store/thunks/pageTwo-thunk";
import { useNavigate } from "react-router-dom";
import "common/styles.css";
const PageTwoGrid = ({ handleShowTimes }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTimes());
  }, [dispatch]);

  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/");
  };

  const handleNavigatePageOne = () => {
    navigate("/page-one");
  };

  return (
    <div className="home-grid">
      <h1 className="home-title">Show All Times(Page Two)</h1>
      <div className="button-grid three-btn">
        <div className="button-with-label">
          <button className="action-button" onClick={handleNavigateHome}>
            Go Home
          </button>
        </div>
        <div className="button-with-label">
          <button
            className="action-button"
            onClick={() => handleShowTimes(true)}
          >
            Show All Times
          </button>
          <p className="button-label">Click to show all times</p>
        </div>
        <div className="button-with-label">
          <button className="action-button" onClick={handleNavigatePageOne}>
            Remove Last Time Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageTwoGrid;
