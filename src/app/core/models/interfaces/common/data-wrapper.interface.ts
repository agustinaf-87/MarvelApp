import { IPagination } from "./data-pagination.interface";

export interface IDataWrapper<T> {
  data: IPagination<T>;
  code: number;
  status: string;
}
