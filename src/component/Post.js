// import { useState } from "react";
import { useQueryClient } from "react-query";
import usePosts from "./usePosts";

export default function Post({ id, setId }) {
  const queryClient = useQueryClient();
  //   const [id, setId] = useState(null);
  const { status, data, error, isFetching } = usePosts(
    "post",
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  console.log(queryClient.getQueryData(["post"]));

  return (
    <div>
      {" "}
      <h1> Post Number {id}</h1>
      <div>
        <button onClick={() => setId(-1)}>Back</button>
      </div>
      {status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <div>
            <h2 key={data.id}>{data.title}</h2>
            <hr />
            <p>{data.body}</p>
          </div>
          <div>{isFetching ? "Background Updating..." : " "}</div>
        </>
      )}
    </div>
  );
}
