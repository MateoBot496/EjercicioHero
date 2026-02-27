/* eslint-disable prettier/prettier */
import { useQuery, UseQueryResult } from "@tanstack/react-query";
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const url: string = "https://jsonplaceholder.typicode.com/posts";
const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch(url);

  if (!res.ok) throw new Error("Error al fetch");

  return res.json(); 
};

export default function useGetPosts(): UseQueryResult<Post[], Error> {
  return useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5,
  });
}
