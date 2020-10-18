// Description:
//   TODO を管理できるボットです
// Commands:
//   ボット名 todo     - TODO を作成
//   ボット名 done     - TODO を完了にする
//   ボット名 del      - TODO を消す
//   ボット名 list     - TODO の一覧表示
//   ボット名 donelist - 完了した TODO の一覧表示
"use strict";
const todo = require("todo");
module.exports = (robot) => {
  robot.respond(/todo (.+)/i, (msg) => {
    const task = msg.match[1].trim();
    todo.todo(task);
    msg.send("Add task into list: " + task);
  });
  robot.respond(/done (.+)/i, (msg) => {
    const task = msg.match[1].trim();
    todo.done(task);
    msg.send("Completed this task: " + task);
  });
  robot.respond(/del (.+)/i, (msg) => {
    const task = msg.match[1].trim();
    todo.del(task);
    msg.send("Deleted this task : " + task);
  });
  robot.respond(/list/i, (msg) => {
    const list = todo.list();

    if (list.length === 0) {
      msg.send("There are not todo task");
    } else msg.send(todo.list().join("\n"));
  });

  robot.respond(/donelist/i, (msg) => {
    const donelist = todo.donelist();

    if (donelist.length === 0) {
      msg.send("There are not done task");
    } else msg.send(todo.donelist().join("\n"));
  });
};
