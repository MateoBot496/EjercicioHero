/* eslint-disable prettier/prettier */
import type { Post } from "@/interfaces/postInterfaces";

import { Link, useParams } from "react-router-dom";
import {Spinner} from "@heroui/spinner"
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";

import useGetPostById from "@/hooks/useGetPostById";
export default function Post() {
  const params = useParams();
  const id = params.id ? Number(params.id) : undefined;

  const { data, isLoading, error } = useGetPostById(id);

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex justify-center items-center">  
        {isLoading ? <Spinner/> : (
            <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50"
            shadow="lg"
            >
                <CardBody className="flex flex-col sm:flex-row gap-2 ">
                    <img
                        alt="Album cover"
                        className="object-cover rounded-sm"
                        loading="lazy"
                        src="https://heroui.com/images/album-cover.png"
                        width="100%"
                        />
                    
                    <div className="bg-gray-200 p-2 rounded-sm flex flex-col  items-center">
                        <p className="h-[5vh] text-gray-500 font-bold">Post id: {data?.id}</p>                        
                        <p className="text-2xl md:text-3xl font-semibold text-default-900 dark:text-white leading-snug mb-4 break-words justify-center items-center text-center">
                            {data?.title}
                        </p>
                        <Divider />
                        <p className="h-full w-full flex justify-center items-center text-center"> {data?.body}</p>
                    </div>
                </CardBody>
                <Divider />
                <CardFooter className="flex justify-center items-center text-center ">
                    <Link to={"/"} className="transition ease-in-out duration-300 hover:text-blue-700 hover:font-bold ">Volver a home</Link>
                </CardFooter>
            </Card>
        )}
        
    </div>
  )
}
