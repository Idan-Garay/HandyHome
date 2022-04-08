export const orderDetailsSchema =
  "CREATE orderDetails (id int auto_increment PRIMARY KEY, deliveredBy int , deliveredTo int, delivery_date TIMESTAMP, status varchar(255), price float)";
// "CREATE orderDetails (id int auto_increment PRIMARY KEY, deliveredBy int FOREIGN KEY, deliveredTo int FOREIGN KEY, delivery_date TIMESTAMP, price float)";

export const reviewSchema =
  "CREATE table reviews (id int auto_increment PRIMARY KEY, review varchar(255), ratings varchar(255))";

export const userSchema =
  "CREATE table users (id int auto_increment PRIMARY KEY, userType int, username varchar(255), password varchar(255))";

export const profileSchema =
  "CREATE table profiles (id int auto_increment PRIMARY KEY, userId int FOREIGN KEY, name varchar(255), bio varchar(255), skills varchar(255), profileType varchar(255))";
