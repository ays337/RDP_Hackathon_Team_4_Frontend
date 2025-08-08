import axios from "axios";

export const removeLastTime = () => {
  return axios.post("http://localhost:4000/removetime");
};

export const removeLastTimeDB = () => {
  return axios.post("http://localhost:4000/api/removetime");
};

export const getAlltimes = () => {
  return axios.get("http://localhost:4000/getTime").then(({ data }) => {
    console.log("This is from the server", data.previousTimes);
    return data.previousTimes;
  });
};
