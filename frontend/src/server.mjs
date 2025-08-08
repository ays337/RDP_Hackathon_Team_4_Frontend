import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

const port = 4000;
const app = express();

app.use(express.json());
app.use(cors());

const dbPromise = open({
  filename: "./time.db",
  driver: sqlite3.Database,
});

// Initialize the database

const initDb = async () => {
  const db = await dbPromise;
  await db.run(`
    CREATE TABLE IF NOT EXISTS times (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      timestamp TEXT
    )
  `);
};

// Middleware
app.use((req, res, next) => {
  console.log("Incoming request:", req.method, req.url);
  next();
});

// In-memory time tracking
let timeCheck = {
  previousTimes: [],
};

// Non-DB routes
app.get("/", (_, res) => {
  res.send("Server is running!");
});

app.get("/getTime", (_, res) => {
  console.log("Updated times:", timeCheck.previousTimes);
  res.json({ previousTimes: timeCheck.previousTimes });
});

app.post("/addTime", (req, res) => {
  const { currentTime } = req.body;
  timeCheck.previousTimes.push(currentTime);
  console.log("Updated times:", timeCheck.previousTimes);
  res.json({ previousTimes: timeCheck.previousTimes });
});

app.post("/removetime", (_, res) => {
  console.log("Times Before Pop:", timeCheck.previousTimes);
  const times_pre_remove = [...timeCheck.previousTimes];
  const last_time = timeCheck.previousTimes.pop();
  console.log("Removed Time", last_time);
  console.log("Times After Pop:", timeCheck.previousTimes);
  res.json({
    times_pre_remove,
    last_time,
    previousTimes: timeCheck.previousTimes,
  });
});

// DB-backed routes

//Add
app.post("/api/times", async (req, res) => {
  const db = await dbPromise;
  const { currentTime } = req.body;
  try {
    const result = await db.run("INSERT INTO times (timestamp) VALUES (?)", [
      currentTime,
    ]);
    res.json({ id: result.lastID, currentTime });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to get all times
app.get("/api/times", async (_, res) => {
  const db = await dbPromise;
  try {
    const previousTimes = await db.all("SELECT * FROM times");
    res.json(previousTimes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete
app.post("/api/removetime", async (_, res) => {
  const db = await dbPromise;

  try {
    // Get the most recent time entry (highest ID)
    const latestEntry = await db.get(
      "SELECT * FROM times ORDER BY id DESC LIMIT 1"
    );

    if (!latestEntry) {
      return res.status(404).json({ message: "No timestamps to remove." });
    }

    // Delete the most recent entry
    await db.run("DELETE FROM times WHERE id = ?", [latestEntry.id]);

    // Get updated list of times
    const updatedTimes = await db.all("SELECT timestamp FROM times");

    res.json({
      times_pre_remove: [
        ...updatedTimes.map((t) => t.timestamp),
        latestEntry.timestamp,
      ],
      removedTimeDB: latestEntry.timestamp,
      previousTimesDB: updatedTimes.map((t) => t.timestamp),
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server only if DB initializes successfully
try {
  await initDb();
  app.listen(port, () => {
    console.log(`Server listening at ${port}`);
  });
} catch (err) {
  console.error("Database initialization failed:", err);
  process.exit(1);
}
