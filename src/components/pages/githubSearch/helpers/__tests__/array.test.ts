import { fakeProfiles } from "../../../../../fakeProfile/fakeProfiles";
import { differenceBetweenArrays, filterById, findObjectById } from "../array";

test("findObjectById", () => {
  const id = 748;
  expect(findObjectById(fakeProfiles, id)).toBe(fakeProfiles[0]);
});

test("filterById", () => {
  const ids = [748, 1, 258, 300];
  const id = 748;

  expect(filterById(ids, id)).toStrictEqual([1, 258, 300]);
});

test("differenceBetweenArrays", () => {
  const ids = [748];
  expect(differenceBetweenArrays(fakeProfiles, ids)).toStrictEqual([
    fakeProfiles[1],
  ]);
});
