require('dotenv').config()
const { MongoOperations } = require('../db/mongo-operations')

const collection= process.env.MONGO_CUSTOMERS_COLLECTION
const mongoOperation = new MongoOperations('project')

const addCustomer = async (customer) => {
  mongoOperation.Collection = collection
  const response = await mongoOperation.insertItem(customer)
  return response
}

const addCustomers = async (customers) => {
  mongoOperation.Collection = collection
  const response = await mongoOperation.insertList(customers)
  return response
}

const findCustomer = async (filter) => {
  mongoOperation.Collection = collection
  const response =  await mongoOperation.find({filter})  
  return response
}


module.exports = {
    addCustomer,
    addCustomers,
    findCustomer
  }
