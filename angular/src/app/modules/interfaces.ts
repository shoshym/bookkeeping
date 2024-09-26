export interface Customer{
    number:number,
    name:string
 }
export interface Receipt{
   customer:Customer,
   date:Date,
   paymentMethods:string,
   amount:number,
   details:string
}
export interface Expense{
    date:Date,
    amount:number,
    provider:string,
    paymentMethods:string,
  details:string
  }