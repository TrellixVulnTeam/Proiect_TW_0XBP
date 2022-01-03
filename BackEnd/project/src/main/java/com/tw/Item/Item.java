package com.tw.Item;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "Item")
public class Item {
    @Id
    @Column(name = "ItemID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;

    @Column(name = "Type")
    public String type;

    @Column(name = "Name")
    public String name;

    @Column(name = "Price")
    public float price;

    @Column(name = "Stock")
    public int stock;

    @Column(name = "Manufacturer")
    public String manufacturer;

    @Column(name = "Url")
    public String url;

    public Item() {

    }

    public Item(String type, String name, float price, int stock, String manufacturer, String url) {
        this.type = type;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.manufacturer = manufacturer;
        this.url = url;
    }

    public Item(Item item){
        this.id = item.id;
        this.type = item.type;
        this.name = item.name;
        this.price = item.price;
        this.stock = item.stock;
        this.manufacturer = item.manufacturer;
        this.url = item.url;
    }

    public Item(int id, String type, String name, float price, int stock, String manufacturer, String url){
        this.id = id;
        this.type = type;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.manufacturer = manufacturer;
        this.url = url;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @Override
    public String toString() {
        return "Item{" +
                "id=" + id +
                ", type='" + type + '\'' +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", stock=" + stock +
                ", manufacturer='" + manufacturer + '\'' +
                ", url='" + url + '\'' +
                '}';
    }
}
