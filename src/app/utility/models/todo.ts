export interface TodoProps {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export interface TodoDataProps {
  id: number;
  userId: number;
  title: string;
  completed: string;
  status?: boolean;
}
