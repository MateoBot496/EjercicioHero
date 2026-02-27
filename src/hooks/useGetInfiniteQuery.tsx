/* eslint-disable prettier/prettier */
import { useInfiniteQuery } from "@tanstack/react-query";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const infiniteFetch = async (pageParam: number = 0): Promise<Post[]> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=${pageParam}&_limit=10`
  );

  if (!res.ok) throw new Error("Error al traer posts");

  return res.json();
};

export default function useGetInfiniteQuery() {
  return useInfiniteQuery<Post[], Error>({
    queryKey: ["infinite"],
    queryFn: ({ pageParam = 0}: any) => infiniteFetch(pageParam),
    getNextPageParam: (lastPage, allPages) => {
        
      if (lastPage.length == 0) return undefined;

      return allPages.length * 10; 
    },
    initialPageParam: 0
  });
}