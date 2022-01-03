package com.tw.Customer;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Customer")
public class Customer {

    @Id
    @Column(name = "Id")
    public int id;

    @Column(name = "FIRSTNAME")
    public String firstName;

    @Column(name = "LASTNAME")
    public String lastName;

    @Column(name = "Username")
    public String username;

    @Column(name = "Email")
    public String email;

    @Column(name = "Password")
    public String password;

    @Column(name = "Address")
    public String address;

    @Column(name = "City")
    public String city;

    @Column(name = "Country")
    public String country;

    @Column(name = "Zipcode")
    public int zipcode;

    public Customer() {

    }

    public Customer(Customer customer){
        this.id = customer.id;
        this.firstName = customer.firstName;
        this.lastName = customer.lastName;
        this.username = customer.username;
        this.email = customer.email;
        this.password = customer.password;
        this.address = customer.address;
        this.city = customer.city;
        this.country = customer.country;
        this.zipcode = customer.zipcode;

    }

    public Customer(int id, String firstName, String lastName, String username, String email, String password, String address, String city, String country, int zipcode){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.address = address;
        this.city = city;
        this.country = country;
        this.zipcode = zipcode;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName(){return firstName;}
    public void setFirstName(String firstName){ this.firstName = firstName;}

    public String getLastName(){return lastName;}
    public void setLastName(String lastName){ this.lastName = lastName;}

    public String getUsername(){return username;}
    public void setUsername(String username){ this.username = username;}

    public String getEmail(){return email;}
    public void setEmail(String email){ this.email = email;}

    public String getPassword(){return password;}
    public void setPassword(String password){ this.password = password;}

    public String getAddress(){return address;}
    public void setAddress(String address){ this.address = address;}

    public String getCity(){return city;}
    public void setCity(String city){ this.city = city;}

    public String getCountry(){return country;}
    public void setCountry(String country){ this.country = country;}

    public int getZipcode(){return zipcode;}
    public void setZipcode(int zipcode){ this.zipcode = zipcode;}


    @Override
    public String toString() {
        return "Customer{" +
                "id=" + id +
                ", firstname='" + firstName + '\'' +
                ", lastname='" + lastName + '\'' +
                ", username=" + username + '\'' +
                ", email=" + email + '\'' +
                ", password=" + password + '\'' +
                ", address=" + address + '\'' +
                ", city=" + city + '\'' +
                ", country=" + country + '\'' +
                ", zipcode=" + zipcode + '\'' +

                '}';
    }

}
