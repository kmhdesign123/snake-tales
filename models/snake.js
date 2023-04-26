import mongoose from 'mongoose'

const Schema = mongoose.Schema

const mealsSchema = new Schema({
  food: String,
  dateOfMeal: Date,
  didEat: Boolean
})

const snakeSchema = new Schema({
  name: String,
  species: String,
  dateOfBirth: Date,
  morph: String,
  lastMeal: Date,
  weight: String,
  tankNum: Number
}, {
  timestamps: true
})

const Snake = mongoose.model('Snake', snakeSchema)

export {
  Snake
}