# Getting Started with Create React App

A React Js e-commerce website. It includes two pages, the homepage to display the list of products and page 2 to display the details of the selected product.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# website Image Page 1
![website page 1](https://user-images.githubusercontent.com/96107593/179496377-4a0c46a6-b1f2-4118-9e7e-3b7022f6878a.png)
# website Image Page 2
![website page-2](https://user-images.githubusercontent.com/96107593/179497547-60723a1f-9918-419a-893b-5a32c28e12f9.png)
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Frameworks and Libraries
1.  React
2.  Bootsrap
3.  Font-Awesome

#  Tech Stack
1. HTML
2. CSS
3. JavaScript

# API's
> Get all products
 ```
 
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
  ```        
          
> Get Single Product
  ```
        fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
