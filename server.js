const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");


// Route Files
const registerRoutes = require("./routes/register");
const loginRoutes = require("./routes/login");
const pendonorRegisterRoutes = require("./routes/pendonorregister");
const pendonorLoginRoutes = require("./routes/pendonorlogin");
const dashboardRoutes = require("./routes/dashboard");
const didonorRoutes = require("./routes/didonor");
// const donateRoutes = require("./routes/donate");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "src")));





// Routes
// app.use("/api", donateRoutes);
app.use("/", registerRoutes);
app.use("/", loginRoutes);
app.use("/pendonor", pendonorRegisterRoutes);
app.use("/pendonor", pendonorLoginRoutes);
app.use("/", dashboardRoutes);
app.use("/", didonorRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
