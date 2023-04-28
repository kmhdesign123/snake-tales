import mongoose from 'mongoose'

const Schema = mongoose.Schema

const mealSchema = new Schema({
  food: {
    type: String,
    required: true
  },
  dateOfMeal:{
    type:Date,
    required: true
  }
}, {
  timestamps: true
})

const snakeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  species: {
    type: String,
    required: true
  },  
  dateOfBirth: {
    type:Date,
    required: true
  },
  morph: {
    type: String,
    required: true
  },
  weight: {
    type: String,
    required: true
  },
  tankNum:  {
    type: Number,
    required: true
  }, 
  meals: [mealSchema]
}, {
  timestamps: true
})

const Snake = mongoose.model('Snake', snakeSchema)

export {
  Snake
}