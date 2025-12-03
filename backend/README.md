## <center>Product Catalog</center>

  * **Host**: http://localhost:300
--- 
### Summary
---

* [**MODEL**](#model) 
  > Defines model fields

* [**FILE STRUCTURE**](#file-structure)
    > Define the structure

* [**LOGIN**](#login) 
    * Returns an authentication

* [**CREATE Product**](#create-product) 
    * Create Product

* [**GET PRODUCT BY ID**](#get-by-id) 
    * Obtain a unique product
* [**GET LIST**](#get-list) 
    * Returns list of products with pagination and sorting.

* [**UPDATE**](#update) 
    * Update fields of the product

* [**DELETE**](#delete)
    * Soft-delete Product 

---

## <center> Models </center>
<a id="model"></a>

 ```sql
    USE catalog_db;
    CREATE TABLE products(
        sku INT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        description VARCHAR(350) NOT NULL,
        price DECIMAL(10,2) NOT NULL,
        inventory INT NOT NULL,
        image VARCHAR(250) NOT NULL,
        created_at TIMESTAMP DEFAULT now(),
        updated_at TIMESTAMP DEFAULT now(),
        deleted_at TIMESTAMP DEFAULT NULL   -- Soft delete
    );

    CREATE TABLE users(
        id INT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50),
        email VARCHAR(100) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        type INT NOT NULL
    );
```
<a id="file-structure"></a>
### File structure

* All the code is inside the src folder
* inside we find the following folders
    * config: for database connection
    * controllers: for separate controller of routes
    * routes: for define routes
    * uploads: for storage images upload since endpoint
* and the files
    * index.js

* moreover database information
    * database: information about sql and docker compose
---
## <center> Endpoints </center>
<a id="login"></a>

### **LOGIN**
  * **Method:** POST
  * **Route:** {host}/auth/login
  * **Body:**

    ```json
        {
            "email": {str}
            "password": {str}
        }
        
 * **Response**:
      * **HTTP STATUS**: 200
      * **Body**:

    ```json
        {
            "success": true,
            "message": "Login successful",
            "user": {
                "id": {int},
                "first_name": {str},
                "last_name": {str},
                "email": {str},
                "type": {int}
            }
        }

  * **Errors**:
    * **HHTP STATUS**: 400
    * **HHTP STATUS**: 500
    ```json
    {
        "error": "message"
    }
<br>
<br>
<br>

<a id="create-product"></a>

### **CREATE PRODUCT**
  * **Method:** POST
  * **Note**
    * > Create product
  * **route:** {host}/products
<br>
<br>
<br>

<a id="get-by-id"></a>

### **GET PRODUCT BY ID**
  * **Method:** GET
  * **Note**
    * > Returns product by id
  * **Route:** {host}/products/{sku}
<br>
<br>
<br>

<a id="get-list"></a>

### **GET PRODUCTS**
  * **Method:** GET
  * **Note**
    * > Returns list of products for administrator and colaborator with pagination and sorting.
  * **Route:** {base_url}products?page={page}&limit={limit}&sort={sort}
  
    * > Returns list of products for clients with pagination and sorting.
  * **Route:** {base_url}products/clients?page={page}&limit={limit}&sort={sort}
<br>
<br>
<br>

<a id="update"></a>

### **UPDATE**
  * **Method:** PUT
  * **Note**
    * > Update the product
  * **Route:** {host}/products/{sku}
<br>
<br>
<br>

<a id="delete"></a>

### **DELETE**
  * **Method:** DELETE
  * **Note**
    * > Soft-delete product
  * **Ruta:** {host}/products/{sku}
<br>
<br>
<br>