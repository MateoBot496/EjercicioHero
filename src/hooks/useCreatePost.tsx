/* eslint-disable prettier/prettier */
import { InfiniteData, useMutation, useQueryClient } from "@tanstack/react-query";

import { Post } from "@/interfaces/postInterfaces";
const url = "https://jsonplaceholder.typicode.com/posts";

type payloadType = {
  title: string,
  body: string,
  userId: number,
}

const query = async (payload: payloadType) => {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  if (!res.ok) throw new Error("Error creando el post");

  return res.json();
};

export default function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation <Post, Error, payloadType>({
    mutationFn: (payload: payloadType) => query(payload),
    onSuccess: (result) => {
  queryClient.setQueryData<InfiniteData<Post[]>>(
    ["infinite"],
    (oldData) => {
      if (!oldData) return oldData;

      return {
        ...oldData,
        pages: [
          [result, ...oldData.pages[0]], 
          ...oldData.pages.slice(1),
        ],
      };
    }
  );
},
  });
}
