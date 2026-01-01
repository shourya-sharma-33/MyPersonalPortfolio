Api Design is Fairly Simple 

# Image Setup
ill setup a cloudflare database to store images, in dataschmea examples it will be stored as ImageUrl
and for data schema in the further prompt ill write, pass the link

# MongoDB Schemas

MongoDB will have a document for
1. Blogs :

the data schema

```
{
        img: imageUrl,
        title: "Simple Intro to gRPC",
        text: "Simple Intro to gRPC and its comparasion with REST APIs",
        link: "https://shouryasharma-blog.netlify.app/#grpc",
},
```

2. Clients

```
{ img: imageUrl, link: "#" }
```

3. Progress

```
{
        "sequence": 1,
        "title": "Class 10th CBSE Boards",
        "date": "2022 - 2023",
        "details": "I got 89% in Boards"
},
```

4. Projects 

```
{
        img: ImageUrl,
        title: "Portfolio With Interactive Avatar",
        cat: "Web development",
        desc: "Portfolio Made in React, Three.js and Tailwind.css, with an interative avatar, which will wave at you when you tap on it, go give it a try",
        big: true,
        link: "https://shouryasharma.netlify.app",
        done:true
    },
```

5. Testimonials

```
 {
        avatar: ImageUrl,
        name: "Dmeow",
        text: `Richard was hired to create a corporate identity. We were very pleased with the work done.
    She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet,
    ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.`,
        date: "2021-06-14",
        formattedDate: "14 June, 2021",
    },
```

6. WhatDoing

```
 {
        avatar: ImageURL,
        name: "Dmeow",
        text: `Richard was hired to create a corporate identity. We were very pleased with the work done.
    She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet,
    ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.`,
        date: "2021-06-14",
        formattedDate: "14 June, 2021",
    },
```

7. ChatBotPrompts

In sequence datafield, add ordering as per the in which order it was added in data
like first data as 1, second data as two

```
{
        "sequence": OrderByInputSeqence datatype,
        "Prompt": "Today i learn about clerk authentication"
}
```

# API Design

Write Routes for

1. To Fetch Each Data (simple)
2. /admin/ Routes for posting data

# DOTENV VARIABLES

```env
MONGODB_URI=...
PORT=5001

CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

NODE_ENV=development
```

# Finally

Edit this backend_design.md in the end, to discuss all the routes, the data they return, on which route, so i can pass in the data and routes as a prompt to use the data in the frontend