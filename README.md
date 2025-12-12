# Journal App

> **Learning-focused repository for hands-on exploration of the technologies used in this project.**

---

## Overview

**Journal App** is a simple journal application built primarily for **personal learning and experimentation**. This repository was created to better understand how a modern web application fits together across frontend, backend, authentication, and persistence layers.

> *This project is intentionally educational in nature and is not intended for production use.*

---

## Project Goals

The primary goals of this repository are:

* Learn by building a complete end-to-end application
* Experiment safely without production constraints
* Explore authentication and API design patterns
* Serve as a reference point for future projects

---

## What I Learned

This project served as a practical, hands-on way to learn and reinforce the following technologies and concepts:

* Basics of **React**
* **Python & Flask** for backend API development
* **Google OAuth** login integration
* **JWT** authentication flow and validation
* **MongoDB** for data persistence

---

## Architecture

The application is split into two primary components:

* **Frontend**: A React-based web UI
* **Backend API**: A Python Flask service responsible for authentication, request handling, and data storage

This separation allowed experimentation with real-world client/server interaction patterns.

---

## Web Application

The web application is built using React and serves as the primary user interface for the Journal App. It was designed to explore modern frontend development patterns and how a single-page application communicates with an authenticated backend API.

Key aspects of the web app include:

- Client-side routing and component-based UI design
- Integration with Google OAuth for user authentication
- Secure API communication using JWTs
- Simple, focused UI to support learning over polish

The frontend intentionally avoids over-engineering in favor of clarity and experimentation.

---

## API

A backend written in Python leveraging Flask. Includes a request...is added to the request. Saves data in MongoDB via a repository.

The API is responsible for:

* Handling authenticated requests
* Validating JWTs
* Managing journal entry data
* Interacting with MongoDB through a repository layer

---

## Database

MongoDB is used as the persistence layer for journal entries and related data. The database layer was intentionally kept simple to focus on learning application flow rather than advanced schema design.

---

## Running the Application

### Database

```
docker run -d --name mongodb -p 27017:27017 mongo:latest
```

### Enviroinment

Create `.env` file with the the following keys in the `api` directory:

- `GOOGLE_OAUTH_CLIENT_ID`
- `MONGO_URL`

#### API

```
cd api
pip install -r requirements.txt
python server.py
```

### Web

```
cd web
npm ci
npm start
```

---

## Notes

This repository reflects a snapshot of learning at a point in time. Code structure, patterns, and decisions favor clarity and experimentation over optimization or scalability.

Contributions are not expected, but exploration and reuse for learning purposes is welcome.
