import store from 'store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type TStateType = {
  loading: boolean;
  auth: string | boolean;
  users: Array<TUsersType>;
  error: any | null;
  userID: string | null;
};

export type TUsersType = {
  id: string;
  name: string;
  password: string;
  email?: string;
  dateReg: Date;
  dateLogin?: Date;
  status: boolean;
};
