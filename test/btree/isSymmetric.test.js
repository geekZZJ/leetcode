/*
 * @Author: zzj
 * @Date: 2021-02-25 16:10:02
 * @LastEditors: zzj
 * @LastEditTime: 2021-02-25 16:20:07
 * @Description:
 */
import Tree from "../../code/btree/isSymmetric";

test("tree1", () => {
  let root = new Tree([1, 2, 2, 3, 4, 4, 3]);
  expect(Tree.isSymmetry(root)).toBe(true);
});

test("tree1", () => {
  let root = new Tree([1, 2, 2, null, 3, null, 3]);
  expect(Tree.isSymmetry(root)).toBe(false);
});
