package com.tw.project;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

//adresa: localhost:8080/ui
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class Service implements Controller{
}
