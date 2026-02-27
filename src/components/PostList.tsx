/* eslint-disable prettier/prettier */
import { Button } from "@heroui/button";
import { useMemo } from "react";

import PostCard from "./PostCard";

import useCreatePost from "@/hooks/useCreatePost";
import useGetInfiniteQuery from "@/hooks/useGetInfiniteQuery";

export default function PostList() {
    
  const { isFetchNextPageError, isFetchingNextPage, data, fetchNextPage, hasNextPage } = useGetInfiniteQuery();
  const posts = useMemo(() => {
    return data?.pages.flat() ?? [];
  }, [data])
/*
  const postsFiltrado = useMemo(() => {
    if(!search) return posts

    return posts.filter((post: Post) => (
        post.id == Number(search)
    ))
  },[posts, search])*/
  
  const { mutate, isPending, data: result } = useCreatePost();

  if (isFetchNextPageError) return <p>Error al cargar posts</p>;
  if (isFetchingNextPage) return <p>Cargando...</p>;

  return (
    <div className="flex flex-col w-full gap-10" >
        <Button disabled={isPending} onClick={() => mutate()}>
                    {isPending ? "Creando..." : "Crear Post"}
                </Button>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
                
            
            {
                result && <PostCard key={result.id} post={result}/>
            }
                {posts.map((post) => (
                        
                        <PostCard key={post.id} post={post}/>
                    ))
                }

                

        </div>
        
        { !hasNextPage? "" : !isFetchingNextPage ? (
                    <Button onClick={() => fetchNextPage()}>
                        Cargar 10 mas
                    </Button>
                ) : (
                    <Button isLoading >
                        Cargando...
                    </Button>
                )
                }
    </div>

  );
}
