export class Administrator {
    public firstName: String;
    public lastName: String;
    public address: String;
    public email: String;
    public password: String;
    constructor(firstName: string, lastName: string, address: string, email: string, password: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.email = email;
        this.password = password;
    }

    public getEmail(){
        return this.email;
    }

    public getPassword(){
        return this.password;
    }
}