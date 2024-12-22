// Este archivo llevara el crud
// El archivo se llama ts porque utilizaremos typescript

import L from "../../common/logger"
import CustomError from "../../common/utils/customError"

// Cuando es una interfaz, se inicia con Mayuscula (constante es minuscula)
interface Product{
    id: number,
    name: string,
    branchId: number
}

export class ProductsService {
    private products: Product[];
    private internalId = 0

    constructor(){
        this.products = [
            {
                id: ++this.internalId, 
                name: "Product 1",
                branchId: 1
            },
            {
                id: ++this.internalId, 
                name: "Product 2",
                branchId: 2
            }
        ]
    }

    //funcion de crear nuevo producto
    create(name: string): Promise<Product> {
        L.info(`Create product with name ${name}`);
        const product: Product = {id: ++this.internalId, name: name, branchId: 3 };
        this.products.push(product)
        return Promise.resolve(product)
    }

    // que nos devuelva todos
    findAll(): Promise<Product[]> {
        L.info("Fetch all products");
        return Promise.resolve(this.products)
    }

      //funcion para encontrar por Id
      findById(id: number) {
        L.info(`Fetch by Id ${id}`);
        const element = this.products.find((x)=> x.id == id);
        if(!element) throw new CustomError("Product not found")
        return Promise.resolve(element)
    }

    //funcion update
    async update(id: number, data: Product){
        await this.findById(id)
        const index = this.products.findIndex((x)=> x.id == id);
        this.products[index].name = data.name; //solo el nombre se podra modificar por ahora
        return this.products[index];
    }

    //funcion update
    async delete(id: number){
        await this.findById(id)
        this.products = this.products.filter(((x)=> x.id == id));
        return Promise.resolve({status: 'deleted'})  
    }
}

export default new ProductsService();