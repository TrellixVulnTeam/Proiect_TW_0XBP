package com.tw.Administrator;

import com.tw.Administrator.Administrator;

import java.util.List;

public interface AdministratorDAO {
    List<Administrator> getAllAdministrator();
    Administrator getAdministrator(int id);
    void deleteAdministrator(int id);
    void addAdministrator(Administrator administrator);
    void updateAdministrator(int id, Administrator administrator);
}
