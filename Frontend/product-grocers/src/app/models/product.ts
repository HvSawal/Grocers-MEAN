export class Products {
    desc: string;
    _id: number;
    imageUrl: string;
    name: string;
    price: number;
    quantity: number;
    
    constructor(id:number, name:string, desc:string = "", price:number = 0, imageUrl:string = "https://semantic-ui.com/images/wireframe/image.png", quantity:number=0) {
        this._id = id;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.imageUrl = imageUrl;
        this.quantity = quantity;
    }
}
