package com.tw.Customer;

import java.util.List;

public interface CustomerDAO {
    List<Customer> getAllCustomer();
    Customer getCustomer(int id);
    void deleteCustomer(int id);
    void addCustomer(Customer customer);
    void updateCustomer(int id, Customer customer);


}
