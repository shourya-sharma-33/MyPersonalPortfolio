# Frontend API Documentation

**Base URL**: `http://localhost:5001`

Below are the API endpoints available for the frontend application.

## 1. Blogs
*   **Route**: `/api/blogs`
*   **Method**: `GET`
*   **Data (Example JSON)**:
    ```json
    [
      {
        "_id": "659d... (auto-generated)",
        "img": "https://placehold.co/600x400",
        "title": "Simple Intro to gRPC",
        "text": "Simple Intro to gRPC and its comparasion with REST APIs",
        "link": "https://shouryasharma-blog.netlify.app/#grpc",
        "createdAt": "2024-01-01T12:00:00.000Z",
        "updatedAt": "2024-01-01T12:00:00.000Z"
      }
    ]
    ```

## 2. Clients
*   **Route**: `/api/clients`
*   **Method**: `GET`
*   **Data (Example JSON)**:
    ```json
    [
      {
        "_id": "659d... (auto-generated)",
        "img": "https://placehold.co/100x100",
        "link": "#"
      }
    ]
    ```

## 3. Progress (Timeline)
*   **Route**: `/api/progress`
*   **Method**: `GET`
*   **Data (Example JSON)**:
    ```json
    [
      {
        "_id": "659d... (auto-generated)",
        "sequence": 1,
        "title": "Class 10th CBSE Boards",
        "date": "2022 - 2023",
        "details": "I got 89% in Boards"
      }
    ]
    ```

## 4. Projects
*   **Route**: `/api/projects`
*   **Method**: `GET`
*   **Data (Example JSON)**:
    ```json
    [
      {
        "_id": "659d... (auto-generated)",
        "img": "https://placehold.co/600x400",
        "title": "Portfolio With Interactive Avatar",
        "cat": "Web development",
        "desc": "Portfolio Made in React, Three.js and Tailwind.css...",
        "big": true,
        "link": "https://shouryasharma.netlify.app",
        "done": true
      }
    ]
    ```

## 5. Testimonials
*   **Route**: `/api/testimonials`
*   **Method**: `GET`
*   **Data (Example JSON)**:
    ```json
    [
      {
        "_id": "659d... (auto-generated)",
        "avatar": "https://placehold.co/100x100",
        "name": "Dmeow",
        "text": "Richard was hired to create a corporate identity...",
        "date": "2021-06-14",
        "formattedDate": "14 June, 2021"
      }
    ]
    ```

## 6. WhatDoing (Services/Activities)
*   **Route**: `/api/whatdoing`
*   **Method**: `GET`
*   **Data (Example JSON)**:
    ```json
    [
      {
        "_id": "659d... (auto-generated)",
        "img": "https://placehold.co/100x100",
        "title": "Microservices Chat Application",
        "text": "A Chat Application devided into several microservices..."
      }
    ]
    ```

## 7. ChatBotPrompts
*   **Route**: `/api/chatbotprompts`
*   **Method**: `GET`
*   **Data (Example JSON)**:
    ```json
    [
      {
        "_id": "659d... (auto-generated)",
        "sequence": 1,
        "prompt": "Today i learn about clerk authentication"
      }
    ]
    ```
