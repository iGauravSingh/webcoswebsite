interface Event {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  _count: {
    Students: number;
  };
}
