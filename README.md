# Khushboo-Dev-AnswersAi-Backend

## Description

A backend  implementaion of chatbot like application using  Node.js and Express.js powered by the @langchain/openai package, utilizing the Large Language Model (LLM) API. The application leverages the LLM API to provide accurate and informative answers to user questions. It is designed to assist users by quickly retrieving relevant information and delivering it in a concise manner.

Endpoints:

 User and questions endpoints:
- **POST /api/questions**
    - Accept user question, and return AI-generated answer.
- **GET /api/questions/:questionId**
    - Retrieve specific question and answer by question ID.
- **POST /api/users**
    - Create a new user account.
- **GET /api/users/:userId**
    - Retrieve a user profile with a given userId
- **GET /api/users/:userId/questions**
    - Retrieve all questions asked by user with a given userId
 
  Authentication and authorization using Passport and JWT for API security.
    - **POST /api/auth/login:** User login endpoint.
    - **POST /api/auth/logout:** User logout endpoint.
    - **POST /api/auth/refresh:** Refresh access token endpoint.

## Installation

```bash
$ git clone https://github.com/khushboo683/Khushboo-Dev-AnswersAi-Backend.git
$ cd Khushboo-Dev-AnswersAi-Backend

$ npm install
```

## Running the app

```bash
# development
$ npm start

# watch mode
$ npm run start:dev

```


## Technologies Used

LLM API https://platform.openai.com/docs/overview

Backend Framework: Express

Database: MongoDB

Containerization: Docker

