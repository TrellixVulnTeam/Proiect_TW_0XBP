export class Item {
    public id: number;
    public type: string;
    public name: string;
    public price:  number;
    public inStock: number;
    public manufacturer: string;
    public url: string;
    constructor(id: number, type: string, name: string, price: number, inStock: number, manufacturer: string, url: string){
        this.id = id;
        this.type = type;
        this.name = name;
        this.price = price;
        this.inStock = inStock;
        this.manufacturer = manufacturer;
        this.url = url;
    }
}
