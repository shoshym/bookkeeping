require('dotenv').config()
const { MongoOperations } = require('../db/mongo-operations')

const collection= process.env.MONGO_EXPENSES_COLLECTION
const mongoOperation = new MongoOperations('project')

const addExpense = async (expense)=> {
  mongoOperation.Collection = collection
  const response = await mongoOperation.insertItem(expense)
  return response

}

const addExpenses = async (expenses)=> {
  mongoOperation.Collection = collection
  const response = await mongoOperation.insertList(expenses)
  return response
}

const findExpens = async (filter)=> {
  mongoOperation.Collection = collection
  const response = await mongoOperation.find({filter})  
  return response
}
const getByMonth = async (month) => {
  mongoOperation.Collection = collection
  const allExpenses = await findExpens()
  const result = allExpenses.filter(e => new Date(e.date).getMonth()+1 == month.month)  
return result
}

const getByYear = async (year) =>{  
  mongoOperation.Collection = collection
  const allExpenses = await findExpens()
  const result = allExpenses.filter(e => (new Date(e.date).getFullYear()) == year.year)
return result
}

const getBy2Date = async (startDate,endDate) =>{
  mongoOperation.Collection = collection
  const allExpenses = await findExpens()
  const result = allExpenses.filter(e => {
    const expenseDate = new Date(e.date);
    return expenseDate >= startDate && expenseDate <= endDate;
})
 return result
}
  module.exports = {
    addExpense,
    addExpenses,
    findExpens,
    getByMonth,
    getByYear,
    getBy2Date
  }