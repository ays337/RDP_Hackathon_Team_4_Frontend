import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTimes, removeLastTime } from "store/thunks/pageOne-thunk";
import RemoveTimeResult from "./components/RemoveTimeResult";
import PageOneGrid from "./components/PageOneGrid";

const PageOne = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTimes());
  }, [dispatch]);

  const [showRemoved, setShowRemoved] = useState(false);
  const lastTimeRemoved = useSelector(
    (state) => state.pageOne?.removedTime || ""
  );
  const remainingTimesLength = useSelector(
    (state) => state.pageOne?.previousTimes || []
  ).length;

  const handleRemoveLastTime = () => {
    dispatch(removeLastTime());
    setShowRemoved(true);
    dispatch(getAllTimes());
  };

  return (
    <div className="home-container">
      <PageOneGrid onRemoveTime={handleRemoveLastTime} />
      <RemoveTimeResult
        showRemoved={showRemoved}
        lastTimeRemoved={lastTimeRemoved}
        remainingTimesLength={remainingTimesLength}
      />
    </div>
  );
};

export default PageOne;
