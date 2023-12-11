## Features
### User Authentication and Registration
Users can log in or register to access personalized features. If user choose not log in, use can still view the details of products, but will need to log in when add to shop cart or else features.
Admin authentication can be added in MongoDB, this role can edit and delete all info needed in website including deatils of products for example prices and etc.
### Product Viewing
Users, whether logged in or not, can view product details without any restrictions.
### User Roles
The system supports different user roles, including regular users and administrators. They will have their own profile page and could be checked by others.
### Admin Privileges
* Admins have the ability to edit all website information.
* Admins can modify product details, such as prices and images.
* Admins have access to additional features and capabilities.
### User Reviews and Ratings
Besides add products to shop cart and order, our platform allows users to share their experiences by providing reviews and ratings for products.
## Getting Started
Install dependencies
```
npm install
```
To begin development, execute one of the following commands to run the server in your terminal:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
The development server will be accessible at http://localhost:3000.

## Database Schema
Our project utilizes MongoDB as the database, and it includes the following tables:
* Users Table: This table stores user information, including details like username, email, user roles and etc.
* Address Table: This data will be updated if someone ordered in our website.
* Orders Table: This data will be updated if someone ordered in our website.
* Products Table: This table contains information about the products available on the platform.


## API Routes
Explore API functionality at http://localhost:3000/api/hello. The corresponding endpoint can be modified in pages/api/hello.js. The pages/api directory is designated for API routes and differs from regular React pages.

## Font Optimization
This project efficiently manages fonts using next/font, ensuring automatic optimization and loading of the Inter font—a custom Google Font.


## Learn More

Enhance your understanding of Next.js through various resources:
Next.js Documentation provides insights into features and the API.
Learn Next.js offers an interactive tutorial for practical learning.
Contribute and provide feedback on the Next.js GitHub repository. Your contributions are valued!
