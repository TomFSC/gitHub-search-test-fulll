import { Users } from "../../fakeDatas/fakeDatas";
import {
  removeByIds,
  removeById,
  findObjectById,
  isEmptyArray,
  isIncludedInArray,
} from "../array";

describe("findObjectById", () => {
  test("Should return the object in array with id passed in parameters", () => {
    const array = Users.SMALL;
    const id = 1;
    const userToFind = findObjectById(array, id);

    expect(userToFind).toBe(Users.SMALL[0]);
  });

  test("Should return undefined if object with id doesn't exist in array", () => {
    const array = Users.SMALL;
    const id = 3;

    const userToFind = findObjectById(array, id);

    expect(userToFind).toBe(undefined);
  });
});

describe("filterById", () => {
  test("Should return an array without the object with id matches with the id passed in parameter", () => {
    const ids = [748, 1, 258, 300];
    const id = 748;
    const expectedIds = [1, 258, 300];

    const newIds = removeById(ids, id);

    expect(newIds).toStrictEqual(expectedIds);
  });

  test("Should return the same array if any object id matches with the id passed in parameter", () => {
    const ids = [748, 1, 258, 300];
    const id = 529;

    const newIds = removeById(ids, id);

    expect(newIds).toStrictEqual(ids);
  });
});

describe("removeByIds", () => {
  test("Should return an array without ids passed in parameters", () => {
    const ids = [3, 5];
    const users = Users.LARGE;
    const expectedUsers = [
      { id: 1, login: "John" },
      {
        id: 2,
        login: "Jane",
      },
      {
        id: 4,
        login: "Jack",
      },
    ];

    const newUsers = removeByIds(users, ids);

    expect(newUsers).toStrictEqual(expectedUsers);
  });
});

describe("isEmptyArray", () => {
  test("Should return true if array is empty", () => {
    const isEmpty = isEmptyArray(Users.EMPTY);

    expect(isEmpty).toBe(true);
  });

  test("Should return false if array isn't empty", () => {});
  const isEmpty = isEmptyArray(Users.SMALL);

  expect(isEmpty).toBe(false);
});

describe("isIncludedInArray", () => {
  test("Should return true if array includes user id", () => {
    const usersIds = [1, 2, 3];
    const userIdToCheck = 2;

    const isEmpty = isIncludedInArray(usersIds, userIdToCheck);

    expect(isEmpty).toBe(true);
  });

  test("Should return false if array doesn't includes user id empty", () => {
    const usersIds = [1, 2, 3];
    const userIdToCheck = 6;

    const isEmpty = isIncludedInArray(usersIds, userIdToCheck);

    expect(isEmpty).toBe(false);
  });
});
