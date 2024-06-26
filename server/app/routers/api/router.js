const express = require("express");

const router = express.Router();

const { sayWelcome } = require("../../controllers/sayActions");


router.get("/", sayWelcome);



/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const programRouter = require("./programs/router")

router.use("/items", itemsRouter);

router.use("/programs", programRouter)

/* ************************************************************************* */

module.exports = router;
