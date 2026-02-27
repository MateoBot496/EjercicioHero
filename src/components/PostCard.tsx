/* eslint-disable prettier/prettier */
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import React from "react";
import { Button } from "@heroui/button";

import useCreatePost from '@/hooks/useCreatePost'
import { PostCardProps } from "@/interfaces/postInterfaces";
import useDeletePost from "@/hooks/useDeletePost";


function PostCard({ post }: PostCardProps) {
  const {mutate: deletePost} = useDeletePost();

  return (
    <Card className="max-w-[400px] flex flex-col">
      <CardHeader className="flex gap-3">
        <p className="text-small text-default-500">Post id: {post.id}</p>
        <p className="text-md">Post title: {post.title}</p>
      </CardHeader>
      <hr />
      <CardBody>
        <p> {post.body} </p>
      </CardBody>
      <CardFooter>
        <Button onClick={()=>{deletePost(post.id)}} color="danger" className="w-full">
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}

export default React.memo(PostCard);
