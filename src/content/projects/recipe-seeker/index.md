---
id: 3
title: "Recipe DB"
image: "https://utfs.io/f/2605b1e4-6be0-4225-b39b-d86792c26b9f-1tchmp.webp"
summary: "A web app where users can search for recipes. And a Rest API to get the recipes."
description: "A web application that allows users to search, view, and save their favorite recipes. Features include a comprehensive search functionality, recipe details view, and user authentication. Built with Next.js for the frontend, Express.js for the backend API, MongoDB for database, Tailwind CSS for styling, and Stripe for payment processing."
tags: ['Next.js', 'Express.js', 'MongoDB', 'Tailwind CSS',  'React']
date: "2023-08-01"
startdate: "2023-08-01"
enddate: "2024-05-31"
demourl: "https://therecipedb.vercel.app/"
repourl: "https://github.com/Swastikdan/Racipe-Seeker-App"
---


# Recipe DB
![Recepie DB Image](https://utfs.io/f/498a7568-49ce-495a-ba02-d1146e406f4a-18vb3x.vercel.app.png)
## Overview

Recipe DB is a web application designed for users to search for recipes. Users can search by recipe name or ingredients and filter results based on dietary restrictions (optional). Additionally, the application offers sorting functionality to enhance user experience.

## Features

The frontend of Recipe DB is built with Next.js, providing a seamless and efficient user interface. It allows users to:

- Search for recipes by name or ingredients.
- Filter search results based on dietary restrictions.
- Sort recipes according to various criteria.


# Recipe API

Welcome to the Recipe API! This API allows you to perform various operations related to recipes, including fetching random recipes, searching for recipes by name, searching for recipes by ingredients, and getting a recipe by its ID.

## Table of Contents
- [Recipe API](#recipe-api)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Endpoints](#endpoints)
    - [/api/recipes/](#apirecipes)
    - [/api/recipes/search](#apirecipessearch)
    - [/api/recipes/search/:id](#apirecipessearchid)

## Getting Started

To get started with the Recipe API, you need to have Node.js and MongoDB installed on your system. You also need to set up a MongoDB database and configure the connection string in the `.env` file. Here's how you can run the API:

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/recipe-api.git
   ```

2. Install dependencies:

   ```bash
   cd recipe-api
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

The server will start running on port 3000 by default. You can access the API at `http://localhost:3000/api/recipes/`.

## Endpoints

### /api/recipes/

- **Method:** `GET`
- **Description:** Fetches random recipes.
- **Query Parameters:**
  - `n`: (Optional) Number of recipes to fetch. Default is 1. Maximum is 50.

Example:
```
GET /api/recipes/?n=5
```

### /api/recipes/search

- **Method:** `GET`
- **Description:** Searches for recipes by name or ingredients.
- **Query Parameters:**
  - `q`: (Optional) Query string to search for recipes.
  - `n`: (Optional) Name of the recipe to search for.
  - `i`: (Optional) Ingredients to search for, separated by commas.

Example:
```
GET /api/recipes/search?q=pasta
GET /api/recipes/search?n=chicken%20curry
GET /api/recipes/search?i=chicken,rice,tomato
```

### /api/recipes/search/:id

- **Method:** `GET`
- **Description:** Gets a recipe by its ID.
- **Parameters:**
  - `id`: Recipe ID.

Example:
```
GET /api/recipes/search/65d5a6eb571ea759451675e6
```

---

This API is powered by Express.js and MongoDB. If you encounter any issues or have any feedback, feel free to open an issue on GitHub. Happy cooking! 🍳🥘


