# 🛸 Portal Gun CLI – Rick and Morty Character Explorer

A Node.js Command Line Interface (CLI) application that allows users to search for Rick and Morty characters and retrieve detailed information using the Rick and Morty API.

This project demonstrates the use of JavaScript, Node.js, APIs, and CLI development, along with local data persistence using a JSON file.

---

## 📌 Project Overview

This CLI application interacts with the Rick and Morty API to perform two core operations:

1. **Search by Keyword**

   * Users can search for characters using a keyword (e.g., "rick", "morty")
   * The application returns a list of matching results

2. **Get Data by Unique ID**

   * After selecting a result, the application fetches and displays detailed information about that specific character

Additionally, the application stores user search keywords in a local JSON file and allows users to revisit previous searches.

---

## 🚀 Features

* 🔍 Search characters by keyword
* 📄 Retrieve detailed character information by ID
* 🧠 Stores unique search history in a JSON file
* 📜 View and reuse past search keywords
* 💻 Interactive CLI with user-friendly prompts (no raw JSON output)

---

## 🛠️ Technologies Used

* Node.js
* JavaScript (ES6+)
* Axios (for API requests)
* Inquirer (for CLI prompts)
* File System (fs) for local JSON storage

---

## 📂 Project Structure

```
rick-morty-cli-app/
│
├── cli.js                # Entry point for CLI commands
├── app.js                # Main application logic
├── api.js                # Handles API requests
├── history.js            # Handles search history
│
├── data/
│   └── search_history.json   # Stores user search keywords
│
├── package.json
└── README.md
```

---

## ⚙️ Installation

1. Clone the repository:

```
git clone https://github.com/your-username/rick-morty-cli-app.git
cd rick-morty-cli-app
```

2. Install dependencies:

```
npm install
```

---

## ▶️ Usage

### Help Menu

Displays available commands:

```
node cli.js --help
```

---

### 🔍 Search Command

Search for characters by keyword:

```
node cli.js search <keyword>
```

Example:

```
node cli.js search rick
```

What happens:

* The app searches the API using the keyword
* Displays a list of matching characters
* Prompts the user to select one
* Displays detailed information about the selected character
* Saves the keyword to history (if unique)

---

### 📜 History Command

View previous search keywords:

```
node cli.js history keywords
```

What happens:

* Displays a list of past search keywords
* First option is **Exit**
* Selecting a keyword re-runs the search flow

---

## 🔌 API Used

This project uses the **Rick and Morty API**:

Base URL:

```
https://rickandmortyapi.com/api
```

Endpoints used:

* Search Characters:

```
GET /character/?name=<keyword>
```

* Get Character by ID:

```
GET /character/<id>
```

---

## 💾 Data Persistence

Search keywords are stored locally in:

```
data/search_history.json
```

* Only unique keywords are saved
* Used to power the history command

---

## 🔄 Future Enhancements

* Convert CLI into an Express.js server
* Replace JSON storage with MongoDB
* Add pagination for search results
* Add additional filters (status, species, etc.)

---

## 👥 Contributors

* Arman Mahmoodzadeh
* Royce Jamerson
* James Ybarra
* Javier Gomez

---

## 📚 Learning Objectives

This project demonstrates:

* CLI application development using Node.js
* API integration using HTTP requests
* Handling user input via command line
* File-based data storage and retrieval
* Modular code structure

---

## 📄 License

This project is for educational purposes.
