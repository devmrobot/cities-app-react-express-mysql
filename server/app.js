const express = require("express");
const cors = require("cors");
const app = express();
const router = require('./routes/cities.routes');
const db = require('./models');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());
app.use("/api", router);

app.get("/", (req,res) => {
    res.send("Welcome on the cities API");
})

db.sequelize.sync({ force: true }).then(() => {
    app.listen(3001, () => {
        console.log(`Server is listenning on port 3001`);
    })
})


module.exports = app;