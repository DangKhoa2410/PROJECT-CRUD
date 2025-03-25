export interface ListUserRow {
  id?: string;
  nameUser: string;
  email: string;
  phone: string;
  date: string;
}

export interface ListUserProps {
  rows: ListUserRow[];
  onEdit?: () => void;
  onClickRemove: (list: ListUserRow, index: number) => void;
  
}