export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export interface CommentReply {
  postId: number,
  id: number,
  name: string,
  email?: string,
  body: string,
  tags?: string[],
  commentId: number,
}

export interface Comment {
  postId: number,
  id: number,
  name: string,
  email?: string,
  body: string,
  tags?: string[],
  replies?: CommentReply[],
}

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
}