var express = require('express');
var router = express.Router();

var actividadesController = require("../controller/actividadesController");

router.get("/actividades/fitness", actividadesController.fitness);
router.get("/actividades/funcional", actividadesController.funcional);
router.get("/actividades/indoor-cycle", actividadesController.indoorcycle);
router.get("/actividades/yoga", actividadesController.yoga);
router.get("/actividades/taekwondo", actividadesController.taekwondo);
router.get("/actividades/box-training", actividadesController.boxtraining);
router.get("/actividades/natacion", actividadesController.natacion);
router.get("/actividades/acuatica", actividadesController.acuatica);
router.get("/actividades/pileta-libre", actividadesController.piletalibre);

module.exports = router;