/**
 * 用户类别
 */
export type UserType = {
  id: number;
  username: string;
  password: string;
  nickname: string;
  realname: string;
  face?: string;
  mobile: string;
  email: string;
  sex:number;
  birthday: Date;
  createdTime: Date;
  updatedTime: Date;
};
