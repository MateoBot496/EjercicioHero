/* eslint-disable prettier/prettier */
import { useMutation, useQueryClient } from "@tanstack/react-query";

const deletePost = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw Error("Error al eliminar");

  //return res.json(); esto es lo que habria que devolver pero la api es falsa
  return id
};

export default function useDeletePost() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deletePost(id),
    onSuccess: (deletedId) => {
      qc.setQueryData(['infinite'], (oldData: any) => {
        if (!oldData) return oldData;

        return {
          ...oldData,
          pages: oldData.pages.map((page: any[]) =>
            page.filter((post) => post.id !== deletedId)
          ),
        };
      })
    },
  });
}
