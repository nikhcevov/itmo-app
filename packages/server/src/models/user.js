import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userScheme = new Schema({
  login: String,
  password: String
})

const User = mongoose.model('User', userScheme, 'user')

export default User
