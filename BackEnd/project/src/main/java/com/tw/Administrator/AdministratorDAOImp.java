package com.tw.Administrator;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AdministratorDAOImp implements AdministratorDAO {

    @Autowired
    private AdministratorRepository repository;

    public List<Administrator> administrators = new ArrayList<Administrator>();

    public List<Administrator> getAllAdministrator() {
        administrators = new ArrayList<Administrator>();
        repository.findAll().forEach(administrator -> administrators.add(new Administrator(administrator)));
        return administrators;
    }

    @Override
    public Administrator getAdministrator(int id) {
        for(Administrator i: administrators)
            if(i.getId() == id)
                return i;
        return null;
    }

    @Override
    public void deleteAdministrator(int id) {
        Administrator i = this.getAdministrator(id);
        administrators.remove(i);
        repository.delete(i);
    }

    @Override
    public void addAdministrator(Administrator administrator) {
        administrators.add(administrator);
        repository.save(administrator);
    }

    public void updateAdministrator(int id, Administrator administrator) {
        Administrator i = this.getAdministrator(id);
        i.setId(administrator.id);
        i.setFirstName(administrator.firstName);
        i.setLastName(administrator.lastName);
        i.setUsername(administrator.username);
        i.setEmail(administrator.email);
        i.setPassword(administrator.password);
        i.setAddress(administrator.address);
        i.setCity(administrator.city);
        i.setCountry(administrator.country);
        i.setZipcode(administrator.zipcode);
        i.setMobile(administrator.mobile);
        i.setLandline(administrator.landline);
        repository.save(i);
    }
}
