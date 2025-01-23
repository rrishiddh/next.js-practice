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
    <div className="min-h-screen w-[90%] mx-auto pb-10 ">
      <div className="text-center my-3">
        <h1 className="text-xl font-bold">Welcome To The Home Page!</h1>
        <p className="font-light mt-2">Check out some blog posts here!</p>
      </div>
      <div className="justify-center ">
        {allBlogPost.length ? (
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Title</th>
                  <th>View Details</th>
                </tr>
              </thead>

              {allBlogPost.map((post, idx) => (
                <tbody key={post.id}>
                  {/* row 1 */}
                  <tr className="hover">
                    <th>{idx + 1}</th>
                    <td>
                      <a href={`/blog/${post.id}`}>{post.title}</a>
                    </td>
                    <td>
                      <a
                        href={`/blog/${post.id}`}
                        className="btn btn-info btn-sm"
                      >
                        Read More
                      </a>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        ) : (
          <div className="text-center text-xl text-red-500 py-10">
            No Data Available!
          </div>
        )}
      </div>
    </div>
  );
}
