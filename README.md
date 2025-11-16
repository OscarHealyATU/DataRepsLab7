<<<<<<< HEAD
# Lab 6: React and Node/Express Data Representation and Querying

The following exercises focus on using **Node/Express** and **React** to represent and query data.

---

## Steps

### 1. Create a Git Repository

First, create a folder for your project and initialize it as a Git repository:

```bash
git init
```

---

### 2. Stage and Commit Files

Stage all files and create your first commit:

```bash
git add .
git commit -m "Initial commit"
```

---

### 3. Rename the Default Branch

Rename the default branch to `main`:

```bash
git branch -M main
```

---

### 4. Push to GitHub

Link the repository to a remote GitHub repository:

```bash
git remote add origin <your-github-repo-url>
git push -u origin main
```

---

### 5. Commit Regularly

After each exercise, make sure to commit your changes to track progress.

---

## 2. Clone and Setup a React Application

* In the last React lab, we built a React application that used components to create and read **movie** data.
* The final solution can be found here:
  [GitHub Repository](https://github.com/Data-Rep-MERN-Application/lab_four)

If you did not finish it last week, clone it:

```bash
git clone https://github.com/Data-Rep-MERN-Application/lab_four
```

Then install dependencies:

```bash
npm install
```

---

## 3. Create a Backend with Express

* Create a new folder in your React app called **BackEnd** and add a file named `server.js` inside it.
* Develop a server using the **Express** framework that returns the following JSON when a GET request is made to `/api/movies`:

```json
{
  "movies": [
    {
      "Title": "Avengers: Infinity War (server)",
      "Year": "2018",
      "imdbID": "tt4154756",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
      "Title": "Captain America: Civil War (server)",
      "Year": "2016",
      "imdbID": "tt3498820",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    },
    {
      "Title": "World War Z (server)",
      "Year": "2013",
      "imdbID": "tt0816711",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    }
  ]
}
```

Ensure that the server runs on **localhost:4000**.

---

## 4. Connect the React App to Read Data from the Node/Express Server

Modify the React app to fetch JSON data from the Node/Express server.

### What is CORS?

**CORS (Cross-Origin Resource Sharing)** is a security feature that prevents a web page from requesting data from a different domain or port unless the server explicitly allows it.

Without CORS, your frontend (React at `localhost:3000`) cannot communicate with your backend (Node/Express at `localhost:4000`).

---

### Installing and Using CORS Middleware in Node.js

1. **Install CORS package:**

   ```bash
   npm install cors
   ```

2. **Use CORS in the server:**

   Add this code in your `server.js` file:

   ```javascript
   import cors from 'cors';
   app.use(cors());

   app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
   });
   ```

This middleware setup allows your frontend app (React) to make API requests to the backend (Express) without CORS issues.

---

## 5. Add POST Request to the React App

Modify the React app to send a **POST** request to the server with a new movie object.

1. **Install `body-parser`:**

   ```bash
   npm install body-parser
   ```

2. **Update `server.js`:**

   ```javascript
   import bodyParser from 'body-parser';
   app.use(bodyParser.urlencoded({ extended: true }));
   app.use(bodyParser.json());
   ```

3. **Modify `Create.js`:**

   ```javascript
   const handleSubmit = (e) => {
     e.preventDefault();
     
     console.log(`Title: ${title}, Year: ${year}, Poster: ${poster}`);
     
     const movie = {
       title: title,
       year: year,
       poster: poster
     };
     
     axios.post('http://localhost:3000/api/movies', movie)
       .then((res) => console.log(res.data))
       .catch((err) => console.log(err.data));
   };
   ```

---

## Lab Summary: What You Have Learned

By completing this lab, you have learned:

1. **Cross-Origin Resource Sharing (CORS)**

   * What it is, why it’s important, and how to enable it in Express.

2. **Making HTTP Requests from React**

   * Using Axios to send GET requests and display dynamic data.

3. **Handling POST Requests**

   * Creating forms in React and handling POST data in Express.

Together, these steps show how to build a full-stack application where the frontend (React) communicates with a backend (Node/Express) for dynamic, data-driv

=======
# DataRepsLab7
Lab 7 MongoDB within a Mern stack 
>>>>>>> f4b6afac6ed76ee19a1b2c894b63e6ac8f146f5e
