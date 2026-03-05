/* eslint-disable prettier/prettier */
import type {ColDef} from "ag-grid-community";

import { Button } from "@heroui/button";
import { useEffect, useMemo, useState } from "react";
import {Pagination} from "@heroui/pagination"
import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@heroui/modal";
import { useDisclosure } from "@heroui/modal";
import { Input } from "@heroui/input";
import {Form} from "@heroui/form"
import { Spinner } from "@heroui/spinner";
import { AgGridReact } from "ag-grid-react";

import PostCard from "./PostCard";

import useCreatePost from "@/hooks/useCreatePost";
import useGetInfiniteQuery from "@/hooks/useGetInfiniteQuery";
import useGetPosts from "@/hooks/useGetPosts";
import { zustandStore } from "@/store/zustandStore";
import { Post } from "@/interfaces/postInterfaces";

export default function PostList() {
    const [currentPage, setCurrentPage] = useState(1);
    const filter = zustandStore((state) => state.filter)
    const { mutate } = useCreatePost();
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const { isFetchNextPageError, isFetchingNextPage, data, fetchNextPage, hasNextPage } = useGetInfiniteQuery();
    const {data: todos} = useGetPosts();
 
    type colDefType = {
        
    }

    const filterOptions = useMemo(() => {
        return(
            {filter: true,
  floatingFilter: true,
  sortable: true,
  resizable: true,}
        )
    },[])
    const [colDefs, setColDefs] = useState<ColDef<Post>[]>([
        { field: "id", flex:1 ,        headerCheckboxSelection: true,         checkboxSelection: true, editable: true, },
        { field: "title", flex:3 },
        { field: "body", flex:6 },
        {
    headerName: "Acciones",
    flex: 2,
    autoHeight: true,
    cellRenderer: (params: any) => {
      return (
        <Button
          onClick={() => console.log(params.data.id)}
          className="text-white w-full my-3 font-bold"
          color="warning"
        >
          Eliminar
        </Button>
      )}},
    ])

    //const filter = useSelector((state:any) => state.filter.value)

    //IDEA  
    let LIMIT = 10

    const totalPagesForPagination = hasNextPage && currentPage==LIMIT ? LIMIT += 1 : LIMIT;

    const posts = useMemo(() => {
        if (!data) return [];

        return data.pages[currentPage - 1];
    }, [data, currentPage]);
    
    useEffect(() => {
        if(posts?.length === 0  && currentPage > 1){
            setCurrentPage(currentPage-1);
        }
    },[posts])


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
  if (isFetchingNextPage) return <div className="w-full h-screen flex justify-center items-center"> <Spinner size="lg" /> </div>;


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
        <div className=" w-full h-auto rounded-xl border-1">
            
            <AgGridReact columnDefs={colDefs} rowData={filteredPosts} defaultColDef={filterOptions} domLayout="autoHeight" rowSelection={"multiple"} onCellValueChanged={event => console.log(`New Cell Value: ${event}`)}/>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
                
            
            { filteredPosts?.map((post) => (
                        
                        <PostCard key={post.id} post={post}/>
                    ))
                
            
            }

                

        </div>
        
        <Pagination className="w-full flex flex-row items-center justify-center" initialPage={1} page={currentPage} total={totalPagesForPagination} onChange={setCurrentPage}  />
    </div>

  );
}
