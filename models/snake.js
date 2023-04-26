import mongoose from 'mongoose'

const Schema = mongoose.Schema

const mealSchema = new Schema({
  food: String,
  dateOfMeal: Date,
  didEat: Boolean
}, {
  timestamps: true
})

const snakeSchema = new Schema({
  name: String,
  species: String,
  dateOfBirth: Date,
  morph: String,
  weight: String,
  tankNum: Number,
  meal: [mealSchema]
}, {
  timestamps: true
})

const Snake = mongoose.model('Snake', snakeSchema)

export {
  Snake
}