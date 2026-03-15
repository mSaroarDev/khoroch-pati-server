import express from "express";
import UsersControllers from "../controllers/users.controllers";

const router = express.Router();

router.post("/create", UsersControllers.createUser);

const UsersRoutes = router;
export default UsersRoutes;