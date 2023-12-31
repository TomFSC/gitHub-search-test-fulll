import { Id, User } from "../types/users";

export const findObjectById = (array: User[], id: Id) => {
  const user = array.find((item) => item.id === id);
  return user;
};

export const removeById = (array: Id[], id: Id) => {
  const newArray = array.filter((item) => item !== id);
  return newArray;
};

export const removeByIds = (array1: User[], array2: Id[]) => {
  return array1.filter((item1) => {
    return !array2.some((item2) => {
      return item1.id === item2;
    });
  });
};

export const isEmptyArray = (array: any[]) => {
  return array.length === 0;
};

export const isIncludedInArray = (array: Id[], id: Id) => {
  return array.includes(id);
};

export const areAllUsersChecked = (users: User[], usersIds: Id[]) => {
  return usersIds.length === users?.length && users?.length !== 0;
};
