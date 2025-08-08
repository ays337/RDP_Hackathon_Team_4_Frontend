import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllTimes,
  removeLastTime,
  removeLastTimeDB,
} from "store/thunks/pageOne-thunk";
import RemoveTimeButton from "./components/RemoveTimeButton";
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

  console.log(`ReaminaingTimesState/Server: ${remainingTimesLength}`);
  console.log(`LastTime Removed State/Sever ${lastTimeRemoved}`);

  const lastTimeRemovedDB = useSelector(
    (state) => state.pageOne?.removedTimeDB || ""
  );
  const remainingTimesLengthDB = useSelector(
    (state) => state.pageOne?.previousTimesDB || []
  ).length;

  console.log(`ReaminaingTimesDB ${remainingTimesLengthDB}`);

  const handleRemoveLastTime = () => {
    dispatch(removeLastTime());
    setShowRemoved(true);
    dispatch(getAllTimes());
    dispatch(removeLastTimeDB());
  };

  return (
    <div className="home-container">
      <PageOneGrid onRemoveTime={handleRemoveLastTime} />
      <RemoveTimeButton
        showRemoved={showRemoved}
        lastTimeRemoved={lastTimeRemoved}
        remainingTimesLength={remainingTimesLength}
      />
      <RemoveTimeButton
        showRemoved={showRemoved}
        lastTimeRemoved={lastTimeRemovedDB}
        remainingTimesLength={remainingTimesLengthDB}
      />
    </div>
  );
};

export default PageOne;
