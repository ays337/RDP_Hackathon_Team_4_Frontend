import "common/styles.css";

const AddTimeButton = ({ showAdd, currentTime }) => {
  return (
    <div className="results-flex">
      <div className="results-text">
        {showAdd &&
          (currentTime ? (
            <p>Entry {currentTime} has been added</p>
          ) : (
            <p>Please Click to add a time</p>
          ))}
      </div>
    </div>
  );
};

export default AddTimeButton;
