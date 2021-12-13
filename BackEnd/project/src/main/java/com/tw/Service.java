package com.tw;

import com.tw.Administrator.Administrator;
import com.tw.Administrator.AdministratorDAO;
import com.tw.Item.Item;
import com.tw.Item.ItemDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

//adresa: localhost:8080/ui
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class Service implements Controller {
    @Autowired
    private ItemDAO itemDao;

    @Autowired
    private AdministratorDAO administratorDao;

    @GetMapping("/item")
    public List<Item> getItems() {
        List<Item> items = itemDao.getAllItems();
        return items;
    }

    @DeleteMapping("/item/{id}")
    public String deleteItem(@PathVariable("id") int id) {
        Optional<Item> itemOpt = Optional.ofNullable(itemDao.getItem(id));
        Item item = itemOpt.orElseThrow(ResourceNotFoundException.RESOURCE_NOT_FOUND_SUPPLIER);
        itemDao.deleteItem(id);
        return "The class was deleted";
    }

    @PostMapping("/item")
    @ResponseStatus(HttpStatus.CREATED)
    public Item addClass(@RequestBody Item item) {
        itemDao.addItem(item);
        return item;
    }

    @PutMapping("/item/{id}")
    public Item updateItem(@PathVariable("id") int id, @RequestBody Item item) {
        Optional<Item> itemOpt = Optional.ofNullable(itemDao.getItem(id));
        Item lecture = itemOpt.orElseThrow(ResourceNotFoundException.RESOURCE_NOT_FOUND_SUPPLIER);
        itemDao.updateItem(id, item);
        return item;
    }

    @GetMapping("/administrator")
    public List<Administrator> getAdministrator() {
        List<Administrator> administrators = administratorDao.getAllAdministrator();
        return administrators;
    }

    @DeleteMapping("/administrator/{id}")
    public String deleteAdministrator(@PathVariable("id") int id) {
        Optional<Administrator> administratorOpt = Optional.ofNullable(administratorDao.getAdministrator(id));
        Administrator administrator = administratorOpt.orElseThrow(ResourceNotFoundException.RESOURCE_NOT_FOUND_SUPPLIER);
        administratorDao.deleteAdministrator(id);
        return "The class was deleted";
    }

    @PostMapping("/administrator")
    @ResponseStatus(HttpStatus.CREATED)
    public Administrator addClass(@RequestBody Administrator administrator) {
        administratorDao.addAdministrator(administrator);
        return administrator;
    }

    @PutMapping("/administrator/{id}")
    public Administrator updateAdministrator(@PathVariable("id") int id, @RequestBody Administrator administrator) {
        Optional<Administrator> administratorOpt = Optional.ofNullable(administratorDao.getAdministrator(id));
        Administrator lecture = administratorOpt.orElseThrow(ResourceNotFoundException.RESOURCE_NOT_FOUND_SUPPLIER);
        administratorDao.updateAdministrator(id, administrator);
        return administrator;
    }

}
