import { Component } from '@angular/core';
import { DataService } from '../../data-service/data-service.service';
import { CommonModule } from '@angular/common';
import { Customer } from '../../modules/interfaces';
import { PaymentComponent } from '../payment/payment.component';
import { RevenuesComponent } from '../revenues/revenues.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-segmentation',
  standalone: true,
  imports: [CommonModule,PaymentComponent,RevenuesComponent,FormsModule],
  templateUrl: './data-segmentation.component.html',
  styleUrl: './data-segmentation.component.scss'
})

export class DataSegmentationComponent {
  rangeDates: Date[] | undefined;
  startDate: any;
  endDate: any;
  customers :Customer[] = []; // List of customers
  value:any
  expense:any =[]
  revenue:any = []
  flagExpense:boolean = false
  flagRevenue:boolean = false
  flagYear:boolean = false
  flagMonth:boolean = false
  flag2date:boolean = false
  flagCust:boolean = false
  constructor(private dataService: DataService) {
    this.dataService.allCustomers.subscribe(customers => {
        this.customers = customers;
    });
  }

getByYear(event: any) {
  const value = (event.target as HTMLInputElement).value
  const year = parseInt(value)
  if(this.flagExpense){
    this.dataService.getExpenseByYear(year).subscribe((response) => {
      this.expense = response
    })}
  if(this.flagRevenue){
    this.dataService.getRevenueByYear(year).subscribe((response) => {
      this.revenue = response      
    })
  }
}

getByMonth(event: any) {
  const value = (event.target as HTMLInputElement).value
  const month = parseInt(value)
  if(this.flagExpense){
    this.dataService.getExpenseByMonth(month).subscribe((response) => {
      this.expense = response
    });
}
if(this.flagRevenue){
  this.dataService.getRevenueByMonth(month).subscribe((response) => {
    this.revenue = response
  });
}
}

getBy2date(){
  this.startDate = (this.startDate.target as HTMLInputElement).value
  this.endDate = (this.endDate.target as HTMLInputElement).value
  if(this.flagExpense){
    this.dataService.getExpenseBy2date(new Date(this.startDate),new Date(this.endDate)).subscribe((response) => {
      this.expense = response
  })}
  if(this.flagRevenue)
    this.dataService.getRevenueBy2date(new Date(this.startDate),new Date(this.endDate)).subscribe((response) => {
      this.revenue = response
  })
}

getByCust(customer:any){
    const cust = (customer.target as HTMLInputElement).value
    this.dataService.getByCust(cust).subscribe((response) => {
      this.revenue = response
    });
    
}  

}
