const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const usersRouter = require("./routes/api/users");
const AdminUser = require("./routes/api/AdminUser");
const config = require('config');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const SGROUP = require('./routes/api/SGroup');
const SUPREQ = require('./routes/api/SupervisorReq')
const HomeUser = require ('./routes/api/HomeUser')
const MS = require ('./routes/api/MS')
const Allocate = require ('./routes/api/AllocatePanel')
const REGTOPIC = require('./routes/api/TopicRegister');
const COSUPREQ = require('./routes/api/CoSupervisorReq');

const presentationMarks = require("./routes/api/presentationMarks");
const pMarks = require("./routes/api/pMarks");
const evaluateTopics = require("./routes/api/evaluateTopics");
const panelMembersToPanels = require("./routes/api/panelMembersToPanels");

const topicacceptance = require('./routes/api/topicacceptanceroute');
const thesisevaluaation = require('./routes/api/thesisevaluationroute');

// Body parser middleware
app.use(bodyParser.json());
app.use(cors());

app.use(
    express.urlencoded({
        extended: false
    })
);
//route middleware
app.use(SGROUP);
app.use(SUPREQ);
app.use(HomeUser);
app.use(MS);
app.use(Allocate);
app.use(REGTOPIC);
app.use(COSUPREQ);

app.use(presentationMarks);
app.use(pMarks);
app.use(evaluateTopics);
app.use(panelMembersToPanels);

app.use(topicacceptance);
app.use(thesisevaluaation);

app.use(express.json());
// DB Config
const db = config.get('mongoURI');
// Connect to MongoDB
mongoose
    .connect(
        db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", usersRouter);
app.use("/api/AdminUser", AdminUser);
app.use("/marksSupervisor", require("./routes/AdminUpload"));
app.use("/studentUp", require("./routes/StudentUpload"));



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));