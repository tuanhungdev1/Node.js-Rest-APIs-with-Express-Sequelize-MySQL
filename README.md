# Node.js REST APIs Example with Express, Sequelize & MySQL

This project provides a simple example of creating RESTful APIs in a Node.js application using Express.js framework, Sequelize ORM, and MySQL database.

## Prerequisites

Before running the project, make sure you have the following installed:

- Node.js
- Express
- Sequelize
- MySQL database

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/tuanhungdev1/Node.js-Rest-APIs-with-Express-Sequelize-MySQL.git
```

2. Navigate into the project directory:

```bash
cd nodejs-express-sequelize-mysql
```

3. Install dependencies:

```bash
npm install
```

4. Set up your MySQL database and update the database configuration in `config/config.json` file.

5. Run database migrations to create necessary tables:

```bash
npx sequelize-cli db:migrate
```

## Usage

1. Start the server:

```bash
npm start
```

2. Open your preferred API testing tool such as Postman or use a web browser.

3. You can now make HTTP requests to the API endpoints to perform CRUD operations on the resources (e.g., users, posts, etc.) stored in the MySQL database.

4. For example, you can send GET requests to fetch all users (`GET /api/users`), create a new user (`POST /api/users`), update an existing user (`PUT /api/users/:id`), delete a user (`DELETE /api/users/:id`), etc.

## Credits

This project is inspired by various tutorials and documentation from the following sources:

- [Express.js](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [MySQL](https://www.mysql.com/)

Thank you!
