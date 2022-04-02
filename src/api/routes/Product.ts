import express from 'express';
import { create, list } from "../controllers/Product";

const routes = express.Router();

// 상품 등록
routes.post('/create', create);

// 상품 목록
routes.get('/', list);

export default routes;