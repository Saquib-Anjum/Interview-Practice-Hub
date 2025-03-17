import mongoose from 'mongoose';

    const TodoSchema = new mongoose.Schema({
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: false,
        },
        completed: {
          type: Boolean,
          default: false,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      });

export default todoDB