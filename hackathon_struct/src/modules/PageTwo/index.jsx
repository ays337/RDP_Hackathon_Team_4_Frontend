import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllTimes } from "store/thunks/pageTwo-thunk";
import "common/styles.css";
import PageTwoGrid from "./components/PageTwoGrid";
import ShowTimesResult from "./components/ShowTimesResult";

const PageTwo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTimes());
  }, [dispatch]);
  const [showTimes, setShowTimes] = useState(false);

  const previousTimes = useSelector(
    (state) => state.pageTwo?.previousTimes || []
  );

  return (
    <div className="home-container">
      <PageTwoGrid handleShowTimes={setShowTimes} />
      <ShowTimesResult showTimes={showTimes} previousTimes={previousTimes} />
    </div>
  );
};

export default PageTwo;
