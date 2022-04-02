import express from 'express';
import { signUp } from "../controllers/User";

const routes = express.Router();

// 회원가입
routes.post('/signup', signUp);

export default routes;