import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data-service/data-service.service';
import { FormControl, FormGroup, ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule,CalendarModule,ProgressSpinnerModule],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.scss'
})


export class ExpensesComponent   {

  date: Date | undefined;

  succses:string = ''
  flagSpinner:boolean = false
  expenseForm:FormGroup
  constructor(private dataService: DataService) {
  this.expenseForm = new FormGroup({
    provider: new FormControl(''),
    date: new FormControl(''),
    paymentMethods: new FormControl(''),
    amount: new FormControl(''),
    details: new FormControl(''),
  })
}


saveExpense() {
  if (this.expenseForm.valid) {
    this.dataService.addExpense(this.expenseForm.value).subscribe(
      (response)=>{
        setTimeout(() => {
          this.flagSpinner = false; // Hide the spinner after a delay
          this.succses = 'ההוצאה נשמרה בהצלחה';
        }, 2000); // Delay in milliseconds (e.g., 2000ms = 2 seconds)
      

      },
      (error)=>{
        console.log('Error adding receipt:',error);
      }
      )
  } else {
    alert('Please fill in all required fields correctly.');
  }
}}