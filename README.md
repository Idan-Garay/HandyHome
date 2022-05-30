# HandyHOme
A web application for profile marketplace. A marketplace for Employers and handyman where a handyman can post a profile and their companions' for the employer to know. 

# Steps in using the application
1. Start the server 
2. Database seeding
3. Run the client


## Start the server 
~ Initialize the database tables (server directory)
- cd ./server
- npm run start

## Database Seeding
~ server directory
- npx sequelize db:seed --seed 20220522034001-profile.js
- npx sequelize db:seed --seed 20220522044051-secondaryProfiles.js
- npx sequelize db:seed --seed 20220523015516-demo.js

## Run the client
(Open new terminal)
1. cd ./client
- npm run dev


### Demo Users: (Alternative to accessing db just to login)
#### Admin
email: "Admin123@gmail.com", 
password: "Admin123",

#### Employer
email: "Employer123@gmail.com",
password: "Employer123",

#### Handyman
email: "Handyman123@gmail.com", 
password: "Handyman123",
