package com.tw.Customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerDAOImp implements CustomerDAO{

    @Autowired
    private CustomerRepository repository;

    public List<Customer> customers = new ArrayList<Customer>();



    @Override
    public List<Customer> getAllCustomer() {
        customers = new ArrayList<Customer>();
        repository.findAll().forEach(customer -> customers.add(new Customer(customer)));
        return customers;
    }

    @Override
    public Customer getCustomer(int id) {
        for(Customer i: customers)
            if(i.getId() == id)
                return i;
        return null;
    }

    @Override
    public void deleteCustomer(int id) {
        Customer i = this.getCustomer(id);
        customers.remove(i);
        repository.delete(i);
    }

    @Override
    public void addCustomer(Customer customer) {
        customers.add(customer);
        repository.save(customer);
    }

    @Override
    public void updateCustomer(int id, Customer customer) {
        Customer i = this.getCustomer(id);
        i.setId(customer.id);
        i.setFirstName(customer.firstName);
        i.setLastName(customer.lastName);
        i.setUsername(customer.username);
        i.setEmail(customer.email);
        i.setPassword(customer.password);
        i.setAddress(customer.address);
        i.setCity(customer.city);
        i.setCountry(customer.country);
        i.setZipcode(customer.zipcode);

        repository.save(i);
    }

}
