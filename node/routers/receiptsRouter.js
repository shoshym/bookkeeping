const express = require('express');
const {addReceipt, addReceipts, findReceipt
  ,getBy2Date,getByCust,getByMonth,getByYear
}  = require('../services/modules/receipt')

const router = express.Router()

router.get('/findReceipt/:filter?',async(req,res)=>{
    try{
      const filter = req.query
      const receipt = await findReceipt(filter)
      res.status(200).json({receipt})
    }
    catch(error){
      res.status(500).send(error.message)
    }
  })
  

router.post('/addReceipt',express.json(),async (req,res)=>{
    try{
      const receipt = req.body;
      const newReceipt = await addReceipt(receipt) 
      res.status(201).send({newReceipt})
    }
    catch(error){
      res.status(500).send(error.message)
    }
})

router.post('/addReceipts',express.json(),async (req,res)=>{
    try{
      const receipts = req.body;
      const newReceipts = await addReceipts(receipts) 
      res.status(201).send({newReceipts})
    }
    catch(error){
      res.status(500).send(error.message)
    }
})

router.get('/getByCust/:customer',async(req,res)=>{
  try{
    const customer = req.params
    const receipt = await getByCust(customer)
    res.status(200).json({receipt})
  }
  catch(error){
    res.status(500).send(error.message)
  }
})

router.get('/getByMonth/:month',async(req,res)=>{
  try{
    const month = req.params
    const receipt = await getByMonth(month)
    res.status(200).json({receipt})
  }
  catch(error){
    res.status(500).send(error.message)
  }
})

router.get('/getByYear/:year',async(req,res)=>{
  try{
    const year = req.params
    const receipt = await getByYear(year)
    res.status(200).json({receipt})
  }
  catch(error){
    res.status(500).send(error.message)
  }
})

router.get('/getBy2Date/:startDate/:endDate',async(req,res)=>{
  try{
    const {startDate,endDate} = req.params
    const receipt = await getBy2Date(startDate,endDate)
    res.status(200).json({receipt})
  }
  catch(error){
    res.status(500).send(error.message)
  }
})

module.exports = router;