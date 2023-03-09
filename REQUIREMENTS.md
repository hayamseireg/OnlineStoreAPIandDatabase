# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index `/products` [GET]
- Create `/products/create` [POST] [authorisation by token]
- Show `/products/:id` [GET]
- Update `/products/:id` [PUT] [authorisation by token]
- Delete `/products/:id` [DELETE] [authorisation by token]

#### Users
- Index `/users` [GET] [authorisation by token]
- Create `/users/create` [POST] 
-- body example {"firstname":"hayam","lastname":"seireg","username":"hayamSeireg","password":"mypass"}
- Show `/users/:id` [GET] [authorisation by token]
- Update `/users/:id` [PUT] [authorisation by token]
- Delete `/users/:id` [DELETE] [authorisation by token]
- Auth `/users/auth` [POST]

#### Orders
- Index `/orders` [GET] [authorisation by token]
- Create `/orders/create` [POST] [authorisation by token]
- Show `/orders/:id` [GET] [authorisation by token]
- Current Order by user `/users/:id/order` [GET] [authorisation by token]
- Update `/orders/:id` [PUT] [authorisation by token]
- Delete `/orders/:id` [DELETE] [authorisation by token]

## Data Shapes
#### Product
Table: *products*
- id `SERIAL PRIMARY KEY`
- name `VARCHAR (250) NOT NULL`
- price `INTEGER`

#### User
Table: *users*
- id `SERIAL PRIMARY KEY`
- username `VARCHAR(250) NOT NULL`
- firstname `VARCHAR(250) NOT NULL`
- lastname `VARCHAR(250) NOT NULL`
- password `VARCHAR(250) NOT NULL`

#### Orders
Table: *orders*
- id `SERIAL PRIMARY KEY`
- user_id `INTEGER` `REFERENCES users(id)`
- status `BOOLEAN`

Table: *order_products*
- order_id `INTEGER` `REFERENCES orders(id)` 
- product_id `INTEGER` `REFERENCES products(id)`
- quantity `INTEGER`
