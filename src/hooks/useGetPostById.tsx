/* eslint-disable prettier/prettier */
import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { Post } from "@/interfaces/postInterfaces";

const url: string = "https://jsonplaceholder.typicode.com/posts/";
const fetchPost = async (id?:number): Promise<Post> => {
  const res = await fetch(url + `${id}`);

  if (!res.ok) throw new Error("Error al fetch");

  return res.json(); 
};

export default function useGetPostById(id?:number): UseQueryResult<Post, Error> {

  return useQuery<Post, Error>({
    queryKey: ["post", id],
    queryFn: () => fetchPost(id),
    staleTime: 1000 * 60 * 5,
    enabled: !!id,
  });
}
