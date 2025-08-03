# Journal APP

A simple Journal Application for my own edification. I learned:

- Basics of React
- Python & Flask
- Google OAuth Login
- JWT Flow and Validation
- Mongo DB

## API

A backend written in Python leveraging Flask. Includes a request interceptor to validate the JWT in the request with Google's key. If the request is valid user information is added to the request. Saves data in MongoDB via a repository.

### Database

Start MongoDB

```
docker run -d --name mongodb -p 27017:27017 mongo:latest
```

### Enviroinment

Create `.env` file with the the following keys in the `api` directory:

- `GOOGLE_OAUTH_CLIENT_ID`
- `MONGO_URL`

### Dependencies

```
cd api
pip install -r requirements.txt
```

### Run

```
cd api
python server.py
```

## Web

A barebones web front end written in React. Includes components to display and manage Journal Entries. Integrates with Google OAuth to hide the site until authenticatoin is complete (of course JWT is checked on the backend). Leverages router to display various pages.

### Dependencies

```
cd web
npm i
```

### Run

```
cd web
npm start
```
