import express from 'express';
import { signUp, login } from "../controllers/User";

const routes = express.Router();

// 회원가입
routes.post('/signup', signUp);

// 로그인
routes.post('/login', login);

export default routes;