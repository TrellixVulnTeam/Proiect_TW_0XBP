drop table Item if exists;
drop table Administrator if exists;
drop table Customer if exists;

create table Item(
    ItemID int primary key not null,
    Type varchar(50),
    Name varchar(50),
    Price float not null,
    Stock int,
    Manufacturer varchar(50),
    Url varchar(50)
);

create table Customer(
    id int primary key not null,
    firstName varchar(50),
    lastName varchar(50),
    username varchar(50) unique,
    email varchar(50) unique,
    password varchar(50),
    address varchar(100),
    city varchar(100),
    country varchar(50),
    zipcode int
);

create table Administrator(
    id int primary key not null,
    firstName varchar(50),
    lastName varchar(50),
    username varchar(50) unique,
    email varchar(50) unique,
    password varchar(50),
    address varchar(100),
    city varchar(100),
    country varchar(50),
    zipcode int,
    mobile varchar(50),
    landline varchar(50)
);