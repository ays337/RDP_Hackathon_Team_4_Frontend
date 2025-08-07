import axios from 'axios';

export const getAlltimes = () => {
    return axios
        .get('http://localhost:4000/getTime')
        .then(({ data }) => {
            console.log('Console Log from pageTwo api index.jsx', data.previousTimes);
            return data.previousTimes;
        });
};
