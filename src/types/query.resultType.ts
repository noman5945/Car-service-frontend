export type TQueryResult<T> = {
  data: Array<T> | {};
  message: string;
  statusCode: number;
  success: boolean;
};
