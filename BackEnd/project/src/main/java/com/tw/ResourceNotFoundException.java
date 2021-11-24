package com.tw;

import java.util.function.Supplier;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {

    private static final long serialVersionUID = -2043560058450034871L;

    public static final Supplier<ResourceNotFoundException> RESOURCE_NOT_FOUND_SUPPLIER = () -> new ResourceNotFoundException();

}