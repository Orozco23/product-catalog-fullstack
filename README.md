## <center>Product Catalog</center>

It's an application similar to www.cemaco.com, where products are displayed to customers, while administrators and collaborators, in addition to displaying products, can create, delete, and update them.


--- 
### Summary
---

* [**TECHNOLOGIES**](#technologies) 
    > Defines the technologies used

* [**RUN APP**](#run-app)
    > Define how to run

* [**FILE STRUCTURE**](#file-structure)
    > Define the structure

* [**DATABASE**](#database) 
  > Defines the instructions for the database

* [**ENDPOINTS**](#endpoints)
    > Define the endpoints

---

<a id="technologies"></a> 

### **TECHNOLOGIES**

**FRONTEND**
* **Vite**

    * This project was created with vite, with the command:

        ```
        npm create vite@latest
        ```
        
        
<br>

* **tailwind:** to style components

* **react-router-dom:** to manage the routes

    ```jsx
        import { BrowserRouter, Routes, Route } from "react-router-dom";

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LogIn />}/>
                <Route path='/catalog' element={<Catalog />}/>
                <Route path='/product' element={<UpdateProduct />}/>
                <Route path='/create-product' element={<CreateProduct />}/>
            </Routes>
        </BrowserRouter>

**BACKEND**
* **Node.js**
* **Express**
* **Cors**
* **Nodemon**
* **Multer:** for upload images
* **MySQL2:** for connection with database
* **Bcrypt:** for encrypt password
<br>

---

<a id="run-app"></a>
### Run app
For both apps
* install the dependencies

    ```
    npm install
    
* run

    ```
    npm run dev
    

<br>

<a id="file-structure"></a>
### <center>FILE STRUCTURE</center>
* For more information, please consult [backend README](https://github.com/Orozco23/product-catalog-fullstack/blob/main/backend/README.md) and [fronted README](https://github.com/Orozco23/product-catalog-fullstack/blob/main/frontend/README.md)

<br>

---

<a id="database"></a>
### <center>DATABASE</center>

MySQL is running from docker

In windows it is necessary to make sure that WSL2 is active. 
Command to check that it is enabled:

   ```
   wsl --list --verbose
   ```

If it is not configured, you can enable WSL 2 with this command:
 
   ```
   wsl --set-default-version 2
   ```

Open a terminal in the folder where the docker-compose.yml file is located and execute the following commands:

   ```
   docker-compose build
   ```


   ```
   docker-compose up -d
   ```

The -d flag runs the container in the background

<br>

* Connection details:

    ```
        host: localhost
        port: 3306
        user: The one you defined in the docker-compose.yml (default “admin”).
        password: The one you defined in the docker-compose.yml (default “admin”).
        database: The name you defined in the docker-compose.yml ("catalog_db").
    ```

<br>

* Access to the container
If you need to access the container to execute MySQL commands, you can use:

   ```
   docker exec -it mysql_local MySQL -u root -p
   ```

<br>

* Stop container

   ```
   docker-compose down
   ```
   
---

<br>

<a id="endpoints"></a>
### <center>ENDPOINTS</center>

* For more information, please consult [product catolog postman collection](https://github.com/Orozco23/product-catalog-fullstack/blob/main/backend/product-catalog.postman_collection.json) and [backend README](https://github.com/Orozco23/product-catalog-fullstack/blob/main/backend/README.md)