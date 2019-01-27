"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
  function Task() {
    var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Task.getDefaultTitle();

    _classCallCheck(this, Task);

    this.title = title;
    this._done = false;
    Task.count += 1;
    console.log("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438");
  }

  _createClass(Task, [{
    key: "complete",
    value: function complete() {
      this.done = true;
      console.log("\u0417\u0430\u0434\u0430\u0447\u0430 \"" + this.title + "\" \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430");
    }
  }, {
    key: "done",
    get: function get() {
      return this._done === true ? "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430" : "\u041D\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430";
    },
    set: function set(value) {
      if (value !== undefined && typeof value === "boolean") {
        this._done = value;
      } else {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430! \u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 true \u0438\u043B\u0438 false");
      }
    }
  }], [{
    key: "getDefaultTitle",
    value: function getDefaultTitle() {
      return "\u0417\u0430\u0434\u0430\u0447\u0430";
    }
  }]);

  return Task;
}();

Task.count = 0;

var task = new Task("\u0423\u0431\u0440\u0430\u0442\u044C \u043A\u043E\u043C\u043D\u0430\u0442\u0443");

console.log(task.done, task._done);
task.complete();
console.log(task.done, task._done);