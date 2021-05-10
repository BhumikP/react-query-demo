// import { useState } from "react";
// import { useQueryClient } from "react-query";
import usePosts from "./usePosts";

export default function Posts({ setId }) {
  //   const queryClient = useQueryClient();
  const { status, data, error, isFetching, refetch } = usePosts(
    "posts",
    `https://jsonplaceholder.typicode.com/posts/`
  );
  //   console.log(queryClient.getQueryData(["posts"]));

  console.log(data);
  return (
    <div>
      {" "}
      <h1>All Posts</h1>
      <button onClick={() => refetch()}>Click to refetch</button>
      {status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <div>
            {data.map((post) => (
              <ul key={post.id}>
                <h4>
                  <li onClick={() => setId(post.id)}>{post.title}</li>
                  <hr />
                </h4>
              </ul>
            ))}
          </div>
          <div>{isFetching ? "Background Updating..." : " "}</div>
        </>
      )}
    </div>
  );
}
