/* eslint-disable prettier/prettier */
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostCardProps {
  post: Post;
}