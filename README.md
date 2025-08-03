# Journal APP

## Backend

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

## Front End

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
