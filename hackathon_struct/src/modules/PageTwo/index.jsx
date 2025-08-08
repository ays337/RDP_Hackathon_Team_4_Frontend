import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllTimes } from "store/thunks/pageTwo-thunk";
import "common/styles.css";
import PageTwoGrid from "./components/PageTwoGrid";
import ShowTimesButton from "./components/ShowTimesButton";

const PageTwo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTimes());
  }, [dispatch]);
  const [showTimes, setShowTimes] = useState(false);

  const previousTimes = useSelector(
    (state) => state.pageTwo?.previousTimes || []
  );
  const previousTimesDB = useSelector(
    (state) => state.pageTwo?.previousTimesDB || {}
  );

  const previousTimesDBArray = previousTimesDB
    .slice()
    .map((timeEntry) => timeEntry.timestamp);

  return (
    <div className="home-container">
      <PageTwoGrid handleShowTimes={setShowTimes} />
      <ShowTimesButton
        showTimes={showTimes}
        previousTimes={previousTimesDBArray}
      />
      <ShowTimesButton showTimes={showTimes} previousTimes={previousTimes} />
    </div>
  );
};

export default PageTwo;
