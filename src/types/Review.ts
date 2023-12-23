export interface ReviewProps {
  bookId: string;
  bookTitle: string;
  author: string;
  publisher: string;
  price: string;
  imageUrl: string;
  onDelete: (id: string) => void;
  onClose: () => void;
}

export interface Comment {
  NickName: string;
  comment: string;
}
