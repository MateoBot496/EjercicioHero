/* eslint-disable prettier/prettier */
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import React from "react";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { Link } from "react-router-dom";

import { PostCardProps } from "@/interfaces/postInterfaces";
import useDeletePost from "@/hooks/useDeletePost";



function PostCard({ post }: PostCardProps) {
  const {mutate: deletePost} = useDeletePost();

  return (
    <Card className="max-w-[400px] flex flex-col rounded-2xl shadow-md overflow-hidden bg-white border border-default-200">
      <Link to={`/posts/${post.id}`}>
            <CardHeader className="flex flex-col gap-1 p-4 bg-default-100">
              <p className="text-sm text-default-500">Post ID: {post.id}</p>
              <p className="text-lg font-semibold text-default-800 break-words">
            {post.title}
          </p>
            </CardHeader>
    </Link>
  <Divider />

    <Link className="flex-1" to={`/posts/${post.id}`}>
        <CardBody className="p-4 text-sm overflow-auto text-black">
          <p>{post.body}</p>
        </CardBody>
    </Link>
  <Divider />

  <CardFooter className="">
    <Button
      className="w-full"
      color="danger"
      onClick={() => deletePost(post.id)}
    >
      Delete
    </Button>
  </CardFooter>
</Card>
  );
}

export default React.memo(PostCard);
