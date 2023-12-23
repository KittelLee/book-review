export interface NewIntro {
  imageUrl: string;
  NickName: string;
}

export interface ChangeIntroProps {
  closeModal: () => void;
  changeIntro: React.Dispatch<React.SetStateAction<NewIntro | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
