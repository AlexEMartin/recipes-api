const { Schema, model } = require("mongoose");

const RecipeSchema = Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  ingredients: {
    type: Array,
    required: [true, "Ingredients is required"],
  },
  imagePath: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }
});

RecipeSchema.methods.toJSON = function() {
    const { __v, ...data } = this.toObject();
    return data;
}

module.exports = model("Recipe", RecipeSchema);
