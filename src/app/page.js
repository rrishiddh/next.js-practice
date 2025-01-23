"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [allBlogPost, setAllBlogPost] = useState([]);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts`
        );
        const data = await response.json();
        setAllBlogPost(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchBlogPost();
  }, []);

  return (
    <div className="min-h-screen w-[90%] mx-auto">
      <div className="text-center my-3">
        <h1 className="text-xl font-bold">Welcome, This Is Home Page!</h1>
        <p className="font-light mt-2">Check out some blog posts here!</p>
      </div>
      <div className="grid grid-cols-3 max-sm:grid-cols-1  justify-center gap-4">
        {allBlogPost.map((post) => (
          <div key={post.id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <div className="card-actions justify-end">
                <a href={`/blog/${post.id}`} className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
