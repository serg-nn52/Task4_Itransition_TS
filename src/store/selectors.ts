import { RootState, TUsersType } from './type';

export const getAuth = (store: RootState) => store.user.auth;
export const getUsersList = (store: RootState) => store.user.users;
export const getUserName = (store: RootState) => store.user.userID;
export const getStatusUser = (id: string) => (store: RootState) =>
  store.user.users.length &&
  store.user.userID &&
  store.user.users.filter((el: TUsersType) => el.name === id).length
    ? store.user.users.find((el: TUsersType) => el.name === id)!.status
    : true;
export const getLoading = (store: RootState) => store.user.loading;
