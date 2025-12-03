## <center>CEMACO</center>

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

* [**ENDPOINTS**](#endpoints)
    > Define the endpoints


<a id="technologies"></a> 

### **TECHNOLOGIES**

* **Vite**

    * This project was created with vite, with the command:

        ```
        npm create vite@latest
        
        
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

<br>


<a id="Run app"></a>
### Run app

* install the dependencies

    ```
    npm install

* run

    ```
    npm run dev
    

<br>

<a id="file-structure"></a>
### File structure

* All the code is inside the src folder
* inside we find the following folders
    * assets: for images
    * components: all reusable components
    * fetch: the requests as a function so that they can be reused
    * pages: with the components the pages were assembled
    * routes: contains the routing file
* and the files
    * App.css
    * App.jsx
    * index.js
    * main.jsx
* the styles were created with tailwind

<br>

<a id="endpoints"></a>
### **ENDPOINTS**

* For more information, please consult [product catolog postman collection](https://github.com/Orozco23/product-catalog-fullstack/blob/main/backend/product-catalog.postman_collection.json) and [readme](https://github.com/Orozco23/product-catalog-fullstack/blob/main/backend/README.md)