import React from "react";

import "common/styles.css";

const RemoveTimeButton = ({
  showRemoved,
  lastTimeRemoved,
  remainingTimesLength,
}) => {
  return (
    <div className="results-flex">
      <div className="results-text">
        {showRemoved &&
          (lastTimeRemoved ? (
            <p>
              The time removed was: {lastTimeRemoved}, {remainingTimesLength}{" "}
              remaining{" "}
            </p>
          ) : (
            <p>
              There are no more times to remove, please add more times on the
              home Page
            </p>
          ))}
      </div>
    </div>
  );
};

export default RemoveTimeButton;
