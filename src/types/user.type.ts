export type TUser = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};

export type TUserInfo = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  address: string;
};
