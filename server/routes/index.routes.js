const router = require("express").Router();
const userRouter = require("./cities.routes");

router.use('/cities', userRouter);

module.exports = router;