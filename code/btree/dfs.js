/*
 * @Author: zzj
 * @Date: 2021-04-21 22:13:22
 * @LastEditors: zzj
 * @LastEditTime: 2021-04-21 22:19:20
 * @Description:深度优先遍历
 */
const tree = {
  val: "a",
  children: [
    {
      val: "b",
      children: [
        {
          val: "d",
          children: [],
        },
        {
          val: "e",
          children: [],
        },
      ],
    },
    {
      val: "c",
      children: [
        {
          val: "f",
          children: [],
        },
        {
          val: "g",
          children: [],
        },
      ],
    },
  ],
};

const dfs = (root) => {
  console.log(root.val);
  root.children.forEach((child) => {
    dfs(child);
  });
};

dfs(tree);
