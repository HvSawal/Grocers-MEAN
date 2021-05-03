import { Products } from "./product";

export class CartItem {
    productId: number;
    productName: string;
    qty: number;
    price: number;

    constructor(id: number, product: Products, quantity: number){
        this.productId = product._id;
        this.productName = product.name;
        this.price = product.price;
        this.qty = quantity;
    }
}
