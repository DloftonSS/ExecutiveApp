const router = require("express").Router();
// const app = express();
// import Axios from "axios";

const apiController = require("../../client/src/controllers/apiController");
const settingsController = require("../controllers/settingsController");
const catalogController = require("../controllers/catalogController");
const secure = require("../middleware/secure");
const verifyController = require("../controllers/verifyController");

router.get("/executiveAccount/:id", apiController.loadMember);

module.exports = router;
