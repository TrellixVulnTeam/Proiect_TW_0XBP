package com.tw.Item;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ItemDAOImp implements ItemDAO{
    @Autowired
    private ItemRepository repository;

    public List<Item> items = new ArrayList<Item>();

    public List<Item> getAllItems() {
        items = new ArrayList<Item>();
        repository.findAll().forEach(item -> items.add(new Item(item)));
        return items;
    }

    public Item getItem(int id) {
        for(Item i: items)
            if(i.getId() == id)
                return i;
        return null;
    }

    public void deleteItem(int id) {
        Item i = this.getItem(id);
        items.remove(i);
        repository.delete(i);
    }

    public void addItem(Item item) {
        items.add(item);
        repository.save(item);
    }

    public void updateItem(int id, Item item){
        Item i = this.getItem(id);
        i.setId(item.id);
        i.setType(item.type);
        i.setName(item.name);
        i.setPrice(item.price);
        i.setStock(item.stock);
        i.setManufacturer(item.manufacturer);
        i.setUrl(item.url);
        repository.save(i);
    }
}
