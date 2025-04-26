export interface ShiftRegister {
  id: number;
  email: string;
  shift: 'ca-chieu' | 'ca-toi';
  fullName: string;
  registeredDate: string;
  status: 'pending' | 'approved';
}
