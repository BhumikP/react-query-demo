// import Common from "./component/Common";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Posts from "./component/Posts";
import Post from "./component/Post";
import "./App.css";
import { useState } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
function App() {
  const [id, setId] = useState(-1);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {id > -1 ? <Post id={id} setId={setId} /> : <Posts setId={setId} />}
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
