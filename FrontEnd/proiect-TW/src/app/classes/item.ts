export class Item {
    public id: number;
    public name: string;
    public price:  number;
    public inStock: number;
    public manufacturer: string;
    constructor(id: number, name: string, price: number, inStock: number, manufacturer: string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.inStock = inStock;
        this.manufacturer = manufacturer;
    }
}
