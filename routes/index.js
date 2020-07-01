var express = require("express");
var router = express.Router();

var Controller = require("../controller/Controller");

router.get("/", Controller.home);
router.get("/horarios", Controller.horarios);
router.get("/actividades", Controller.actividades);
router.get("/planes", Controller.planes);
router.get("/asociarse", Controller.asociarse);
router.get("/contacto", Controller.contacto);
router.post("/contacto", Controller.sendMail);
router.get("/enterateMas", Controller.enterateMas);

module.exports = router;
