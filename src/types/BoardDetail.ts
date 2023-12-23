export interface BoardData {
  id: string;
  author: string;
  category: string;
  comments: CommentData[];
  content: string;
  image: string;
  likes: number;
  title: string;
  views: number;
  createdAt: Date;
}
export interface CommentData {
  user: string;
  content: string;
  profileImageUrl?: string;
  NickName?: string;
}
export interface CommentDoc {
  user: string;
  content: string;
  profileImageUrl?: string;
  NickName?: string;
}
export interface UserGetData {
  imageUrl: string;
  NickName: string;
}
