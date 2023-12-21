# Recipe Management API

## Frontend deploy to test the API
https://recipes-alex.netlify.app/

## Overview
The Recipe Management API is designed to provide users with an interface to manage their recipes. Users can perform basic CRUD operations (Create, Read, Update, Delete) on recipes, view the total list of ingredients for all recipes, search for specific recipes using a search function, and favorite recipes for easy access. The API also includes an authentication section for user login and registration.

## Improvements compared to the last version

1. Ingredients are required to create a recipe.
2. Your recipes would be ordered alphabetically.
3. Improvements about middlewares impementations.
4. You can't repeat the same recipe.

## Features
1. **Recipe Management**: Users can create new recipes, edit existing recipes, and delete recipes. Each recipe consists of a title, description, ingredients, and instructions. Users can easily organize and update their collection of recipes.

2. **Ingredients List**: The system provides a consolidated view of all ingredients used in the user's recipes. This allows users to easily check ingredient availability and plan their shopping list accordingly.

3. **Recipe Search**: Users can quickly find specific recipes using the search functionality. The search feature allows users to search by recipe title, ingredients, or any related keywords. This saves time and effort in locating desired recipes.

4. **Favorites**: Users can mark recipes as favorites for quick access. The favorites feature enables users to easily filter and view their preferred recipes, making it convenient to find frequently used recipes.

5. **Authentication**: The system includes a secure authentication mechanism for user registration and login. This ensures that only authorized users can access and manage their recipes.

## Installation
To set up the Recipe Management API on your local machine, follow these steps:

1. Clone the repository from GitHub: `git clone <repository url>`
2. Install the required dependencies: `npm install`
3. Setup the environment variables: PORT - SECRETORPRIVATEKEY - MONGODB_CNN
   (PORT is to establish the default port to connect to, for example `localhost:8080`, SECRETORPRIVATEKEY is to provide a specific
   key signature to your own tokens for authentication, and at last, MONGODB_CNN is used to connect the API to your Mongo database,
   notice that it's implemented Mongoose for this purpose).
4. Start the application: `npm start`

## Developer

## Alex Martin

GitHub: https://github.com/AlexEMartin
LinkedIn: https://www.linkedin.com/in/alexeumartin/
