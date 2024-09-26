import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer, Receipt,Expense } from '../modules/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://127.0.0.1:3000'; // Example API URL

  constructor(private http: HttpClient) {}

  
//כל הלקוחות
  get allCustomers(): Observable<Array<Customer>> {
    const r =  this.http.get<Array<Customer>>(`${this.apiUrl}/customer/findCustomer`);
       
    return r
  }
//כל הקבלות
  get allReceipts(): Observable<Array<Receipt>> {
    return this.http.get<Array<any>>(`${this.apiUrl}/receipt/findReceipt`);
  }
//הוספת קבלה
addReceipt(receipt: Receipt): Observable<Receipt> {
  return this.http.post<Receipt>(`${this.apiUrl}/receipt/addReceipt`, receipt);
}
//מציאת לקוח קיים
  findCustomer(filter: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/customer/findCustomer/${filter}`);
  }

  getExpenseByYear(year: number): Observable<Array<Expense>>{
   return this.http.get<Array<Expense>>(`${this.apiUrl}/expense/getByYear/${year}`);
      }

  getRevenueByYear(year: number): Observable<Array<any>>{
        return this.http.get<Array<any>>(`${this.apiUrl}/receipt/getByYear/${year}`);
     }

  getExpenseByMonth(month: number): Observable<Array<Expense>>{
   return this.http.get<Array<Expense>>(`${this.apiUrl}/expense/getByMonth/${month}`);
     }
   getRevenueByMonth(month: number): Observable<Array<any>>{
      return this.http.get<Array<any>>(`${this.apiUrl}/receipt/getByMonth/${month}`);
      }  

  getExpenseBy2date(startDate: Date,endDate:Date): Observable<Array<Expense>>{
     return this.http.get<Array<Expense>>(`${this.apiUrl}/expense/getBy2Date/${startDate}/${endDate}`);
     }  
  getRevenueBy2date(startDate: Date,endDate:Date): Observable<Array<Receipt>>{
      return this.http.get<Array<Receipt>>(`${this.apiUrl}/receipt/getBy2Date/${startDate}/${endDate}`);
      }       
  addCustomer(newCustomer: any): Observable<void> {
      return this.http.post<void>(`${this.apiUrl}/customer/addCustomer`, newCustomer);
    }
  addExpense(expense: Expense): Observable<void> {
      return this.http.post<void>(`${this.apiUrl}/expense/addExpense`, expense);
    }
  getByCust(customer:any):Observable<Receipt[]>{    
      return this.http.get<Receipt[]>(`${this.apiUrl}/receipt/getByCust/${customer}`);

    }
}
