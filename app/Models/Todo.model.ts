import * as mongoose from 'mongoose';
interface ITodoModel extends mongoose.Document {
  title: string;
  description: string;
  done: boolean;
}

let TodoSchema = new mongoose.Schema({
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

export default mongoose.model<ITodoModel>('Todo', TodoSchema);