const BlogDetails = async ({ params }) => {
    const { id } = params;
  
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const blog = await response.json();
  
    return (
      <div className="min-h-screen w-[90%] mx-auto">
        <h1 className="my-5 text-center font-bold text-xl">Blog Details Page</h1>
        <div className="container mx-auto my-10 p-5 border w-[60%]">
        <p className=" mb-4"><span className="font-bold">Blog ID: </span> {blog.id}</p>
          <h1 className="text-lg  mb-4">  <span className="font-bold">Title:</span> {blog.title}.</h1>
          <p className="font-light"> <span className="font-bold">Blog Details : </span> {blog.body}.</p>
        </div>
      </div>
    );
  };
  
  export default BlogDetails;
  