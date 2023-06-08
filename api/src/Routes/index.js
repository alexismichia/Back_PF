const { Router } = require("express");

const copaRouter = require("./copaRouter");
const equipoRouter = require("./equipoRouter");
const ligaRouter = require("./ligaRouter");
const seleccionRouter = require("./seleccionRouter");

const router = Router();

router.use("/copa", copaRouter);
router.use("/equipo", equipoRouter);
router.use("/liga", ligaRouter);
router.use("/seleccion", seleccionRouter);

module.exports = router;
