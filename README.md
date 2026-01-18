
---

```markdown
# Auction App

## Description
This project is a simple web application for managing **auction lots**.  
It allows users to **create, view, update, and delete lots** via a REST API.  
All data is stored in **MongoDB**, and the frontend displays the lots in a clean, interactive interface.

---

## Features

1. **Lot Management (Server-side)**  
   - Title of the lot  
   - Starting bid (number)  
   - Description  
   - Automatic timestamps (`createdAt` and `updatedAt`)  

2. **Frontend Interaction**  
   - Add new lots using a form  
   - View all lots in a list  
   - Data updates automatically after adding a new lot  

3. **API Endpoints**  
   - `GET /lots` — Get all lots  
   - `GET /lots/:id` — Get a specific lot  
   - `POST /lots` — Create a new lot  
   - `PUT /lots/:id` — Update a lot  
   - `DELETE /lots/:id` — Delete a lot  

---

## Project Structure

```

backend_3ass/
├── models/
│   └── Lot.js          # Lot model
├── routes/
│   └── lots.js         # CRUD routes
├── public/
│   └── index.html      # Frontend interface
├── server.js           # Express server
├── package.json
└── README.md

````

---

## Setup Instructions

1. Clone the repository or copy the files:

```bash
git clone <repository_url>
cd backend_3ass
````

2. Install dependencies:

```bash
npm install
```

3. Make sure **MongoDB is installed** locally.
   Start MongoDB server:

```bash
"C:\Program Files\MongoDB\Server\6.0\bin\mongod.exe"
```

4. Start the Node.js server:

```bash
npm start
```

5. Open the application in your browser:

```
http://localhost:3000
```

---

## Frontend Usage

1. Enter lot details in the form:

* **Lot title** — Title of the auction lot
* **Start bid** — Initial bid (number)
* **Description** — Description of the lot

2. Click **Add** to create a new lot.
3. The lot appears in the list and is saved in MongoDB automatically.

---

## API Usage (Postman / curl)

* **GET /lots** — retrieve all lots
* **GET /lots/:id** — retrieve a specific lot
* **POST /lots** — create a new lot

  ```json
  {
    "title": "Lot 1",
    "startBid": 100,
    "description": "Some description"
  }
  ```
* **PUT /lots/:id** — update a lot
* **DELETE /lots/:id** — delete a lot

---

## Checking Data in MongoDB

1. Open mongo shell:

```bash
"C:\Program Files\MongoDB\Server\6.0\bin\mongo.exe"
```

2. Switch to the database:

```js
use auctionDB
```

3. View saved lots:

```js
db.lots.find().pretty()
```

---

## Design Decisions

* **Server-side API**: All CRUD operations are handled in Express
* **Timestamps**: Automatically tracks creation and update times
* **Frontend**: Simple interactive interface with live updates
* **Validation**: Ensures all required fields are provided

---

## Example Frontend Output

**Lot Example:**

```
Lot 1 — 100$ — Some description
Lot 2 — 50$ — Another description
```

---

## Notes

* Node.js 18+ recommended
* Mongoose 7+
* All fields (title, startBid, description) are **required**
* `startBid` must be a number
