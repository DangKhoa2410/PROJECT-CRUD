export interface ListUserRow {
  id?: string;
  nameUser: string;
  email: string;
  registeredDate: string;
  shift: string[];
  shiftByDate?: {
    [date: string]: {
      id?: string;
      shifts: string[];
    }[];
  };
}

export interface ListUserProps {
  rows: ListUserRow[];
  onEdit?: (row: ListUserRow) => void;
  onClickRemove: (list: ListUserRow) => void;
  onApprove?: (row: ListUserRow) => void;
  onReject?: (row: ListUserRow) => void;
}