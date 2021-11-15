export class Administrator {
    public firstName: string;
    public lastName: string;
    public username: string;
    public email: string;
    public password: string;
    public address: string;
    public city: string;
    public country: string;
    public zipcode: number;
    constructor(firstName: string, lastName: string, username: string, email: string, password: string, address: string, city: string, country: string, zipcode: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.address = address;
        this.city = city;
        this.country = country;
        this.zipcode = zipcode
    }

    public getEmail(){
        return this.email;
    }

    public getPassword(){
        return this.password;
    }
}