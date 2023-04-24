import mongoose from 'mongoose'

const Schema = mongoose.Schema

const snakeSchema = new Schema({
  name: String,
  species: String,
  dateOfBirth: Date,
  morph: String,
  lastMeal: Date,
  weight: Number,
  tankNum: Number,
}, {
  timestamps: true
})

const Snake = mongoose.model('Snake', snakeSchema)

export {
  Snake
}