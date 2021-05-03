
export class Order {
    total: number;
    userId: string;
    products: Array<any>;
    status: string;

    constructor(total: number, userId: string, products: Array<any>, status: string){
        this.total = total;
        this.userId = userId;
        this.products = products;
        this.status = status;
    }
}
