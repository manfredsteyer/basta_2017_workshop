
export interface Flight {
  id: number; // int + double
  from: string;
  to: string;
  date: string; // ISO-Date: 2017-09-25T10:30+01:00
  delayed: boolean;
}
