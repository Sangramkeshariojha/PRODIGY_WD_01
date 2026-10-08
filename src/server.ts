import express from "express";
import userRoutes from "./routes/userRoutes";

const app = express();

const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// User routes
app.use("/users", userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});