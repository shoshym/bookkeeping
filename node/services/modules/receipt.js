require('dotenv').config()
const { MongoOperations } = require('../db/mongo-operations')

const collection = process.env.MONGO_RECEIPTS_COLLECTION
const mongoOperation = new MongoOperations('project')

const addReceipt = async (receipt)=> {
    mongoOperation.Collection = collection
    const response = await mongoOperation.insertItem(receipt)
    return response
}

const addReceipts = async (receipts)=> {
    mongoOperation.Collection = collection
    const response =  await mongoOperation.insertList(receipts)
    return response
}

const findReceipt = async (filter)=> {
    mongoOperation.Collection = collection
    const response =  await mongoOperation.find({filter})
    return response 
}

const getByMonth = async (month) =>{
    mongoOperation.Collection = collection
    const allReceipts = await findReceipt()
    const result = allReceipts.filter(r => (new Date(r.date).getMonth()+1) == month.month)    
  return result
  }
  
  const getByYear = async (year) =>{
    mongoOperation.Collection = collection
    const allReceipts = await findReceipt()
    const result = allReceipts.filter(r => (new Date(r.date).getFullYear()) == year.year)
  return result
  }
  
  const getBy2Date = async (startDate,endDate) =>{
    mongoOperation.Collection = collection
    const allReceipts = await findReceipt()
    const result = allReceipts.filter(r => {
      const receiptDate = new Date(r.date)     
      return receiptDate >= startDate && receiptDate <= endDate;
  })  
   return result
  }
  
  const getByCust = async (customer) =>{
    console.log({customer}); 
    mongoOperation.Collection = collection
    const allRevenues = await findReceipt({customer:customer.customer})  
   return allRevenues
  }
  

  module.exports = {
   addReceipt,
   addReceipts,
   findReceipt,
   getBy2Date,
   getByMonth,
   getByYear,
   getByCust
  }
