import React from "react";
import blogs from "../data/blogs/blog";

const BlogPage = ({ isActive }) => {
    return (
        <article className={`blog ${isActive ? "active" : ""}`} data-page="blog">
            <header>
                <h2 className="h2 article-title">Blog</h2>
            </header>

            <section className="blog-posts">
                <ul className="blog-posts-list">
                    {blogs.map((b, i) => (
                        <li className="blog-post-item" key={i}>
                            <a href={b.link}>
                                <figure className="blog-banner-box">
                                    <img src={b.img} alt={b.title} loading="lazy" />
                                </figure>

                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <p className="blog-category">Design</p>
                                        <span className="dot"></span>
                                        <time dateTime="2022-02-23">Feb 23, 2022</time>
                                    </div>

                                    <h3 className="h3 blog-item-title">{b.title}</h3>
                                    <p className="blog-text">{b.text}</p>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
};

export default BlogPage;
