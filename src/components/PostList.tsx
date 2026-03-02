/* eslint-disable prettier/prettier */
import { Button } from "@heroui/button";
import { useEffect, useMemo, useState } from "react";
import { useSelector} from "react-redux";
import {Pagination} from "@heroui/pagination"
import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@heroui/modal";
import { useDisclosure } from "@heroui/modal";
import { Input } from "@heroui/input";
import {Form} from "@heroui/form"

import PostCard from "./PostCard";

import useCreatePost from "@/hooks/useCreatePost";
import useGetInfiniteQuery from "@/hooks/useGetInfiniteQuery";
import useGetPosts from "@/hooks/useGetPosts";


export default function PostList() {
    const [currentPage, setCurrentPage] = useState(1);
    const { mutate } = useCreatePost();
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const { isFetchNextPageError, isFetchingNextPage, data, fetchNextPage } = useGetInfiniteQuery();
    const {data: todos} = useGetPosts();
    const filter = useSelector((state:any) => state.filter.value)

    const posts = useMemo(() => {
        if (!data) return [];


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

    const handleSubmit = ( e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!e.currentTarget.checkValidity) return
        const formData = new FormData(e.currentTarget);
        const payload = {
            title: formData.get("titulo") as any,
            body: formData.get("body") as any,
            userId: Number(formData.get("userId")),
        };

        onOpenChange(   )
        mutate(payload) 
    }
  
  
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
        <Button color="primary" onPress={onOpen}> Crear post </Button>
        <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange} >
            <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">Crear post</ModalHeader>
                    <Form className="w-full"  onSubmit={handleSubmit}>
                        <ModalBody className="w-full">
                            <Input  isRequired
                                    className="w-full"
                                    label="Titulo"
                                    name="titulo"
                                    placeholder="Titulo"
                                    validate={(value) => {
                                        if (value.length < 3) {
                                            return "Por lo menos 3 caracteres";
                                        }
                                    }}
                                    variant="bordered"

                                    />
                            <Input
                            isRequired
                                    label="Cuerpo"
                                    name="body"
                                    placeholder="Body del post" 
                                    type="text"
                                    validate={(value) => {
                                        if (value.length < 3) {
                                            return "Por lo menos 3 caracteres";
                                        }
                                    }}
                                    variant="bordered"
                            />
                            <Input
                            isRequired
                            label="Id del creador"
                                    name="id"
                                    placeholder="Id del creador"
                                    type="number"
                                    validate={(value) => {
                                        if (!value || Number(value) < 0) {
                                            return "Id erroneo";
                                        }
                                    }}
                                    variant="bordered"
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="flat" onPress={onClose}>
                                Cerrar
                            </Button>
                            <Button color="primary" type="submit">
                                Crear Post
                            </Button>
                        </ModalFooter>
                    </Form>
                    
                    </>
                )}
            </ModalContent>
        </Modal>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
                
            
            
            { filteredPosts?.map((post) => (
                        
                        <PostCard key={post.id} post={post}/>
                    ))
                
            
            }

                

        </div>
        
        <Pagination className="w-full flex flex-row items-center justify-center" initialPage={1} page={currentPage} total={10} onChange={setCurrentPage}  />
    </div>

  );
}
