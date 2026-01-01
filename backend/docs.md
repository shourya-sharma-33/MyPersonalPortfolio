# API Documentation

Base URL: `http://localhost:5001`

## Public Routes (GET)

Use these routes to fetch data for the frontend.

| Resource | Method | Endpoint | Description |
|----------|--------|----------|-------------|
| Blogs | GET | `/api/blogs` | Get all blog posts |
| Clients | GET | `/api/clients` | Get all client logos/links |
| Progress | GET | `/api/progress` | Get progress/timeline items |
| Projects | GET | `/api/projects` | Get all projects |
| Testimonials | GET | `/api/testimonials` | Get all testimonials |
| WhatDoing | GET | `/api/whatdoing` | Get 'What I'm doing' items |
| ChatBotPrompts | GET | `/api/chatbotprompts` | Get chatbot prompts |

## Admin Routes (POST)

Use these routes to add new data. Images are uploaded to Cloudinary.

| Resource | Method | Endpoint | Body Parameters | File Upload Key |
|----------|--------|----------|-----------------|-----------------|
| Blogs | POST | `/admin/blogs` | `title`, `text`, `link` | `img` |
| Clients | POST | `/admin/clients` | `link` | `img` |
| Progress | POST | `/admin/progress` | `sequence`, `title`, `date`, `details` | N/A |
| Projects | POST | `/admin/projects` | `title`, `cat`, `desc`, `link`, `big` (bool), `done` (bool) | `img` |
| Testimonials | POST | `/admin/testimonials` | `name`, `text`, `date`, `formattedDate` | `avatar` |
| WhatDoing | POST | `/admin/whatdoing` | `title`, `text` | `img` |
| ChatBotPrompts | POST | `/admin/chatbotprompts` | `sequence`, `prompt` | N/A |

## Data Schemas

### Blog
```json
{
  "img": "string (url)",
  "title": "string",
  "text": "string",
  "link": "string"
}
```

### Client
```json
{
  "img": "string (url)",
  "link": "string"
}
```

### Progress
```json
{
  "sequence": "number",
  "title": "string",
  "date": "string",
  "details": "string"
}
```

### Project
```json
{
  "img": "string (url)",
  "title": "string",
  "cat": "string",
  "desc": "string",
  "big": "boolean",
  "link": "string",
  "done": "boolean"
}
```

### Testimonial
```json
{
  "avatar": "string (url)",
  "name": "string",
  "text": "string",
  "date": "string",
  "formattedDate": "string"
}
```

### WhatDoing
```json
{
  "img": "string (url)",
  "title": "string",
  "text": "string"
}
```

### ChatBotPrompt
```json
{
  "sequence": "number",
  "prompt": "string"
}
```

## Setup

1. Configure `.env` file with `MONGODB_URI`, `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`.
2. Run `npm install`.
3. Run `npm run seed` to populate initial data.
4. Run `npm start` or `npm run dev` to start the server.
