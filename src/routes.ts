import { Application, Router } from 'express';
import productRoutes from "./api/controllers/router"

export default function routes(app: Application): void {
    const router = Router();

    router.use('/products', productRoutes)

    app.use('/api/v1', router);
    //http://localhost:3000/api/v1/products
}
