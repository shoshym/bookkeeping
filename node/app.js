const express = require("express")
const cors = require('cors');

const customer_router = require('./routers/customersRouter')
const expense_router = require('./routers/expensesRouter')
const receipt_router = require('./routers/receiptsRouter')

const app = express()

app.use(cors())

app.get('/',(req,res) =>{
    res.status(200).json({message:'welcome'})
})

app.use('/customer',customer_router)
app.use('/expense',expense_router)
app.use('/receipt',receipt_router)

module.exports = app