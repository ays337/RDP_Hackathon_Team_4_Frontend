import express from 'express';
import cors from 'cors';

const port = 4000;
const app = express();
app.use(express.json());
app.use(cors());


let timeCheck = {
    previousTimes: []
};

app.use((req, res, next) => {
    console.log('Incoming request:', req.method, req.url);
    next();
});

app.get('/', (_, res) => {
    res.send('Server is running!');
});

app.get('/getTime', (_, res) => {
console.log('Updated times:', timeCheck.previousTimes);
    
res.json({ previousTimes: timeCheck.previousTimes });

});


app.post('/addTime', (req, res) => {
    const { currentTime } = req.body;
    timeCheck.previousTimes.push(currentTime);
    console.log('Updated times:', timeCheck.previousTimes);
    res.json({ previousTimes: timeCheck.previousTimes });

});

app.post('/removetime', (_, res) => {
    console.log('Times Before Pop:', timeCheck.previousTimes);
    const times_pre_remove = timeCheck.previousTimes;
    const last_time = timeCheck.previousTimes.pop();
    console.log('Removed Time', last_time);
    console.log('Times After Pop:', timeCheck.previousTimes);
    res.json({times_pre_remove, last_time, previousTimes: timeCheck.previousTimes})
})






app.listen(port, () => console.log(`Server listening at ${port}`));