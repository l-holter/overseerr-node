# Overseerr Express.js server

Overseerr-Node is a Node.js application built with Express.js, deployed on Digital Ocean. It interacts with a MongoDB database hosted on Digital Ocean.

## Features

- Receives POST requests, parses the request data, and stores it in the database.
- Each stored record includes a timestamp and a hashed IP address of the client.

## Environment Variables

To run this project, you will need to add the following environment variables:

`MONGO_URI`: Your MongoDB connection string.

## Deployment

This project is deployed on Digital Ocean.

## Running Locally

Clone the project

```bash
  git clone https://github.com/l-holter/overseerr-node
```

Go to the project directory

```bash
  cd overseerr-node
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node server.js
```

## API Reference

#### Post data

```http
  POST /api
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `data` | `dictionary` | **Required**. Your data to post |
