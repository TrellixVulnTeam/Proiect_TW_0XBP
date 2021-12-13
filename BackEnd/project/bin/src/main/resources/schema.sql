drop table Item if exists;

create table Item(
    ItemID int primary key not null,
    Type varchar(50),
    Name varchar(50),
    Price float not null,
    Stock int,
    Manufacturer varchar(50),
    Url varchar(50)
);
