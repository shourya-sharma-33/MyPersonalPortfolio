// Image imports
import project1 from "../../assets/images/project-1.png";
import project2 from "../../assets/images/project-2.png";
import project3 from "../../assets/images/project-3.png";
import project4 from "../../assets/images/project-4.png";
import project5 from "../../assets/images/project-5.png";
import project6 from "../../assets/images/project-6.png";
import project7 from "../../assets/images/project-7.png";
import project8 from "../../assets/images/project-8.jpg";
import project9 from "../../assets/images/project-9.png";

// Filters
export const projectCategories = [
    "All",
    "Web design",
    "Applications",
    "Web development",
];

// Projects
const projects = [
    {
        img: project4,
        title: "Portfolio With Interactive Avatar",
        cat: "Web development",
        desc: "Portfolio Made in React, Three.js and Tailwind.css, with an interative avatar, which will wave at you when you tap on it, go give it a try",
        big: true,
        link: "https://shouryasharma.netlify.app",
        done:true
    },
    {
        img: project1,
        title: "Shourya Sharma Portfolio",
        cat: "Web design",
        desc : "My First Portfolio, Design was made in Figma, coded in HTML, CSS, JS",
        big : false,
        link: "https://shourya-sharma.netlify.app",
        done: true
    },
    {
        img: project2,
        title: "Anime Website",
        cat: "Web design",
        desc: "Design made in Figma, Website in HTML, CSS, JS",
        big: false,
        link: "https://delightful-seahorse-2d9a2b.netlify.app/",
        done: true
    }, {
        img: project3,
        title: "Temple Travel Website",
        cat: "Web design",
        desc: "Hindu Aesthetic designed in figma",
        big: false,
        link: "https://stupendous-cascaron-1a231f.netlify.app/",
        done: true
    }
    , {
        img: project5,
        title: "Rust",
        cat: "Applications",
        desc: "This website will contain alot of RustLang related concepts, like LLD, WebDev and much more",
        big: false,
        link: "https://rustdocs-shouryasharma.netlify.app",
        done: false
    },
    {
        img: project6,
        title: "GHCNpy25",
        cat: "Applications",
        desc: "Recoded a Weather API that fetches data from 100k stations worldwide, it was discovered by me while I was doing research on datasets to include in an Hackathon Project",
        big: true,
        link: "https://github.com/shourya-sharma-33/GHCN25py",
        done: true
    }, {
        img: project7,
        title: "Uber Clone",
        cat: "Applications",
        desc: "MERN Uber Clone",
        big: false,
        link: "https://github.com/shourya-sharma-33/uberclone",
        done: false
    },
   
    

    
];

export default projects;
