package com.tw.Item;

import java.util.List;

public interface ItemDAO {
    List<Item> getAllItems();
    Item getItem(int id);
    void deleteItem(int id);
    void addItem(Item item);
    void updateItem(int id, Item item);
}
