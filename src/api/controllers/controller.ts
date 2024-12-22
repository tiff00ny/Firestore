import {NextFunction, Request, Response} from "express"
import ProductsService from "../services/products.services";

export class Controller {

    //  encontrar todos
    findAll(_: Request, res: Response){
        ProductsService.findAll().then((r) => res.json(r))
    }

    //  encontrar por Id
    async findById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const branch = await ProductsService.findById(Number(id))
            res.json(branch);
        } catch (error) {
            next(error)
        }
    }

    //  crear
    create(req: Request, res: Response){
        ProductsService.create(req.params.name).then((r) => res.json(r))
    }

    //  actualizar
    update(req: Request, res: Response){
        const { id } = req.params;
        ProductsService.update(Number(id), req.body).then((r) => res.json(r))
    }

    //  eliminar
    delete(req: Request, res: Response){
        const { id } = req.params;
        ProductsService.delete(Number(id)).then((r) => res.json(r))
    }
}

export default new Controller();