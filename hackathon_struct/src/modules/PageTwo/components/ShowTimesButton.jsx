import React from "react";

import "common/styles.css";

const ShowTimesButton = ({ showTimes, previousTimes }) => {
  return (
    <div className="results-flex">
      <div className="results-text">
        {showTimes &&
          (previousTimes.length > 0 ? (
            <ul>
              {Array.isArray(previousTimes) &&
                previousTimes
                  .slice()
                  .reverse()
                  .map((time, index) => <li key={index}>{time}</li>)}
            </ul>
          ) : (
            <p>There are no times currently</p>
          ))}
      </div>
    </div>
  );
};

export default ShowTimesButton;
