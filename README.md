
```markdown
# Auction Backend (Assignment 3)

A simple auction project using Node.js and MongoDB.  
Allows creating, viewing, updating, and deleting lots via a REST API and a basic frontend.

---

## 📁 Project Structure

```

backend_3ass/
│
├─ models/
│   └─ Lot.js          # Lot model
│
├─ routes/
│   └─ lots.js         # CRUD routes for lots
│
├─ public/
│   └─ index.html      # Basic frontend
│
├─ server.js           # Express server
└─ package.json

````

---

## ⚙️ Installation

1. Clone the project or copy the files to a folder on your computer.

2. Open a terminal and navigate to the project folder:

```bash
cd C:\WEB2_nodejs\3ass
````

3. Install dependencies:

```bash
npm install
```

4. Make sure **MongoDB is installed** locally. If not, download it from [MongoDB Community](https://www.mongodb.com/try/download/community) and install.

---

## 🟢 Start MongoDB

1. Open a new PowerShell or CMD window.
2. Run the MongoDB server:

```bash
"C:\Program Files\MongoDB\Server\6.0\bin\mongod.exe"
```

> The path may differ depending on your version and installation folder.
> The server will run at `mongodb://127.0.0.1:27017`.

---

## 🚀 Run the Node.js Server

1. Open another terminal and navigate to the project folder:

```bash
cd C:\WEB2_nodejs\3ass
```

2. Start the server:

```bash
npm start
```

3. You should see in the console:

```
MongoDB connected
Server running at http://localhost:3000
```

---

## 🌐 Frontend Usage

1. Open a browser and go to:

```
http://localhost:3000
```

2. You will see a page with a form to add lots.
3. Fields:

* `Lot title` — lot title
* `Start bid` — starting bid (number)
* `Description` — description of the lot

4. Click **Add** to create a new lot.
   The lot will appear in the list and be saved in MongoDB.

---

## 📝 API Usage (Postman / curl)

* **GET /lots** — get all lots
* **GET /lots/:id** — get a specific lot
* **POST /lots** — create a lot

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

## ✅ Check Data in MongoDB

1. Open the mongo shell:

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

## ⚡ Notes

* Recommended Node.js version: 18+
* Mongoose version: 7+
* All fields (title, startBid, description) are **required**
* `startBid` must be a number

---

```

---

Если хочешь, я могу сразу прислать **готовый Postman Collection на все CRUD эндпоинты**, чтобы можно было тестировать их кнопками и сразу видеть изменения в базе.  

Хочешь, чтобы я сделал это?
```
