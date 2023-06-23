import { Router } from "express";
import controllers from "../controllers";
import { verifyToken } from "../middlewares/auth";

const router = Router()

// crear un usuario

router.post("/create", controllers.User.createUser )
router.get("/getAll",  controllers.User.getUsers)
router.put("/update", verifyToken, controllers.User.updateUser )
router.delete("/delete/:_id", controllers.User.deleteUser)
router.get("/getName", controllers.User.buscar)
router.post("/login", controllers.User.login)


export default router