import express from 'express';

const router = express.Router();

// imported routes
import UsersRoutes from '../modules/users/routes/users.routes';

const moduleRoutes = [
  {path: '/users', route: UsersRoutes},
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;