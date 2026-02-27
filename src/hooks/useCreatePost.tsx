/* eslint-disable prettier/prettier */
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Post } from "@/interfaces/postInterfaces";
const url = "https://jsonplaceholder.typicode.com/posts";

const query = async () => {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      title: "Mutate funciona!",
      body: "Este post ha sido creado con mutate",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  if (!res.ok) throw new Error("Error creando el post");

  return res.json();
};

export default function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation <Post, Error, void>({
    mutationFn: query,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["infinite"] });
    },
  });
}
