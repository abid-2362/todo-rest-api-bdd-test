"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var TodoSchema = new mongoose.Schema({
    // id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    // },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        default: false,
    }
});
exports.default = mongoose.model('Todo', TodoSchema);
//# sourceMappingURL=Todo.model.js.map