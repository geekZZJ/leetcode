/*
 * @Author: zzj
 * @Date: 2020-11-14 13:08:19
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-16 15:53:06
 * @Description:
 */
import reverseWords from "../../code/string/reverseWords";

test("Let's take LeetCode contest", () => {
  expect(reverseWords("Let's take LeetCode contest")).toBe(
    "s'teL ekat edoCteeL tsetnoc"
  );
});
