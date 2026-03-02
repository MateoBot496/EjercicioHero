/* eslint-disable prettier/prettier */
import { Button } from "@heroui/button";
import { useEffect, useMemo, useState } from "react";
import { useSelector} from "react-redux";
import {Pagination} from "@heroui/pagination"

import PostCard from "./PostCard";

import useCreatePost from "@/hooks/useCreatePost";
import useGetInfiniteQuery from "@/hooks/useGetInfiniteQuery";
import useGetPosts from "@/hooks/useGetPosts";


export default function PostList() {
    const [currentPage, setCurrentPage] = useState(1);
    const { mutate, isPending, data: result } = useCreatePost();
    const { isFetchNextPageError, isFetchingNextPage, data, fetchNextPage, hasNextPage } = useGetInfiniteQuery();
    const {data: todos} = useGetPosts();
    const filter = useSelector((state:any) => state.filter.value)

    const posts = useMemo(() => {
    if (!data) return [];

    // Evitar acceder a una página que aún no se ha cargado
    if (currentPage - 1 >= data.pages.length) return [];
    return data.pages[currentPage - 1];
    }, [data, currentPage]);


    const filteredPosts = useMemo(() => {
        
    if (!filter) return posts;
    const lowerFilter = filter.toLowerCase();

    return todos?.filter((post) => 
        post.id.toString() === filter || 
        post.title.toLowerCase().includes(lowerFilter) ||
        post.body.toLowerCase().includes(lowerFilter)
    );
    }, [filter, todos, posts]);
  
  
  
  useEffect(() => {
    if (!data) return;
    
    const totalPagesLoaded = data.pages.length;

        if (currentPage > totalPagesLoaded) {
            fetchNextPage();
        }

    }, [currentPage, data])

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
            { filteredPosts?.map((post) => (
                        
                        <PostCard key={post.id} post={post}/>
                    ))
                
            
            }

                

        </div>
        
        <Pagination className="w-full flex flex-row items-center justify-center" initialPage={1} page={currentPage} total={10} onChange={setCurrentPage}  />
    </div>

  );
}
