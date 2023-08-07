import { Id, User } from "../../../../types/users";

export const findObjectById = (array: User[], id: Id) => {
  const user = array.find((item) => item.id === id);
  return user;
};

export const filterById = (array: Id[], id: Id) => {
  const newArray = array.filter((item) => item !== id);
  return newArray;
};

export const differenceBetweenArrays = (array1: User[], array2: Id[]) => {
  return array1.filter((item1) => {
    return !array2.some((item2) => {
      return item1.id === item2;
    });
  });
};
