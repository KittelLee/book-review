export interface BookAddProps {
  closeBookAddModal: () => void;
  refreshBooks: () => Promise<void>;
}

export interface Book {
  imageUrl: string;
  bookTitle: string;
  author: string;
  publisher: string;
  price: string;
}
