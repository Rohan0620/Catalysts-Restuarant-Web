import express from 'express';

const router = express.Router()

//import controllers

import {createUser} from "../controllers/userController.js";
import {login} from "../controllers/userController.js";
import {forgetPassword} from "../controllers/userController";

router.route("/login").post(login);
router.route("/signup").post(createUser);
router.route("/forgetpassword").post(forgetPassword);

export default router;