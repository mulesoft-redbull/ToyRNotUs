create database toys;

show databases;

use toys;
create table Products (ToyID int, ToyName varchar(255), Gender varchar(10), Age varchar(30), Price decimal(6,2), Availability varchar(30), Brand varchar(100));

show tables;

select * from Products;

insert into Products (ToyID, ToyName, Gender, Age, Price, Availability, Brand) 
values  (2, '43 Piece dinner Set', 'Female', '3_to_5', 12.95, 'InStock', 'CoolKidz'),
			(1, 'Balance Training Bicycle', 'Neutral', '3_to_5', 119.95, 'InStock', 'SportsFun'),
			(7, 'Best Friends Forever Magnetic Dress Up', 'Female', '3_to_5', 24.95, 'InStock', 'CoolKidz'),
			(8, 'City Gargage Truck Lego', 'Neutral', '3_to_5', 19.95, '', 'Lego'),
			(20, 'Creator Beach House Lego', 'Neutral', '6_to_8', 39.95, '', 'Lego'),
			(23, 'Dancing Alligator', 'Neutral', 'Baby', 19.95, 'InStock', 'CoolKidz'),
			(11, 'March DVD Game', 'Neutral', 'Over8', 34.99, 'InStock', 'VideoVroom'),
			(30, 'Fisher-Price stroller', 'Female', 'Toddler', 25.99, 'InStock', 'CoolKidz'),
			(19, 'Gourmet Cupcake Maker', 'Female', '6_to_8', 39.95, 'InStock', 'CoolKidz'),
			(4, 'Hoppity Ball 26 inch', 'Neutral', '3_to_5', 29.95, 'InStock', 'SportsFun'),
			(3, 'Horses and Unicorns Set', 'Neutral', '3_to_5', 24.95, 'InStock', 'CoolKidz'),
			(21, 'Jacques the Peacock Play and Grow', 'Neutral', 'Toddler', 12.95, 'InStock', 'CoolKidz'),
			(9, 'Kettrike Tricycle', 'Neutral', '3_to_5', 249.95, '', 'CoolKidz'),
			(26, 'Les Dollie Toffee Apple', 'Female', 'Toddler', 24.95, 'InStock', 'CoolKidz'),
			(24, 'Mashaka the Monkey', 'Neutral', 'Baby', 36.95, 'InStock', 'BarnyardBlast'),
			(28, 'Melody Express Musical Train', 'Male', 'Toddler', 42.95, 'InStock', 'Models'),
			(31, 'Mortimer the Moose Play and Grow', 'Neutral', 'Toddler', 12.95, 'InStock', 'CoolKidz'),
			(29, 'My First LEGO DUPLO Set', '', 'Toddler', 19.95, '', 'Lego'),
			(22, 'Nutbrown Hare', 'Neutral', 'Baby', 12.99, 'SoldOut', 'CoolKidz'),
			(14, 'OMG-Gossip Girl Board Game', 'Female', 'Over8', 24.95, 'InStock', 'GeeKToys'),
			(6, 'Princess Palace', 'Female', '3_to_5', 24.95, 'InStock', 'CoolKidz'),
			(10, 'Princess Training Bicycle', 'Female', '3_to_5', 119.95, '', 'SportsFun'),
			(15, 'Sailboat', 'Male', 'Over8', 24.95, 'InStock', 'CoolKidz'),
			(27, 'Sand Play Set', 'Neutral', 'Toddler', 24.95, 'InStock', 'Modelz'),
			(16, 'Scrabble', 'Neutral', 'Over8', 19.95, 'InStock', 'GeeKToys'),
			(13, 'Settlers of Catan Board Game', 'Neutral', 'Over8', 44.95, 'InStock', 'GeeKToys'),
			(25, 'Sleep Sheep', 'Neutral', 'Baby', 39.00, 'InStock', 'BarnyardBlast'),
			(5, 'Sleeping Queens Board Game', 'Female', '3_to_5', 12.95, '', 'CoolKidz'),
			(18, 'Snoopy Sno-Cone Machine', 'Neutral', '6_to_8', 24.95, 'InStock', 'Models'),
			(17, 'Star Wars Darth Vader Lego', 'Male', '6_to_8', 39.95, 'InStock', 'GeeKToys'),
			(12, 'Twilight Board Game', 'Neutral', 'Over8', 24.95, 'InStock', 'GeeKToys');
            
            SET SQL_SAFE_UPDATES = 0;

UPDATE Products SET Availability='0' where Availability='';

UPDATE Products SET Availability='100' where Availability='InStock';

UPDATE Products SET Availability='0' where Availability='SoldOut';

ALTER TABLE Products MODIFY Availability INTEGER;

desc Products;



