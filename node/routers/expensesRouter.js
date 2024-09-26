const express = require('express');
const {  addExpense, addExpenses, findExpens,
         getByMonth,  getByYear,  getBy2Date}  = require('../services/modules/expenses')

const router = express.Router()

router.get('/findExpens/:filter?',async(req,res)=>{
    try{
      const filter = req.query
      const expense = await findExpens(filter)
      res.status(200).json({expense})
    }
    catch(error){
      res.status(500).send(error.message)
    }
  })
  
router.get('/getByMonth/:month',async(req,res)=>{
    try{
      const month = req.params
      const expenses = await getByMonth(month)
      res.status(200).json({expenses})
    }
    catch(error){
      res.status(500).send(error.message)
    }
  })

router.get('/getByYear/:year',async(req,res)=>{
    try{
      
      const year = req.params      
      const expenses = await getByYear(year)
      res.status(200).json({expenses})
    }
    catch(error){
      res.status(500).send(error.message)
    }
  })

router.get('/getBy2Date/:startDate/:endDate',async(req,res)=>{
    try{      
      const {startDate,endDate} = req.params
      console.log({startDate},{endDate});
      
      const expenses = await getBy2Date(new Date(startDate),new Date(endDate))
      res.status(200).json({expenses})
    }
    catch(error){
      res.status(500).send(error.message)
    }
  })
  

router.post('/addExpense',express.json(),async (req,res)=>{
    try{
      const expense = req.body;
      const newExpense = await addExpense(expense) 
      res.status(201).send({newExpense})
    }
    catch(error){
      res.status(500).send(error.message)
    }
})

router.post('/addExpenses',express.json(),async (req,res)=>{
    try{
      const expenses = req.body;
      const newExpenses = await addExpenses(expenses) 
      res.status(201).send({newExpenses})
    }
    catch(error){
      res.status(500).send(error.message)
    }
})

module.exports = router;