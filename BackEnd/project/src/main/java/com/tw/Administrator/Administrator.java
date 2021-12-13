package com.tw.Administrator;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Administrator")
public class Administrator {

    @Id
    @Column(name = "Id")
    public int id;

    @Column(name = "FirstName")
    public String firstName;

    @Column(name = "LastName")
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

    @Column(name = "Mobile")
    public String mobile;

    @Column(name = "MobileFix")
    public String fix;

    @Column(name = "landline")
    public String landline;

    public Administrator() {

    }

    public Administrator(Administrator administrator){
        this.id = administrator.id;
        this.firstName = administrator.firstName;
        this.lastName = administrator.lastName;
        this.username = administrator.username;
        this.email = administrator.email;
        this.password = administrator.password;
        this.address = administrator.address;
        this.city = administrator.city;
        this.country = administrator.country;
        this.zipcode = administrator.zipcode;
        this.mobile = administrator.mobile;
        this.fix=administrator.fix;
        this.landline = administrator.landline;
    }

    public Administrator(int id, String firstName, String lastName, String username, String email, String password, String address, String city, String country, int zipcode, String mobile,String fix, String landline){
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
        this.mobile = mobile;
        this.fix=fix;
        this.landline = landline;
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

    public String getMobile(){return mobile;}
    public void setMobile(String mobile){ this.mobile = mobile;}

    public String getFix(){return fix;}
    public void setFix(String fix){ this.fix = fix;}

    public String getLandline(){return landline;}
    public void setLandline(String landline){ this.landline = landline;}

    @Override
    public String toString() {
        return "Administrator{" +
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
                ", mobile='" + mobile + '\'' +
                ", fix='" + fix + '\'' +
                ", landline='" + landline + '\'' +
                '}';
    }

}
