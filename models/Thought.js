const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    thoughttext: {
      type: String,
      minLength: 1,
      maxLength: 280,
    },
    reaction: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reaction.length;
  });

// Initialize our Application model
const Thought = model('Thought',  thoughtSchema);

module.exports = Thought;