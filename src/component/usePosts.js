import { useQuery } from "react-query";
import axios from "axios";

const getPost = async (url) => {
  const { data } = await axios.get(url);
  return data;
};

const usePosts = (name, url) => {
  return useQuery(name, () => getPost(url), {
    retry: 3,
    staleTime: 0,
    cacheTime: 0,
    onSuccess: () => console.log("data fetched successfully"),
  });
};
export default usePosts;
